import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormlyFieldCheckbox } from './checkbox.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNzCheckboxModule {
}
FormlyNzCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        NzCheckboxModule,
        FormlyNzFormFieldModule, i1.FormlyModule] });
FormlyNzCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzCheckboxModule,
            FormlyNzFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'checkbox',
                        component: FormlyFieldCheckbox,
                        wrappers: ['form-field'],
                    },
                    {
                        name: 'boolean',
                        extends: 'checkbox',
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzCheckboxModule,
                        FormlyNzFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'checkbox',
                                    component: FormlyFieldCheckbox,
                                    wrappers: ['form-field'],
                                },
                                {
                                    name: 'boolean',
                                    extends: 'checkbox',
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25nLXpvcnJvLWFudGQvY2hlY2tib3gvc3JjL2NoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQTBCdEQsTUFBTSxPQUFPLHNCQUFzQjs7b0hBQXRCLHNCQUFzQjtxSEFBdEIsc0JBQXNCLGlCQXZCbEIsbUJBQW1CLGFBRWhDLFlBQVk7UUFDWixtQkFBbUI7UUFFbkIsZ0JBQWdCO1FBRWhCLHVCQUF1QjtxSEFnQmQsc0JBQXNCLFlBdEJ4QjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFFbkIsZ0JBQWdCO1lBRWhCLHVCQUF1QjtZQUN2QixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsT0FBTyxFQUFFLFVBQVU7cUJBQ3BCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIOzRGQUVVLHNCQUFzQjtrQkF4QmxDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFFbkIsZ0JBQWdCO3dCQUVoQix1QkFBdUI7d0JBQ3ZCLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsVUFBVTtvQ0FDaEIsU0FBUyxFQUFFLG1CQUFtQjtvQ0FDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6QjtnQ0FDRDtvQ0FDRSxJQUFJLEVBQUUsU0FBUztvQ0FDZixPQUFPLEVBQUUsVUFBVTtpQ0FDcEI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L25nLXpvcnJvLWFudGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkQ2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZENoZWNrYm94XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgTnpDaGVja2JveE1vZHVsZSxcblxuICAgIEZvcm1seU56Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkQ2hlY2tib3gsXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGV4dGVuZHM6ICdjaGVja2JveCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOekNoZWNrYm94TW9kdWxlIHt9XG4iXX0=