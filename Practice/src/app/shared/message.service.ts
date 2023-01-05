import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  msg:Employee = new Employee();
  constructor() {
    
   }
   
  
}
