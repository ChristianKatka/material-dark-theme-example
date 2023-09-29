import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: 'my-wrapper.component.html',
})
export class MyWrapperComponent {
  @Input()
  width = '90%';

  @Input()
  margins = 4;
}
