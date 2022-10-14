import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CollectDataService {

   constructor(private http: HttpClient) { }

   // Post Data to the Web API (Node.js Express)
   apiSaveMessageURL = 'http://localhost:4200/mysql/Enrollments';

   SaveMessage(data: any): Observable<any> {
     return this.http.post(this.apiSaveMessageURL, data);
   }

}