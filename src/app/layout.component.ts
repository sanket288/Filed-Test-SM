import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout',
  template: `<p>{{name}}</p>
  `,
  styleUrls: [`./layout.component.scss`]
})
export class LayoutComponent  {
  @Input() name: string;
}
