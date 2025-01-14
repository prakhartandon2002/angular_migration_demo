import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'isolateScopeWithController'
})
export class isolateScopeWithController extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('isolateScopeWithController', elementRef, injector);
    }
}