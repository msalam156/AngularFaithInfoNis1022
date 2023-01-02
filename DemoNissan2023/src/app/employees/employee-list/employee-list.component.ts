import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }
  empData: any;
  ngOnInit(): void {// life Cycle hook
    console.log("hi sir");
    this.getAllEmployees();
    this.employeeService.getAllEmployees();
  }

  // create method get data from service
  getAllEmployees() {
    // call service here 
    // this.employeeService.getAllEmployees()
    //this.employeeService.getAllEmployees();
  }
  // console.log("list is working");
  //console.log(this.employeeService.getAllEmployees().s);

}
