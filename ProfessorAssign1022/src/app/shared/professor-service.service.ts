import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServiceService {
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
}
