import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ApiCallService]
})
export class FormComponent {
  npos: any[]=null;

  constructor(private apiCallService: ApiCallService ) { }

  getNonProfits(state: string) {
    console.log(state);
    this.apiCallService.getByState(state).subscribe(response => {
      this.npos = response.json();
      console.log(this.npos);
    })
  }


}
