import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupportapiService {

  constructor(public httpClient: HttpClient) { }

  public getSupportOptions() {

  }

}
