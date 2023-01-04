import { Component, OnInit } from '@angular/core';
import { ProfessorServiceService } from 'src/app/shared/professor-service.service';
import { Professor } from 'src/app/shared/professor';
@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  constructor(public professorService: ProfessorServiceService) { }

  ngOnInit(): void {
    // console.log(this.professorService.getAllProfessor());
    this.getAllProff();
    //console.log(this.professorService.professorsData);
  }
  // call service method to get the professors list
  getAllProff() {
    this.professorService.getAllProfessor();

    // now we are calling here obsersavble service method
    // this.professorService.getAllProfessorList().subscribe(
    //   (response) =>{
    //     console.log(response);
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // );
  }

  // update professor
  updateProfessor(profId: number) {
    console.log(profId);
  }

  // for deleting professor
  deleteProfessor(profId: number) {
    console.log("delete working");
    if (confirm('Are u sure want to DELETE this professor??')) {
      console.log("call service for deletion");
    }
  }

  //
  // populate form when click td
  populateForm(professor: Professor) {
    //console.log(professor);
    this.professorService.formProfessorDat = Object.assign({}, professor)
  }
}
