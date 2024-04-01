import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Employee } from '../Interfaces/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private serviceURL:string = environment.endPoint;
  private apiUrl:string = this.serviceURL;

  constructor(private http:HttpClient) { }

  /**
   * this method return all employee from the api
   * 
   */
  getList():Observable<Employee[]>{
    
    var employees = this.http.get<Employee[]>(`${this.apiUrl}/getAllEmployees`);

    return employees
  }

  /**
   * This method save an employee using the api
   */
  add(modelo:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiUrl}/saveEmployee`, modelo);
  }

  /**
   * This method is to update an employee
   */
  update(Id:number, modelo:Employee):Observable<Employee>{

    var employee = this.http.put<Employee>(`${this.apiUrl}/updateEmployee/${Id}`, modelo);

    return employee;
  }

  delete(Id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/deteleEmployee/${Id}`);
  }
}