import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormlyFieldInput } from './input.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNzInputModule {
}
FormlyNzInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        NzInputModule,
        NzInputNumberModule,
        FormlyNzFormFieldModule, i1.FormlyModule] });
FormlyNzInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            NzInputNumberModule,
            FormlyNzFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzInputModule,
                        NzInputNumberModule,
                        FormlyNzFormFieldModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25nLXpvcnJvLWFudGQvaW5wdXQvc3JjL2lucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBeUNoRCxNQUFNLE9BQU8sbUJBQW1COztpSEFBbkIsbUJBQW1CO2tIQUFuQixtQkFBbUIsaUJBdENmLGdCQUFnQixhQUU3QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFFbkIsdUJBQXVCO2tIQStCZCxtQkFBbUIsWUFyQ3JCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsbUJBQW1CO1lBRW5CLHVCQUF1QjtZQUN2QixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtvQkFDcEM7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLGNBQWMsRUFBRTs0QkFDZCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLGNBQWMsRUFBRTs0QkFDZCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7NkJBQ2Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsbUJBQW1CO2tCQXZDL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFFbkIsdUJBQXVCO3dCQUN2QixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLE9BQU87b0NBQ2IsU0FBUyxFQUFFLGdCQUFnQjtvQ0FDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6QjtnQ0FDRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtnQ0FDcEM7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsT0FBTyxFQUFFLE9BQU87b0NBQ2hCLGNBQWMsRUFBRTt3Q0FDZCxLQUFLLEVBQUU7NENBQ0wsSUFBSSxFQUFFLFFBQVE7eUNBQ2Y7cUNBQ0Y7aUNBQ0Y7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsT0FBTyxFQUFFLE9BQU87b0NBQ2hCLGNBQWMsRUFBRTt3Q0FDZCxLQUFLLEVBQUU7NENBQ0wsSUFBSSxFQUFFLFFBQVE7eUNBQ2Y7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L25nLXpvcnJvLWFudGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOeklucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dC1udW1iZXInO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZElucHV0IH0gZnJvbSAnLi9pbnB1dC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRJbnB1dF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOeklucHV0TW9kdWxlLFxuICAgIE56SW5wdXROdW1iZXJNb2R1bGUsXG5cbiAgICBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZElucHV0LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnc3RyaW5nJywgZXh0ZW5kczogJ2lucHV0JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ251bWJlcicsXG4gICAgICAgICAgZXh0ZW5kczogJ2lucHV0JyxcbiAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaW50ZWdlcicsXG4gICAgICAgICAgZXh0ZW5kczogJ2lucHV0JyxcbiAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOeklucHV0TW9kdWxlIHt9XG4iXX0=