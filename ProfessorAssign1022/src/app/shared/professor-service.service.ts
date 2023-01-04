import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from './professor';


@Injectable({
  providedIn: 'root'
})
export class ProfessorServiceService {
  formProfessorDat : Professor = new Professor();
professorsData:Professor[] = [];
  constructor(private httpClient:HttpClient) { }// dependency injection in constructor

// creating method for fetching data for api
getAllProfessor(){
  this.httpClient.get(environment.apiUrl + '/proff')
  .toPromise()
  .then(
    (response)=> {
      console.log(response);
      this.professorsData = response as Professor[];
    },
    (error) => {
      console.log(error);
    }
  )
}
// 2 Observable types
getAllProfessorList():Observable<any>{
   return this.httpClient.get(environment.apiUrl + '/proff');
}

// 3 INSERT

insertProfessor(professor:Professor):Observable<any>{
  console.log("inserting in service");
  return this.httpClient.post(environment.apiUrl +'/proff',professor);
}

// 4 UPDATE
updateProfessor(professor:Professor):Observable<any>{
  console.log(professor.professorId+"update in service working");
  return this.httpClient.put(environment.apiUrl +'/proff',professor);
}

// 5 DELETE

}
