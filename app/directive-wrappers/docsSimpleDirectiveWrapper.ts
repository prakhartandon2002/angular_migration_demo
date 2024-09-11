import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
    selector: 'docsSimpleDirective'
})
export class docsSimpleDirectiveWrapper extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('docsSimpleDirective', elementRef, injector);
    }
}