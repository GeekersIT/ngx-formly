import { Directive, ViewChildren } from '@angular/core';
import { FieldType as CoreFieldType } from '@ngx-formly/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export class FieldType extends CoreFieldType {
    set formControls(formControls) {
        if (this.formField) {
            this.formField['control'] = formControls.first;
        }
    }
    get formField() {
        return this.field?.['_formField'];
    }
}
FieldType.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, deps: null, target: i0.ɵɵFactoryTarget.Directive });
FieldType.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: FieldType, viewQueries: [{ propertyName: "formControls", predicate: NgControl, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, decorators: [{
            type: Directive
        }], propDecorators: { formControls: [{
                type: ViewChildren,
                args: [NgControl]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9rZW5kby9mb3JtLWZpZWxkL3NyYy9maWVsZC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBcUIsU0FBUyxJQUFJLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJM0MsTUFBTSxPQUFnQixTQUEyRCxTQUFRLGFBQWdCO0lBQ3ZHLElBQXFDLFlBQVksQ0FBQyxZQUFrQztRQUNsRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELElBQVksU0FBUztRQUNuQixPQUFRLElBQUksQ0FBQyxLQUFhLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzt1R0FUbUIsU0FBUzsyRkFBVCxTQUFTLDJEQUNmLFNBQVM7NEZBREgsU0FBUztrQkFEOUIsU0FBUzs4QkFFNkIsWUFBWTtzQkFBaEQsWUFBWTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcsIEZpZWxkVHlwZSBhcyBDb3JlRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZFR5cGU8RiBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnID0gRm9ybWx5RmllbGRDb25maWc+IGV4dGVuZHMgQ29yZUZpZWxkVHlwZTxGPiB7XG4gIEBWaWV3Q2hpbGRyZW4oTmdDb250cm9sKSBwcml2YXRlIHNldCBmb3JtQ29udHJvbHMoZm9ybUNvbnRyb2xzOiBRdWVyeUxpc3Q8TmdDb250cm9sPikge1xuICAgIGlmICh0aGlzLmZvcm1GaWVsZCkge1xuICAgICAgdGhpcy5mb3JtRmllbGRbJ2NvbnRyb2wnXSA9IGZvcm1Db250cm9scy5maXJzdDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBmb3JtRmllbGQoKTogRm9ybUZpZWxkQ29tcG9uZW50IHtcbiAgICByZXR1cm4gKHRoaXMuZmllbGQgYXMgYW55KT8uWydfZm9ybUZpZWxkJ107XG4gIH1cbn1cbiJdfQ==