import { isObservable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { ChangeDetectorRef, ComponentRef, TemplateRef, Type } from '@angular/core';
export function disableTreeValidityCall(form, callback) {
    const _updateTreeValidity = form._updateTreeValidity.bind(form);
    form._updateTreeValidity = () => { };
    callback();
    form._updateTreeValidity = _updateTreeValidity;
}
export function getFieldId(formId, field, index) {
    if (field.id) {
        return field.id;
    }
    let type = field.type;
    if (!type && field.template) {
        type = 'template';
    }
    if (type instanceof Type) {
        type = type.prototype.constructor.name;
    }
    return [formId, type, field.key, index].join('_');
}
export function hasKey(field) {
    return !isNil(field.key) && field.key !== '' && (!Array.isArray(field.key) || field.key.length > 0);
}
export function getKeyPath(field) {
    if (!hasKey(field)) {
        return [];
    }
    /* We store the keyPath in the field for performance reasons. This function will be called frequently. */
    if (field._keyPath?.key !== field.key) {
        let path = [];
        if (typeof field.key === 'string') {
            const key = field.key.indexOf('[') === -1 ? field.key : field.key.replace(/\[(\w+)\]/g, '.$1');
            path = key.indexOf('.') !== -1 ? key.split('.') : [key];
        }
        else if (Array.isArray(field.key)) {
            path = field.key.slice(0);
        }
        else {
            path = [`${field.key}`];
        }
        defineHiddenProp(field, '_keyPath', { key: field.key, path });
    }
    return field._keyPath.path.slice(0);
}
export const FORMLY_VALIDATORS = ['required', 'pattern', 'minLength', 'maxLength', 'min', 'max'];
export function assignFieldValue(field, value) {
    let paths = getKeyPath(field);
    if (paths.length === 0) {
        return;
    }
    let root = field;
    while (root.parent) {
        root = root.parent;
        paths = [...getKeyPath(root), ...paths];
    }
    if (value === undefined && field.resetOnHide) {
        const k = paths.pop();
        const m = paths.reduce((model, path) => model[path] || {}, root.model);
        delete m[k];
        return;
    }
    assignModelValue(root.model, paths, value);
}
export function assignModelValue(model, paths, value) {
    for (let i = 0; i < paths.length - 1; i++) {
        const path = paths[i];
        if (!model[path] || !isObject(model[path])) {
            model[path] = /^\d+$/.test(paths[i + 1]) ? [] : {};
        }
        model = model[path];
    }
    model[paths[paths.length - 1]] = clone(value);
}
export function getFieldValue(field) {
    let model = field.parent ? field.parent.model : field.model;
    for (const path of getKeyPath(field)) {
        if (!model) {
            return model;
        }
        model = model[path];
    }
    return model;
}
export function reverseDeepMerge(dest, ...args) {
    args.forEach((src) => {
        for (const srcArg in src) {
            if (isNil(dest[srcArg]) || isBlankString(dest[srcArg])) {
                dest[srcArg] = clone(src[srcArg]);
            }
            else if (objAndSameType(dest[srcArg], src[srcArg])) {
                reverseDeepMerge(dest[srcArg], src[srcArg]);
            }
        }
    });
    return dest;
}
// check a value is null or undefined
export function isNil(value) {
    return value == null;
}
export function isUndefined(value) {
    return value === undefined;
}
export function isBlankString(value) {
    return value === '';
}
export function isFunction(value) {
    return typeof value === 'function';
}
export function objAndSameType(obj1, obj2) {
    return (isObject(obj1) &&
        isObject(obj2) &&
        Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2) &&
        !(Array.isArray(obj1) || Array.isArray(obj2)));
}
export function isObject(x) {
    return x != null && typeof x === 'object';
}
export function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
export function clone(value) {
    if (!isObject(value) ||
        isObservable(value) ||
        value instanceof TemplateRef ||
        /* instanceof SafeHtmlImpl */ value.changingThisBreaksApplicationSecurity ||
        ['RegExp', 'FileList', 'File', 'Blob'].indexOf(value.constructor.name) !== -1) {
        return value;
    }
    if (value instanceof Set) {
        return new Set(value);
    }
    if (value instanceof Map) {
        return new Map(value);
    }
    if (value instanceof Uint8Array) {
        return new Uint8Array(value);
    }
    if (value instanceof Uint16Array) {
        return new Uint16Array(value);
    }
    if (value instanceof Uint32Array) {
        return new Uint32Array(value);
    }
    // https://github.com/moment/moment/blob/master/moment.js#L252
    if (value._isAMomentObject && isFunction(value.clone)) {
        return value.clone();
    }
    if (value instanceof AbstractControl) {
        return null;
    }
    if (value instanceof Date) {
        return new Date(value.getTime());
    }
    if (Array.isArray(value)) {
        return value.slice(0).map((v) => clone(v));
    }
    // best way to clone a js object maybe
    // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
    const proto = Object.getPrototypeOf(value);
    let c = Object.create(proto);
    c = Object.setPrototypeOf(c, proto);
    // need to make a deep copy so we dont use Object.assign
    // also Object.assign wont copy property descriptor exactly
    return Object.keys(value).reduce((newVal, prop) => {
        const propDesc = Object.getOwnPropertyDescriptor(value, prop);
        if (propDesc.get) {
            Object.defineProperty(newVal, prop, propDesc);
        }
        else {
            newVal[prop] = clone(value[prop]);
        }
        return newVal;
    }, c);
}
export function defineHiddenProp(field, prop, defaultValue) {
    Object.defineProperty(field, prop, { enumerable: false, writable: true, configurable: true });
    field[prop] = defaultValue;
}
export function observeDeep(source, paths, setFn) {
    let observers = [];
    const unsubscribe = () => {
        observers.forEach((observer) => observer());
        observers = [];
    };
    const observer = observe(source, paths, ({ firstChange, currentValue }) => {
        !firstChange && setFn();
        unsubscribe();
        if (isObject(currentValue) && currentValue.constructor.name === 'Object') {
            Object.keys(currentValue).forEach((prop) => {
                observers.push(observeDeep(source, [...paths, prop], setFn));
            });
        }
    });
    return () => {
        observer.unsubscribe();
        unsubscribe();
    };
}
export function observe(o, paths, setFn) {
    if (!o._observers) {
        defineHiddenProp(o, '_observers', {});
    }
    let target = o;
    for (let i = 0; i < paths.length - 1; i++) {
        if (!target[paths[i]] || !isObject(target[paths[i]])) {
            target[paths[i]] = /^\d+$/.test(paths[i + 1]) ? [] : {};
        }
        target = target[paths[i]];
    }
    const key = paths[paths.length - 1];
    const prop = paths.join('.');
    if (!o._observers[prop]) {
        o._observers[prop] = { value: target[key], onChange: [] };
    }
    const state = o._observers[prop];
    if (target[key] !== state.value) {
        state.value = target[key];
    }
    if (setFn && state.onChange.indexOf(setFn) === -1) {
        state.onChange.push(setFn);
        setFn({ currentValue: state.value, firstChange: true });
        if (state.onChange.length >= 1 && isObject(target)) {
            const { enumerable } = Object.getOwnPropertyDescriptor(target, key) || { enumerable: true };
            Object.defineProperty(target, key, {
                enumerable,
                configurable: true,
                get: () => state.value,
                set: (currentValue) => {
                    if (currentValue !== state.value) {
                        const previousValue = state.value;
                        state.value = currentValue;
                        state.onChange.forEach((changeFn) => changeFn({ previousValue, currentValue, firstChange: false }));
                    }
                },
            });
        }
    }
    return {
        setValue(currentValue, emitEvent = true) {
            if (currentValue === state.value) {
                return;
            }
            const previousValue = state.value;
            state.value = currentValue;
            state.onChange.forEach((changeFn) => {
                if (changeFn !== setFn && emitEvent) {
                    changeFn({ previousValue, currentValue, firstChange: false });
                }
            });
        },
        unsubscribe() {
            state.onChange = state.onChange.filter((changeFn) => changeFn !== setFn);
            if (state.onChange.length === 0) {
                delete o._observers[prop];
            }
        },
    };
}
export function getField(f, key) {
    key = (Array.isArray(key) ? key.join('.') : key);
    if (!f.fieldGroup) {
        return undefined;
    }
    for (let i = 0, len = f.fieldGroup.length; i < len; i++) {
        const c = f.fieldGroup[i];
        const k = (Array.isArray(c.key) ? c.key.join('.') : c.key);
        if (k === key) {
            return c;
        }
        if (c.fieldGroup && (isNil(k) || key.indexOf(`${k}.`) === 0)) {
            const field = getField(c, isNil(k) ? key : key.slice(k.length + 1));
            if (field) {
                return field;
            }
        }
    }
    return undefined;
}
export function markFieldForCheck(field) {
    field._componentRefs?.forEach((ref) => {
        // NOTE: we cannot use ref.changeDetectorRef, see https://github.com/ngx-formly/ngx-formly/issues/2191
        if (ref instanceof ComponentRef) {
            const changeDetectorRef = ref.injector.get(ChangeDetectorRef);
            changeDetectorRef.markForCheck();
        }
        else {
            ref.markForCheck();
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBUyxFQUFFLFFBQWtCO0lBQ25FLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsRUFBRSxDQUFDO0lBQ1gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO0FBQ2pELENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLE1BQWMsRUFBRSxLQUF3QixFQUFFLEtBQXNCO0lBQ3pGLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNaLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQztLQUNqQjtJQUNELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQzNCLElBQUksR0FBRyxVQUFVLENBQUM7S0FDbkI7SUFFRCxJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7UUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztLQUN4QztJQUVELE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVB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QUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFXLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1RCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7S0FDRjtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBNkI7SUFDN0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNwQyxzR0FBc0c7UUFDdEcsSUFBSSxHQUFHLFlBQVksWUFBWSxFQUFFO1lBQy9CLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RCxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50UmVmLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZVRyZWVWYWxpZGl0eUNhbGwoZm9ybTogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgY29uc3QgX3VwZGF0ZVRyZWVWYWxpZGl0eSA9IGZvcm0uX3VwZGF0ZVRyZWVWYWxpZGl0eS5iaW5kKGZvcm0pO1xuICBmb3JtLl91cGRhdGVUcmVlVmFsaWRpdHkgPSAoKSA9PiB7fTtcbiAgY2FsbGJhY2soKTtcbiAgZm9ybS5fdXBkYXRlVHJlZVZhbGlkaXR5ID0gX3VwZGF0ZVRyZWVWYWxpZGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkSWQoZm9ybUlkOiBzdHJpbmcsIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZywgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICBpZiAoZmllbGQuaWQpIHtcbiAgICByZXR1cm4gZmllbGQuaWQ7XG4gIH1cbiAgbGV0IHR5cGUgPSBmaWVsZC50eXBlO1xuICBpZiAoIXR5cGUgJiYgZmllbGQudGVtcGxhdGUpIHtcbiAgICB0eXBlID0gJ3RlbXBsYXRlJztcbiAgfVxuXG4gIGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZSkge1xuICAgIHR5cGUgPSB0eXBlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgcmV0dXJuIFtmb3JtSWQsIHR5cGUsIGZpZWxkLmtleSwgaW5kZXhdLmpvaW4oJ18nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0tleShmaWVsZDogRm9ybWx5RmllbGRDb25maWcpIHtcbiAgcmV0dXJuICFpc05pbChmaWVsZC5rZXkpICYmIGZpZWxkLmtleSAhPT0gJycgJiYgKCFBcnJheS5pc0FycmF5KGZpZWxkLmtleSkgfHwgZmllbGQua2V5Lmxlbmd0aCA+IDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5UGF0aChmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSk6IHN0cmluZ1tdIHtcbiAgaWYgKCFoYXNLZXkoZmllbGQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyogV2Ugc3RvcmUgdGhlIGtleVBhdGggaW4gdGhlIGZpZWxkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGZyZXF1ZW50bHkuICovXG4gIGlmIChmaWVsZC5fa2V5UGF0aD8ua2V5ICE9PSBmaWVsZC5rZXkpIHtcbiAgICBsZXQgcGF0aDogKHN0cmluZyB8IG51bWJlcilbXSA9IFtdO1xuICAgIGlmICh0eXBlb2YgZmllbGQua2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3Qga2V5ID0gZmllbGQua2V5LmluZGV4T2YoJ1snKSA9PT0gLTEgPyBmaWVsZC5rZXkgOiBmaWVsZC5rZXkucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKTtcbiAgICAgIHBhdGggPSBrZXkuaW5kZXhPZignLicpICE9PSAtMSA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLmtleSkpIHtcbiAgICAgIHBhdGggPSBmaWVsZC5rZXkuc2xpY2UoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBbYCR7ZmllbGQua2V5fWBdO1xuICAgIH1cblxuICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsICdfa2V5UGF0aCcsIHsga2V5OiBmaWVsZC5rZXksIHBhdGggfSk7XG4gIH1cblxuICByZXR1cm4gZmllbGQuX2tleVBhdGgucGF0aC5zbGljZSgwKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZPUk1MWV9WQUxJREFUT1JTID0gWydyZXF1aXJlZCcsICdwYXR0ZXJuJywgJ21pbkxlbmd0aCcsICdtYXhMZW5ndGgnLCAnbWluJywgJ21heCddO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduRmllbGRWYWx1ZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSwgdmFsdWU6IGFueSkge1xuICBsZXQgcGF0aHMgPSBnZXRLZXlQYXRoKGZpZWxkKTtcbiAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCByb290ID0gZmllbGQ7XG4gIHdoaWxlIChyb290LnBhcmVudCkge1xuICAgIHJvb3QgPSByb290LnBhcmVudDtcbiAgICBwYXRocyA9IFsuLi5nZXRLZXlQYXRoKHJvb3QpLCAuLi5wYXRoc107XG4gIH1cblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBmaWVsZC5yZXNldE9uSGlkZSkge1xuICAgIGNvbnN0IGsgPSBwYXRocy5wb3AoKTtcbiAgICBjb25zdCBtID0gcGF0aHMucmVkdWNlKChtb2RlbCwgcGF0aCkgPT4gbW9kZWxbcGF0aF0gfHwge30sIHJvb3QubW9kZWwpO1xuICAgIGRlbGV0ZSBtW2tdO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFzc2lnbk1vZGVsVmFsdWUocm9vdC5tb2RlbCwgcGF0aHMsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbk1vZGVsVmFsdWUobW9kZWw6IGFueSwgcGF0aHM6IHN0cmluZ1tdLCB2YWx1ZTogYW55KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xuICAgIGlmICghbW9kZWxbcGF0aF0gfHwgIWlzT2JqZWN0KG1vZGVsW3BhdGhdKSkge1xuICAgICAgbW9kZWxbcGF0aF0gPSAvXlxcZCskLy50ZXN0KHBhdGhzW2kgKyAxXSkgPyBbXSA6IHt9O1xuICAgIH1cblxuICAgIG1vZGVsID0gbW9kZWxbcGF0aF07XG4gIH1cblxuICBtb2RlbFtwYXRoc1twYXRocy5sZW5ndGggLSAxXV0gPSBjbG9uZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZyk6IGFueSB7XG4gIGxldCBtb2RlbCA9IGZpZWxkLnBhcmVudCA/IGZpZWxkLnBhcmVudC5tb2RlbCA6IGZpZWxkLm1vZGVsO1xuICBmb3IgKGNvbnN0IHBhdGggb2YgZ2V0S2V5UGF0aChmaWVsZCkpIHtcbiAgICBpZiAoIW1vZGVsKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuICAgIG1vZGVsID0gbW9kZWxbcGF0aF07XG4gIH1cblxuICByZXR1cm4gbW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRGVlcE1lcmdlKGRlc3Q6IGFueSwgLi4uYXJnczogYW55W10pIHtcbiAgYXJncy5mb3JFYWNoKChzcmMpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNyY0FyZyBpbiBzcmMpIHtcbiAgICAgIGlmIChpc05pbChkZXN0W3NyY0FyZ10pIHx8IGlzQmxhbmtTdHJpbmcoZGVzdFtzcmNBcmddKSkge1xuICAgICAgICBkZXN0W3NyY0FyZ10gPSBjbG9uZShzcmNbc3JjQXJnXSk7XG4gICAgICB9IGVsc2UgaWYgKG9iakFuZFNhbWVUeXBlKGRlc3Rbc3JjQXJnXSwgc3JjW3NyY0FyZ10pKSB7XG4gICAgICAgIHJldmVyc2VEZWVwTWVyZ2UoZGVzdFtzcmNBcmddLCBzcmNbc3JjQXJnXSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8vIGNoZWNrIGEgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcbmV4cG9ydCBmdW5jdGlvbiBpc05pbCh2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmtTdHJpbmcodmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgPT09ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmpBbmRTYW1lVHlwZShvYmoxOiBhbnksIG9iajI6IGFueSkge1xuICByZXR1cm4gKFxuICAgIGlzT2JqZWN0KG9iajEpICYmXG4gICAgaXNPYmplY3Qob2JqMikgJiZcbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmoyKSAmJlxuICAgICEoQXJyYXkuaXNBcnJheShvYmoxKSB8fCBBcnJheS5pc0FycmF5KG9iajIpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoeDogYW55KSB7XG4gIHJldHVybiB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG9iajogYW55KTogb2JqIGlzIFByb21pc2U8YW55PiB7XG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZTogYW55KTogYW55IHtcbiAgaWYgKFxuICAgICFpc09iamVjdCh2YWx1ZSkgfHxcbiAgICBpc09ic2VydmFibGUodmFsdWUpIHx8XG4gICAgdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiB8fFxuICAgIC8qIGluc3RhbmNlb2YgU2FmZUh0bWxJbXBsICovIHZhbHVlLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHkgfHxcbiAgICBbJ1JlZ0V4cCcsICdGaWxlTGlzdCcsICdGaWxlJywgJ0Jsb2InXS5pbmRleE9mKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpICE9PSAtMVxuICApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICByZXR1cm4gbmV3IFNldCh2YWx1ZSk7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICByZXR1cm4gbmV3IE1hcCh2YWx1ZSk7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbHVlKTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50MTZBcnJheSh2YWx1ZSk7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkge1xuICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9tYXN0ZXIvbW9tZW50LmpzI0wyNTJcbiAgaWYgKHZhbHVlLl9pc0FNb21lbnRPYmplY3QgJiYgaXNGdW5jdGlvbih2YWx1ZS5jbG9uZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuY2xvbmUoKTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFic3RyYWN0Q29udHJvbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDApLm1hcCgodikgPT4gY2xvbmUodikpO1xuICB9XG5cbiAgLy8gYmVzdCB3YXkgdG8gY2xvbmUgYSBqcyBvYmplY3QgbWF5YmVcbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE0NzQ5ODYvaG93LXRvLWNsb25lLWEtamF2YXNjcmlwdC1lczYtY2xhc3MtaW5zdGFuY2VcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBsZXQgYyA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICBjID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKGMsIHByb3RvKTtcbiAgLy8gbmVlZCB0byBtYWtlIGEgZGVlcCBjb3B5IHNvIHdlIGRvbnQgdXNlIE9iamVjdC5hc3NpZ25cbiAgLy8gYWxzbyBPYmplY3QuYXNzaWduIHdvbnQgY29weSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGV4YWN0bHlcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5yZWR1Y2UoKG5ld1ZhbCwgcHJvcCkgPT4ge1xuICAgIGNvbnN0IHByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwgcHJvcCk7XG4gICAgaWYgKHByb3BEZXNjLmdldCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld1ZhbCwgcHJvcCwgcHJvcERlc2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWxbcHJvcF0gPSBjbG9uZSh2YWx1ZVtwcm9wXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfSwgYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVIaWRkZW5Qcm9wKGZpZWxkOiBhbnksIHByb3A6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCBwcm9wLCB7IGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICBmaWVsZFtwcm9wXSA9IGRlZmF1bHRWYWx1ZTtcbn1cblxudHlwZSBJT2JzZXJ2ZUZuPFQ+ID0gKGNoYW5nZTogeyBjdXJyZW50VmFsdWU6IFQ7IHByZXZpb3VzVmFsdWU/OiBUOyBmaXJzdENoYW5nZTogYm9vbGVhbiB9KSA9PiB2b2lkO1xuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2ZXI8VD4ge1xuICBzZXRWYWx1ZTogKHZhbHVlOiBULCBlbWl0RXZlbnQ/OiBib29sZWFuKSA9PiB2b2lkO1xuICB1bnN1YnNjcmliZTogRnVuY3Rpb247XG59XG5pbnRlcmZhY2UgSU9ic2VydmVUYXJnZXQ8VD4ge1xuICBbcHJvcDogc3RyaW5nXTogYW55O1xuICBfb2JzZXJ2ZXJzPzoge1xuICAgIFtwcm9wOiBzdHJpbmddOiB7XG4gICAgICB2YWx1ZTogVDtcbiAgICAgIG9uQ2hhbmdlOiBJT2JzZXJ2ZUZuPFQ+W107XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVEZWVwPFQgPSBhbnk+KHNvdXJjZTogSU9ic2VydmVUYXJnZXQ8VD4sIHBhdGhzOiBzdHJpbmdbXSwgc2V0Rm46ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgbGV0IG9ic2VydmVyczogRnVuY3Rpb25bXSA9IFtdO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIoKSk7XG4gICAgb2JzZXJ2ZXJzID0gW107XG4gIH07XG4gIGNvbnN0IG9ic2VydmVyID0gb2JzZXJ2ZShzb3VyY2UsIHBhdGhzLCAoeyBmaXJzdENoYW5nZSwgY3VycmVudFZhbHVlIH0pID0+IHtcbiAgICAhZmlyc3RDaGFuZ2UgJiYgc2V0Rm4oKTtcblxuICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKGlzT2JqZWN0KGN1cnJlbnRWYWx1ZSkgJiYgY3VycmVudFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdPYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhjdXJyZW50VmFsdWUpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZURlZXAoc291cmNlLCBbLi4ucGF0aHMsIHByb3BdLCBzZXRGbikpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmU8VCA9IGFueT4obzogSU9ic2VydmVUYXJnZXQ8VD4sIHBhdGhzOiBzdHJpbmdbXSwgc2V0Rm4/OiBJT2JzZXJ2ZUZuPFQ+KTogSU9ic2VydmVyPFQ+IHtcbiAgaWYgKCFvLl9vYnNlcnZlcnMpIHtcbiAgICBkZWZpbmVIaWRkZW5Qcm9wKG8sICdfb2JzZXJ2ZXJzJywge30pO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IG87XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKCF0YXJnZXRbcGF0aHNbaV1dIHx8ICFpc09iamVjdCh0YXJnZXRbcGF0aHNbaV1dKSkge1xuICAgICAgdGFyZ2V0W3BhdGhzW2ldXSA9IC9eXFxkKyQvLnRlc3QocGF0aHNbaSArIDFdKSA/IFtdIDoge307XG4gICAgfVxuICAgIHRhcmdldCA9IHRhcmdldFtwYXRoc1tpXV07XG4gIH1cblxuICBjb25zdCBrZXkgPSBwYXRoc1twYXRocy5sZW5ndGggLSAxXTtcbiAgY29uc3QgcHJvcCA9IHBhdGhzLmpvaW4oJy4nKTtcbiAgaWYgKCFvLl9vYnNlcnZlcnNbcHJvcF0pIHtcbiAgICBvLl9vYnNlcnZlcnNbcHJvcF0gPSB7IHZhbHVlOiB0YXJnZXRba2V5XSwgb25DaGFuZ2U6IFtdIH07XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IG8uX29ic2VydmVyc1twcm9wXTtcbiAgaWYgKHRhcmdldFtrZXldICE9PSBzdGF0ZS52YWx1ZSkge1xuICAgIHN0YXRlLnZhbHVlID0gdGFyZ2V0W2tleV07XG4gIH1cblxuICBpZiAoc2V0Rm4gJiYgc3RhdGUub25DaGFuZ2UuaW5kZXhPZihzZXRGbikgPT09IC0xKSB7XG4gICAgc3RhdGUub25DaGFuZ2UucHVzaChzZXRGbik7XG4gICAgc2V0Rm4oeyBjdXJyZW50VmFsdWU6IHN0YXRlLnZhbHVlLCBmaXJzdENoYW5nZTogdHJ1ZSB9KTtcbiAgICBpZiAoc3RhdGUub25DaGFuZ2UubGVuZ3RoID49IDEgJiYgaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgY29uc3QgeyBlbnVtZXJhYmxlIH0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSB8fCB7IGVudW1lcmFibGU6IHRydWUgfTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gc3RhdGUudmFsdWUsXG4gICAgICAgIHNldDogKGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHN0YXRlLm9uQ2hhbmdlLmZvckVhY2goKGNoYW5nZUZuKSA9PiBjaGFuZ2VGbih7IHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2U6IGZhbHNlIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldFZhbHVlKGN1cnJlbnRWYWx1ZTogVCwgZW1pdEV2ZW50ID0gdHJ1ZSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gc3RhdGUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgICBzdGF0ZS52YWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgIHN0YXRlLm9uQ2hhbmdlLmZvckVhY2goKGNoYW5nZUZuKSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VGbiAhPT0gc2V0Rm4gJiYgZW1pdEV2ZW50KSB7XG4gICAgICAgICAgY2hhbmdlRm4oeyBwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUsIGZpcnN0Q2hhbmdlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHN0YXRlLm9uQ2hhbmdlID0gc3RhdGUub25DaGFuZ2UuZmlsdGVyKChjaGFuZ2VGbikgPT4gY2hhbmdlRm4gIT09IHNldEZuKTtcbiAgICAgIGlmIChzdGF0ZS5vbkNoYW5nZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIG8uX29ic2VydmVyc1twcm9wXTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGQoZjogRm9ybWx5RmllbGRDb25maWcsIGtleTogRm9ybWx5RmllbGRDb25maWdbJ2tleSddKTogRm9ybWx5RmllbGRDb25maWcge1xuICBrZXkgPSAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5LmpvaW4oJy4nKSA6IGtleSkgYXMgc3RyaW5nO1xuICBpZiAoIWYuZmllbGRHcm91cCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZi5maWVsZEdyb3VwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IGYuZmllbGRHcm91cFtpXTtcbiAgICBjb25zdCBrID0gKEFycmF5LmlzQXJyYXkoYy5rZXkpID8gYy5rZXkuam9pbignLicpIDogYy5rZXkpIGFzIHN0cmluZztcbiAgICBpZiAoayA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBpZiAoYy5maWVsZEdyb3VwICYmIChpc05pbChrKSB8fCBrZXkuaW5kZXhPZihgJHtrfS5gKSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gZ2V0RmllbGQoYywgaXNOaWwoaykgPyBrZXkgOiBrZXkuc2xpY2Uoay5sZW5ndGggKyAxKSk7XG4gICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrRmllbGRGb3JDaGVjayhmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICBmaWVsZC5fY29tcG9uZW50UmVmcz8uZm9yRWFjaCgocmVmKSA9PiB7XG4gICAgLy8gTk9URTogd2UgY2Fubm90IHVzZSByZWYuY2hhbmdlRGV0ZWN0b3JSZWYsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmd4LWZvcm1seS9uZ3gtZm9ybWx5L2lzc3Vlcy8yMTkxXG4gICAgaWYgKHJlZiBpbnN0YW5jZW9mIENvbXBvbmVudFJlZikge1xuICAgICAgY29uc3QgY2hhbmdlRGV0ZWN0b3JSZWYgPSByZWYuaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgICAgIGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==