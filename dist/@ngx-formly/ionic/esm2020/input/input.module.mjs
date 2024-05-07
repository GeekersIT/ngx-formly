import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';
import { FormlyFieldInput } from './input.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyInputModule {
}
FormlyInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1.FormlyModule] });
FormlyInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
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
                        IonicModule,
                        FormlyFormFieldModule,
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
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2lvbmljL2lucHV0L3NyYy9pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQXdDaEQsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQXJDYixnQkFBZ0IsYUFFN0IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gscUJBQXFCO2dIQWdDWixpQkFBaUIsWUFwQ25CO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixTQUFTLEVBQUUsZ0JBQWdCO3dCQUMzQixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCO29CQUNELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO29CQUNwQzt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUsT0FBTzt3QkFDaEIsY0FBYyxFQUFFOzRCQUNkLEtBQUssRUFBRTtnQ0FDTCxJQUFJLEVBQUUsUUFBUTs2QkFDZjt5QkFDRjtxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsY0FBYyxFQUFFOzRCQUNkLEtBQUssRUFBRTtnQ0FDTCxJQUFJLEVBQUUsUUFBUTs2QkFDZjt5QkFDRjtxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDs0RkFHVSxpQkFBaUI7a0JBdEM3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLE9BQU87b0NBQ2IsU0FBUyxFQUFFLGdCQUFnQjtvQ0FDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6QjtnQ0FDRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtnQ0FDcEM7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsT0FBTyxFQUFFLE9BQU87b0NBQ2hCLGNBQWMsRUFBRTt3Q0FDZCxLQUFLLEVBQUU7NENBQ0wsSUFBSSxFQUFFLFFBQVE7eUNBQ2Y7cUNBQ0Y7aUNBQ0Y7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsT0FBTyxFQUFFLE9BQU87b0NBQ2hCLGNBQWMsRUFBRTt3Q0FDZCxLQUFLLEVBQUU7NENBQ0wsSUFBSSxFQUFFLFFBQVE7eUNBQ2Y7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOT19FUlJPUlNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgRm9ybWx5Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvaW9uaWMvZm9ybS1maWVsZCc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkSW5wdXQgfSBmcm9tICcuL2lucHV0LnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZElucHV0XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEZvcm1seUZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZElucHV0LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnc3RyaW5nJywgZXh0ZW5kczogJ2lucHV0JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ251bWJlcicsXG4gICAgICAgICAgZXh0ZW5kczogJ2lucHV0JyxcbiAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaW50ZWdlcicsXG4gICAgICAgICAgZXh0ZW5kczogJ2lucHV0JyxcbiAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUlucHV0TW9kdWxlIHt9XG4iXX0=