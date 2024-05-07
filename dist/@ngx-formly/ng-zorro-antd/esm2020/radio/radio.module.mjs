import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormlyFieldRadio } from './radio.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNzRadioModule {
}
FormlyNzRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        NzRadioModule,
        FormlyNzFormFieldModule,
        FormlySelectModule, i1.FormlyModule] });
FormlyNzRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzRadioModule,
            FormlyNzFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: FormlyFieldRadio,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzRadioModule,
                        FormlyNzFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: FormlyFieldRadio,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25nLXpvcnJvLWFudGQvcmFkaW8vc3JjL3JhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBc0JoRCxNQUFNLE9BQU8sbUJBQW1COztpSEFBbkIsbUJBQW1CO2tIQUFuQixtQkFBbUIsaUJBbkJmLGdCQUFnQixhQUU3QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGFBQWE7UUFFYix1QkFBdUI7UUFDdkIsa0JBQWtCO2tIQVlULG1CQUFtQixZQWxCckI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGFBQWE7WUFFYix1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixTQUFTLEVBQUUsZ0JBQWdCO3dCQUMzQixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIOzRGQUVVLG1CQUFtQjtrQkFwQi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFFYix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxPQUFPO29DQUNiLFNBQVMsRUFBRSxnQkFBZ0I7b0NBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybWx5U2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZS9zZWxlY3QnO1xuXG5pbXBvcnQgeyBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L25nLXpvcnJvLWFudGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkUmFkaW8gfSBmcm9tICcuL3JhZGlvLnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZFJhZGlvXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE56UmFkaW9Nb2R1bGUsXG5cbiAgICBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlTZWxlY3RNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncmFkaW8nLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRSYWRpbyxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOelJhZGlvTW9kdWxlIHt9XG4iXX0=