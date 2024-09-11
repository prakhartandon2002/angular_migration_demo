import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
    selector: 'homePageController'
})
export class homePageControllerWrapper extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('homePageController', elementRef, injector);
    }
}