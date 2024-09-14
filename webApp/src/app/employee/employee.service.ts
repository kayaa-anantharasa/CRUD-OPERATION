import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
 apiUrl =environment.apiUrl;
  constructor(
    public http:HttpClient
  ) { }

  getAllusers():Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl + "employee")
  }
}
