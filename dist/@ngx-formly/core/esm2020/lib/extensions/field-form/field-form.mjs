import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { getFieldValue, defineHiddenProp, hasKey, getKeyPath } from '../../utils';
import { registerControl, findControl, updateValidity } from './utils';
import { of } from 'rxjs';
export class FieldFormExtension {
    prePopulate(field) {
        if (!this.root) {
            this.root = field;
        }
        if (field.parent) {
            Object.defineProperty(field, 'form', {
                get: () => field.parent.formControl,
                configurable: true,
            });
        }
    }
    onPopulate(field) {
        if (field.hasOwnProperty('fieldGroup') && !hasKey(field)) {
            defineHiddenProp(field, 'formControl', field.form);
        }
        else {
            this.addFormControl(field);
        }
    }
    postPopulate(field) {
        if (this.root !== field) {
            return;
        }
        this.root = null;
        const markForCheck = this.setValidators(field);
        if (markForCheck && field.parent) {
            let parent = field.parent;
            while (parent) {
                if (hasKey(parent) || !parent.parent) {
                    updateValidity(parent.formControl, true);
                }
                parent = parent.parent;
            }
        }
    }
    addFormControl(field) {
        let control = findControl(field);
        if (field.fieldArray) {
            return;
        }
        if (!control) {
            const controlOptions = { updateOn: field.modelOptions.updateOn };
            if (field.fieldGroup) {
                control = new FormGroup({}, controlOptions);
            }
            else {
                const value = hasKey(field) ? getFieldValue(field) : field.defaultValue;
                control = new FormControl({ value, disabled: !!field.props.disabled }, { ...controlOptions, initialValueIsDefault: true });
            }
        }
        registerControl(field, control);
    }
    setValidators(field, disabled = false) {
        if (disabled === false && hasKey(field) && field.props?.disabled) {
            disabled = true;
        }
        let markForCheck = false;
        field.fieldGroup?.forEach((f) => f && this.setValidators(f, disabled) && (markForCheck = true));
        if (hasKey(field) || !field.parent || (!hasKey(field) && !field.fieldGroup)) {
            const { formControl: c } = field;
            if (c) {
                if (hasKey(field) && c instanceof FormControl) {
                    if (disabled && c.enabled) {
                        c.disable({ emitEvent: false, onlySelf: true });
                        markForCheck = true;
                    }
                    if (!disabled && c.disabled) {
                        c.enable({ emitEvent: false, onlySelf: true });
                        markForCheck = true;
                    }
                }
                if (null === c.validator && this.hasValidators(field, '_validators')) {
                    c.setValidators(() => {
                        const v = Validators.compose(this.mergeValidators(field, '_validators'));
                        return v ? v(c) : null;
                    });
                    markForCheck = true;
                }
                if (null === c.asyncValidator && this.hasValidators(field, '_asyncValidators')) {
                    c.setAsyncValidators(() => {
                        const v = Validators.composeAsync(this.mergeValidators(field, '_asyncValidators'));
                        return v ? v(c) : of(null);
                    });
                    markForCheck = true;
                }
                if (markForCheck) {
                    updateValidity(c, true);
                    // update validity of `FormGroup` instance created by field with nested key.
                    let parent = c.parent;
                    for (let i = 1; i < getKeyPath(field).length; i++) {
                        if (parent) {
                            updateValidity(parent, true);
                            parent = parent.parent;
                        }
                    }
                }
            }
        }
        return markForCheck;
    }
    hasValidators(field, type) {
        const c = field.formControl;
        if (c?._fields?.length > 1 && c._fields.some((f) => f[type].length > 0)) {
            return true;
        }
        else if (field[type].length > 0) {
            return true;
        }
        return field.fieldGroup?.some((f) => f?.fieldGroup && !hasKey(f) && this.hasValidators(f, type));
    }
    mergeValidators(field, type) {
        const validators = [];
        const c = field.formControl;
        if (c?._fields?.length > 1) {
            c._fields
                .filter((f) => !f._hide)
                .forEach((f) => validators.push(...f[type]));
        }
        else if (field[type]) {
            validators.push(...field[type]);
        }
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((f) => f?.fieldGroup && !hasKey(f))
                .forEach((f) => validators.push(...this.mergeValidators(f, type)));
        }
        return validators;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9saWIvZXh0ZW5zaW9ucy9maWVsZC1mb3JtL2ZpZWxkLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVgsVUFBVSxHQUdYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUNuQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU8sQ0FBQyxXQUFXO2dCQUNwQyxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBNkI7UUFDdEMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hELGdCQUFnQixDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxD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LENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVPLGVBQWUsQ0FBSSxLQUE2QixFQUFFLElBQXdDO1FBQ2hHLE1BQU0sVUFBVSxHQUFRLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLENBQUMsQ0FBQyxPQUFPO2lCQUNOLE1BQU0sQ0FBQyxDQUFDLENBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDL0MsT0FBTyxDQUFDLENBQUMsQ0FBeUIsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDcEIsS0FBSyxDQUFDLFVBQVU7aUJBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtbHlFeHRlbnNpb24sIEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgQWJzdHJhY3RDb250cm9sT3B0aW9ucyxcbiAgVmFsaWRhdG9ycyxcbiAgVmFsaWRhdG9yRm4sXG4gIEFzeW5jVmFsaWRhdG9yRm4sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldEZpZWxkVmFsdWUsIGRlZmluZUhpZGRlblByb3AsIGhhc0tleSwgZ2V0S2V5UGF0aCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IHJlZ2lzdGVyQ29udHJvbCwgZmluZENvbnRyb2wsIHVwZGF0ZVZhbGlkaXR5IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRGb3JtRXh0ZW5zaW9uIGltcGxlbWVudHMgRm9ybWx5RXh0ZW5zaW9uIHtcbiAgcHJpdmF0ZSByb290OiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlO1xuICBwcmVQb3B1bGF0ZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICB0aGlzLnJvb3QgPSBmaWVsZDtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQucGFyZW50KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsICdmb3JtJywge1xuICAgICAgICBnZXQ6ICgpID0+IGZpZWxkLnBhcmVudCEuZm9ybUNvbnRyb2wsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2ZpZWxkR3JvdXAnKSAmJiAhaGFzS2V5KGZpZWxkKSkge1xuICAgICAgZGVmaW5lSGlkZGVuUHJvcChmaWVsZCwgJ2Zvcm1Db250cm9sJywgZmllbGQuZm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkRm9ybUNvbnRyb2woZmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIHBvc3RQb3B1bGF0ZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICAgIGlmICh0aGlzLnJvb3QgIT09IGZpZWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICBjb25zdCBtYXJrRm9yQ2hlY2sgPSB0aGlzLnNldFZhbGlkYXRvcnMoZmllbGQpO1xuICAgIGlmIChtYXJrRm9yQ2hlY2sgJiYgZmllbGQucGFyZW50KSB7XG4gICAgICBsZXQgcGFyZW50ID0gZmllbGQucGFyZW50O1xuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBpZiAoaGFzS2V5KHBhcmVudCkgfHwgIXBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgICB1cGRhdGVWYWxpZGl0eShwYXJlbnQuZm9ybUNvbnRyb2wsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRGb3JtQ29udHJvbChmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICAgIGxldCBjb250cm9sID0gZmluZENvbnRyb2woZmllbGQpO1xuICAgIGlmIChmaWVsZC5maWVsZEFycmF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICBjb25zdCBjb250cm9sT3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyA9IHsgdXBkYXRlT246IGZpZWxkLm1vZGVsT3B0aW9ucy51cGRhdGVPbiB9O1xuXG4gICAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgICBjb250cm9sID0gbmV3IEZvcm1Hcm91cCh7fSwgY29udHJvbE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBoYXNLZXkoZmllbGQpID8gZ2V0RmllbGRWYWx1ZShmaWVsZCkgOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXG4gICAgICAgICAgeyB2YWx1ZSwgZGlzYWJsZWQ6ICEhZmllbGQucHJvcHMuZGlzYWJsZWQgfSxcbiAgICAgICAgICB7IC4uLmNvbnRyb2xPcHRpb25zLCBpbml0aWFsVmFsdWVJc0RlZmF1bHQ6IHRydWUgfSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckNvbnRyb2woZmllbGQsIGNvbnRyb2wpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWxpZGF0b3JzKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgaWYgKGRpc2FibGVkID09PSBmYWxzZSAmJiBoYXNLZXkoZmllbGQpICYmIGZpZWxkLnByb3BzPy5kaXNhYmxlZCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBtYXJrRm9yQ2hlY2sgPSBmYWxzZTtcbiAgICBmaWVsZC5maWVsZEdyb3VwPy5mb3JFYWNoKChmKSA9PiBmICYmIHRoaXMuc2V0VmFsaWRhdG9ycyhmLCBkaXNhYmxlZCkgJiYgKG1hcmtGb3JDaGVjayA9IHRydWUpKTtcbiAgICBpZiAoaGFzS2V5KGZpZWxkKSB8fCAhZmllbGQucGFyZW50IHx8ICghaGFzS2V5KGZpZWxkKSAmJiAhZmllbGQuZmllbGRHcm91cCkpIHtcbiAgICAgIGNvbnN0IHsgZm9ybUNvbnRyb2w6IGMgfSA9IGZpZWxkO1xuICAgICAgaWYgKGMpIHtcbiAgICAgICAgaWYgKGhhc0tleShmaWVsZCkgJiYgYyBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICAgICAgaWYgKGRpc2FibGVkICYmIGMuZW5hYmxlZCkge1xuICAgICAgICAgICAgYy5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSwgb25seVNlbGY6IHRydWUgfSk7XG4gICAgICAgICAgICBtYXJrRm9yQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZGlzYWJsZWQgJiYgYy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgYy5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlLCBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG51bGwgPT09IGMudmFsaWRhdG9yICYmIHRoaXMuaGFzVmFsaWRhdG9ycyhmaWVsZCwgJ192YWxpZGF0b3JzJykpIHtcbiAgICAgICAgICBjLnNldFZhbGlkYXRvcnMoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IFZhbGlkYXRvcnMuY29tcG9zZSh0aGlzLm1lcmdlVmFsaWRhdG9yczxWYWxpZGF0b3JGbj4oZmllbGQsICdfdmFsaWRhdG9ycycpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHYgPyB2KGMpIDogbnVsbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXJrRm9yQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG51bGwgPT09IGMuYXN5bmNWYWxpZGF0b3IgJiYgdGhpcy5oYXNWYWxpZGF0b3JzKGZpZWxkLCAnX2FzeW5jVmFsaWRhdG9ycycpKSB7XG4gICAgICAgICAgYy5zZXRBc3luY1ZhbGlkYXRvcnMoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKHRoaXMubWVyZ2VWYWxpZGF0b3JzPEFzeW5jVmFsaWRhdG9yRm4+KGZpZWxkLCAnX2FzeW5jVmFsaWRhdG9ycycpKTtcbiAgICAgICAgICAgIHJldHVybiB2ID8gdihjKSA6IG9mKG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWFya0ZvckNoZWNrKSB7XG4gICAgICAgICAgdXBkYXRlVmFsaWRpdHkoYywgdHJ1ZSk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgdmFsaWRpdHkgb2YgYEZvcm1Hcm91cGAgaW5zdGFuY2UgY3JlYXRlZCBieSBmaWVsZCB3aXRoIG5lc3RlZCBrZXkuXG4gICAgICAgICAgbGV0IHBhcmVudCA9IGMucGFyZW50O1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZ2V0S2V5UGF0aChmaWVsZCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgdXBkYXRlVmFsaWRpdHkocGFyZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFya0ZvckNoZWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNWYWxpZGF0b3JzKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCB0eXBlOiAnX3ZhbGlkYXRvcnMnIHwgJ19hc3luY1ZhbGlkYXRvcnMnKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYyA9IGZpZWxkLmZvcm1Db250cm9sO1xuICAgIGlmIChjPy5fZmllbGRzPy5sZW5ndGggPiAxICYmIGMuX2ZpZWxkcy5zb21lKChmKSA9PiBmW3R5cGVdLmxlbmd0aCA+IDApKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkW3R5cGVdLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZC5maWVsZEdyb3VwPy5zb21lKChmKSA9PiBmPy5maWVsZEdyb3VwICYmICFoYXNLZXkoZikgJiYgdGhpcy5oYXNWYWxpZGF0b3JzKGYsIHR5cGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VWYWxpZGF0b3JzPFQ+KGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCB0eXBlOiAnX3ZhbGlkYXRvcnMnIHwgJ19hc3luY1ZhbGlkYXRvcnMnKTogVFtdIHtcbiAgICBjb25zdCB2YWxpZGF0b3JzOiBhbnkgPSBbXTtcbiAgICBjb25zdCBjID0gZmllbGQuZm9ybUNvbnRyb2w7XG4gICAgaWYgKGM/Ll9maWVsZHM/Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGMuX2ZpZWxkc1xuICAgICAgICAuZmlsdGVyKChmOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSA9PiAhZi5faGlkZSlcbiAgICAgICAgLmZvckVhY2goKGY6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpID0+IHZhbGlkYXRvcnMucHVzaCguLi5mW3R5cGVdKSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZFt0eXBlXSkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKC4uLmZpZWxkW3R5cGVdKTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgZmllbGQuZmllbGRHcm91cFxuICAgICAgICAuZmlsdGVyKChmKSA9PiBmPy5maWVsZEdyb3VwICYmICFoYXNLZXkoZikpXG4gICAgICAgIC5mb3JFYWNoKChmKSA9PiB2YWxpZGF0b3JzLnB1c2goLi4udGhpcy5tZXJnZVZhbGlkYXRvcnMoZiwgdHlwZSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgfVxufVxuIl19