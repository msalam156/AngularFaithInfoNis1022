import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // declare variable     -- it is consider as global ariable
  formEmployeeData : Employee = new Employee();
  employees:Employee[] = []; // all employee
  constructor(private httpClient:HttpClient) { }//constructor injection : DI
  
  // creating custom method to get all employee
  getAllEmployees(){
    this.httpClient.get(environment.apiUrl + '/emps')
    .toPromise()
    .then(
      (response)=> {
        console.log(response);
        this.employees = response as Employee[];
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
