import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {


  constructor(private msgService: MessageService) { }
  // fake data
  selectData:Employee = new Employee();


  //dataEmpDetail = "this is EmpDetails";
  ngOnInit(): void {
   // this.selectData = this.msgService.msg;
  }
  fetchData():void{
   this.selectData = this.msgService.msg;
  }

  
  // sendData():void{
  //   this.msgService.msg = this.dataE
  // }
}
