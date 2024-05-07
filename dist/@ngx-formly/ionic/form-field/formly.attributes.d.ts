import { ElementRef, Renderer2 } from '@angular/core';
import { ɵFormlyAttributes as FormlyAttributes, FormlyFieldConfig } from '@ngx-formly/core';
import * as i0 from "@angular/core";
export declare class IonFormlyAttributes extends FormlyAttributes {
    field: FormlyFieldConfig;
    constructor(renderer: Renderer2, elementRef: ElementRef, _document: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<IonFormlyAttributes, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IonFormlyAttributes, "[ionFormlyAttributes]", never, { "field": "ionFormlyAttributes"; }, {}, never>;
}
