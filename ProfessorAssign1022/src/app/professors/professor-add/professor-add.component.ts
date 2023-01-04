import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Professor } from 'src/app/shared/professor';
import { ProfessorServiceService } from 'src/app/shared/professor-service.service';

@Component({
  selector: 'app-professor-add',
  templateUrl: './professor-add.component.html',
  styleUrls: ['./professor-add.component.scss']
})
export class ProfessorAddComponent implements OnInit {

  constructor(public professorService: ProfessorServiceService) { }
  ngOnInit(): void { // lifeCycle hook
  }
  // onSubmit Method
  onSubmit(form: NgForm) {
    // console.log(form.value);
    let _addProfId = this.professorService.formProfessorDat.professorId;
    if (_addProfId == 0 || _addProfId == null) {
      console.log("in Onsubmit");
      this.addProfessor(form);
      window.location.reload();
    }
    else {
      console.log("updating");
      this.editProfessor(form);
      window.location.reload();
    }
  }

  // insert
  addProfessor(form?: NgForm) {
    this.professorService.insertProfessor(form?.value).subscribe(
      (result) => {
        console.log("Inserting Employee");
        //console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // UPDATE
  editProfessor(form?: NgForm) {
    console.log("in method");
    this.professorService.updateProfessor(form?.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
