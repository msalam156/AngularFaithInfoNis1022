import { Component, OnInit } from '@angular/core';
import { ProfessorServiceService } from 'src/app/shared/professor-service.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  constructor(public professorService : ProfessorServiceService) { }

  ngOnInit(): void {
   // console.log(this.professorService.getAllProfessor());
   this.getAllProff();
    //console.log(this.professorService.professorsData);
  }
  // call service method to get the professors list
  getAllProff(){
    this.professorService.getAllProfessor();
  }

}
