import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input } from '@angular/core';
import { ɵFormlyAttributes as FormlyAttributes } from '@ngx-formly/core';
import * as i0 from "@angular/core";
export class IonFormlyAttributes extends FormlyAttributes {
    constructor(renderer, elementRef, _document) {
        super(renderer, elementRef, _document);
    }
}
IonFormlyAttributes.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonFormlyAttributes, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive });
IonFormlyAttributes.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: IonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: { field: ["ionFormlyAttributes", "field"] }, host: { listeners: { "ionFocus": "onFocus($event)", "ionBlur": "onBlur($event)", "ionChange": "onChange($event)" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonFormlyAttributes, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line
                    selector: '[ionFormlyAttributes]',
                    host: {
                        '(ionFocus)': 'onFocus($event)',
                        '(ionBlur)': 'onBlur($event)',
                        '(ionChange)': 'onChange($event)',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { field: [{
                type: Input,
                args: ['ionFormlyAttributes']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LmF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvaW9uaWMvZm9ybS1maWVsZC9zcmMvZm9ybWx5LmF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLElBQUksZ0JBQWdCLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7O0FBVzVGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFFdkQsWUFBWSxRQUFtQixFQUFFLFVBQXNCLEVBQW9CLFNBQWM7UUFDdkYsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7aUhBSlUsbUJBQW1CLHFFQUVtQyxRQUFRO3FHQUY5RCxtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFUL0IsU0FBUzttQkFBQztvQkFDVCwyQkFBMkI7b0JBQzNCLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsaUJBQWlCO3dCQUMvQixXQUFXLEVBQUUsZ0JBQWdCO3dCQUM3QixhQUFhLEVBQUUsa0JBQWtCO3FCQUNsQztpQkFDRjs7MEJBRzJELE1BQU07MkJBQUMsUUFBUTs0Q0FEbEMsS0FBSztzQkFBM0MsS0FBSzt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgybVGb3JtbHlBdHRyaWJ1dGVzIGFzIEZvcm1seUF0dHJpYnV0ZXMsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbaW9uRm9ybWx5QXR0cmlidXRlc10nLFxuICBob3N0OiB7XG4gICAgJyhpb25Gb2N1cyknOiAnb25Gb2N1cygkZXZlbnQpJyxcbiAgICAnKGlvbkJsdXIpJzogJ29uQmx1cigkZXZlbnQpJyxcbiAgICAnKGlvbkNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIElvbkZvcm1seUF0dHJpYnV0ZXMgZXh0ZW5kcyBGb3JtbHlBdHRyaWJ1dGVzIHtcbiAgQElucHV0KCdpb25Gb3JtbHlBdHRyaWJ1dGVzJykgb3ZlcnJpZGUgZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnO1xuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50UmVmLCBfZG9jdW1lbnQpO1xuICB9XG59XG4iXX0=