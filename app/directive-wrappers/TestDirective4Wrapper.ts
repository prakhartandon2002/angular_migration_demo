import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
    selector: 'test-directive4'
})
export class TestDirective4Wrapper extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('testDirective4', elementRef, injector);
    }
}