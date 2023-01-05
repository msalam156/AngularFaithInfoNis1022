import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee';
import { MessageService } from 'src/app/shared/message.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  empList:Employee[] =[];
  constructor(private empService:EmployeeService, private messagService:MessageService) { }
  empDetails?:Employee;
  listData='ListData';
  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee():void{
    this.empService.getEmployee().subscribe(response => this.empList = response)
  }
  // sendDataToDetail():void{
  //   this.listData = this.messageService.msg;
  // }
  getDetails(emp:Employee):void{
    this.empDetails = emp;
    this.messagService.msg = emp;

  }

}
