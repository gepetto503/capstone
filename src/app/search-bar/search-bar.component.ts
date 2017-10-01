import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['../../stylesheets/components/search-bar.component.scss'],
  providers: [ApiCallService]
})
export class SearchBarComponent {
  apiResponse: any[]=null;

  constructor(private apiCallService: ApiCallService ) { }

  getNonProfits(state: string) {
    console.log(state);
    this.apiCallService.getByState(state).subscribe(response => {
      this.apiResponse = response.json();
      console.log(this.apiResponse);
    })
  }

}
