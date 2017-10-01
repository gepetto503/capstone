import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-npo',
  templateUrl: './npo.component.html',
  styleUrls: ['../../stylesheets/components/npo.component.scss']
})
export class NpoComponent {
  @Input() childNpo;

  constructor() { }

}
