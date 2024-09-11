import { Directive, Component, ElementRef, Injector, OnInit } from '@angular/core';
import { UpgradeComponent, UpgradeModule } from '@angular/upgrade/static';

@Component({
    selector: 'studentController',
    template: '<div>' +
                  'Student Controller: <b>{{student.fullName()}}</b>'  +
              '</div>'
})
export class studentControllerWrapper implements OnInit {
    student:any;
    angularJSService: any;
    
    constructor(private upgrade: UpgradeModule) {
      this.angularJSService = this.upgrade.$injector.get("studentController");
    }

    ngOnInit() {
      this.student = this.angularJSService.student;
    }
}