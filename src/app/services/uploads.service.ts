import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {


  readonly URL_API = 'http://localhost:3000/api/uploads/'

  constructor(private http: HttpClient) { }

 
}
