import { Injectable } from '@angular/core';
import {Spanner} from "./spanner";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class SpannersService {

  restEndpoint = '/spanners';

  constructor(private http: Http) { }

  getSpanners(): Observable<Spanner[]> {
    return this.http.get(this.restEndpoint)
      .map((response: Response) => <Spanner[]> response.json()._embedded.spanners);
  }

  getSpanner(id: number): Observable<Spanner> {
    return this.http.get(this.restEndpoint + '/' + id)
      .map((response: Response) => <Spanner> response.json());
  }

}
