import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldInput } from './input.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyMatInputModule {
}
FormlyMatInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        FormlyMatFormFieldModule, i1.FormlyModule] });
FormlyMatInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatInputModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            FormlyMatFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        FormlyMatFormFieldModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL21hdGVyaWFsL2lucHV0L3NyYy9pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQXdDaEQsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQXJDaEIsZ0JBQWdCLGFBRTdCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsY0FBYztRQUVkLHdCQUF3QjttSEErQmYsb0JBQW9CLFlBcEN0QjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsY0FBYztZQUVkLHdCQUF3QjtZQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtvQkFDcEM7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLGNBQWMsRUFBRTs0QkFDZCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLGNBQWMsRUFBRTs0QkFDZCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsb0JBQW9CO2tCQXRDaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUVkLHdCQUF3Qjt3QkFDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxPQUFPO29DQUNiLFNBQVMsRUFBRSxnQkFBZ0I7b0NBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7Z0NBQ0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Z0NBQ3BDO29DQUNFLElBQUksRUFBRSxRQUFRO29DQUNkLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLElBQUksRUFBRSxTQUFTO29DQUNmLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRJbnB1dCB9IGZyb20gJy4vaW5wdXQudHlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seUZpZWxkSW5wdXRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG5cbiAgICBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cmluZycsIGV4dGVuZHM6ICdpbnB1dCcgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ludGVnZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TWF0SW5wdXRNb2R1bGUge31cbiJdfQ==