import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiCallService {

  constructor(private http: Http) { }

  getByState(state: string): Observable<any> {
    // return this.http.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    return this.http.get("https://projects.propublica.org/nonprofits/api/v2/search.json?q=music&state[id]={state}")
  }


}
