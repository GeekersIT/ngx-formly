import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonRadio, IonicModule } from '@ionic/angular';
import { FormlyWrapperFormField } from './form-field.wrapper';
import { IonFormlyAttributes } from './formly.attributes';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export function formFieldLegacyExtension(field) {
    if (field.props?.hasOwnProperty('legacyLabel')) {
        return;
    }
    field.props = {
        legacyLabel: !IonRadio.prototype.hasOwnProperty('legacy'),
        ...(field.props || {}),
    };
}
export class FormlyFormFieldModule {
}
FormlyFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, declarations: [FormlyWrapperFormField, IonFormlyAttributes], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule, i1.FormlyModule], exports: [IonFormlyAttributes] });
FormlyFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
                extensions: [{ name: 'form-field-legacy', extension: { postPopulate: formFieldLegacyExtension } }],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField, IonFormlyAttributes],
                    exports: [IonFormlyAttributes],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
                                },
                            ],
                            extensions: [{ name: 'form-field-legacy', extension: { postPopulate: formFieldLegacyExtension } }],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvaW9uaWMvZm9ybS1maWVsZC9zcmMvZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFxQixZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFMUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLEtBQXdCO0lBQy9ELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDOUMsT0FBTztLQUNSO0lBRUQsS0FBSyxDQUFDLEtBQUssR0FBRztRQUNaLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUN6RCxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7S0FDdkIsQ0FBQztBQUNKLENBQUM7QUFxQkQsTUFBTSxPQUFPLHFCQUFxQjs7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQWxCakIsc0JBQXNCLEVBQUUsbUJBQW1CLGFBR3hELFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVyw4QkFKSCxtQkFBbUI7b0hBaUJsQixxQkFBcUIsWUFoQnZCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBRVgsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixTQUFTLEVBQUUsc0JBQXNCO3FCQUNsQztpQkFDRjtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSxDQUFDO2FBQ25HLENBQUM7U0FDSDs0RkFFVSxxQkFBcUI7a0JBbkJqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLG1CQUFtQixDQUFDO29CQUMzRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixXQUFXO3dCQUVYLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLFFBQVEsRUFBRTtnQ0FDUjtvQ0FDRSxJQUFJLEVBQUUsWUFBWTtvQ0FDbEIsU0FBUyxFQUFFLHNCQUFzQjtpQ0FDbEM7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLEVBQUUsQ0FBQzt5QkFDbkcsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcsIEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvblJhZGlvLCBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEZvcm1seVdyYXBwZXJGb3JtRmllbGQgfSBmcm9tICcuL2Zvcm0tZmllbGQud3JhcHBlcic7XG5pbXBvcnQgeyBJb25Gb3JtbHlBdHRyaWJ1dGVzIH0gZnJvbSAnLi9mb3JtbHkuYXR0cmlidXRlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtRmllbGRMZWdhY3lFeHRlbnNpb24oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSB7XG4gIGlmIChmaWVsZC5wcm9wcz8uaGFzT3duUHJvcGVydHkoJ2xlZ2FjeUxhYmVsJykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaWVsZC5wcm9wcyA9IHtcbiAgICBsZWdhY3lMYWJlbDogIUlvblJhZGlvLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnbGVnYWN5JyksXG4gICAgLi4uKGZpZWxkLnByb3BzIHx8IHt9KSxcbiAgfTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5V3JhcHBlckZvcm1GaWVsZCwgSW9uRm9ybWx5QXR0cmlidXRlc10sXG4gIGV4cG9ydHM6IFtJb25Gb3JtbHlBdHRyaWJ1dGVzXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHdyYXBwZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZm9ybS1maWVsZCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGV4dGVuc2lvbnM6IFt7IG5hbWU6ICdmb3JtLWZpZWxkLWxlZ2FjeScsIGV4dGVuc2lvbjogeyBwb3N0UG9wdWxhdGU6IGZvcm1GaWVsZExlZ2FjeUV4dGVuc2lvbiB9IH1dLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGb3JtRmllbGRNb2R1bGUge31cbiJdfQ==