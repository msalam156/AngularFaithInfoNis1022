import { Injectable } from '@angular/core';
import { employeesList } from './employeeList';
import { Employee } from './employee';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee():Observable<Employee[]> {
    const EmployeeList = of(employeesList);
    return EmployeeList;
  }
}
