import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';
import { FormlyFieldSelect } from './select.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNsSelectFieldModule {
}
FormlyNsSelectFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsSelectFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsSelectFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsSelectFieldModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule,
        FormlySelectModule, i1.FormlyModule] });
FormlyNsSelectFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsSelectFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'select',
                        component: FormlyFieldSelect,
                        wrappers: ['form-field'],
                    },
                    { name: 'enum', extends: 'select' },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsSelectFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'select',
                                    component: FormlyFieldSelect,
                                    wrappers: ['form-field'],
                                },
                                { name: 'enum', extends: 'select' },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uYXRpdmVzY3JpcHQvc2VsZWN0L3NyYy9zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXdCbEQsTUFBTSxPQUFPLHlCQUF5Qjs7dUhBQXpCLHlCQUF5Qjt3SEFBekIseUJBQXlCLGlCQXJCckIsaUJBQWlCLGFBRTlCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBRXZCLHVCQUF1QjtRQUN2QixrQkFBa0I7d0hBY1QseUJBQXlCLFlBcEIzQjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBRXZCLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLFNBQVMsRUFBRSxpQkFBaUI7d0JBQzVCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7b0JBQ0QsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7aUJBQ3BDO2FBQ0YsQ0FBQztTQUNIOzRGQUdVLHlCQUF5QjtrQkF0QnJDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUV2Qix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxRQUFRO29DQUNkLFNBQVMsRUFBRSxpQkFBaUI7b0NBQzVCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7Z0NBQ0QsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7NkJBQ3BDO3lCQUNGLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seVNlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0JztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbmltcG9ydCB7IEZvcm1seU5zRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvbmF0aXZlc2NyaXB0L2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRTZWxlY3QgfSBmcm9tICcuL3NlbGVjdC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRTZWxlY3RdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG5cbiAgICBGb3JtbHlOc0Zvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlTZWxlY3RNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkU2VsZWN0LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnZW51bScsIGV4dGVuZHM6ICdzZWxlY3QnIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU5zU2VsZWN0RmllbGRNb2R1bGUge31cbiJdfQ==