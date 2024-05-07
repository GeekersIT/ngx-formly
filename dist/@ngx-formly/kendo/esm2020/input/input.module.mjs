import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormlyFieldInput } from './input.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyInputModule {
}
FormlyInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        FormlyFormFieldModule,
        InputsModule, i1.FormlyModule] });
FormlyInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormlyFormFieldModule,
            InputsModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'input',
                        component: FormlyFieldInput,
                        wrappers: ['form-field'],
                    },
                    { name: 'string', extends: 'input' },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number',
                            },
                        },
                    },
                    {
                        name: 'integer',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number',
                            },
                        },
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormlyFormFieldModule,
                        InputsModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'input',
                                    component: FormlyFieldInput,
                                    wrappers: ['form-field'],
                                },
                                { name: 'string', extends: 'input' },
                                {
                                    name: 'number',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number',
                                        },
                                    },
                                },
                                {
                                    name: 'integer',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number',
                                        },
                                    },
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2tlbmRvL2lucHV0L3NyYy9pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQXVDaEQsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQXBDYixnQkFBZ0IsYUFFN0IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsWUFBWTtnSEErQkgsaUJBQWlCLFlBbkNuQjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtvQkFDcEM7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLGNBQWMsRUFBRTs0QkFDZCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLGNBQWMsRUFBRTs0QkFDZCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsaUJBQWlCO2tCQXJDN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxPQUFPO29DQUNiLFNBQVMsRUFBRSxnQkFBZ0I7b0NBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7Z0NBQ0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Z0NBQ3BDO29DQUNFLElBQUksRUFBRSxRQUFRO29DQUNkLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLElBQUksRUFBRSxTQUFTO29DQUNmLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seUZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2tlbmRvL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItaW5wdXRzJztcbmltcG9ydCB7IEZvcm1seUZpZWxkSW5wdXQgfSBmcm9tICcuL2lucHV0LnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZElucHV0XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1seUZvcm1GaWVsZE1vZHVsZSxcbiAgICBJbnB1dHNNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cmluZycsIGV4dGVuZHM6ICdpbnB1dCcgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ludGVnZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5SW5wdXRNb2R1bGUge31cbiJdfQ==