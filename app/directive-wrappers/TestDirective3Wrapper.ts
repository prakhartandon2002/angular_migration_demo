import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
    selector: 'test-directive3'
})
export class TestDirective3Wrapper extends UpgradeComponent {
    
    constructor(elementRef: ElementRef, injector: Injector) {
      super('testDirective3', elementRef, injector);
    }
}
