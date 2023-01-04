
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwtresponse } from '../shared/jwtresponse';
import { LoginService } from '../shared/login.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 // declare variables
 loginForm!: FormGroup;
 error='';
 isSubmitted: boolean = false;
jwtresponse:any = new Jwtresponse();

 constructor(private formBuilder: FormBuilder,
  private loginService:LoginService,
  private router:Router) {}

 ngOnInit(): void {
  // generate reactive form
  // FromGroup -- FormControlName -- FormBuilder
  this.loginForm = this.formBuilder.group(
    {
   // Email ID
   emailId: ['',[Validators.email, Validators.required, Validators.minLength(2)]],
   // Password
   password: ['', [Validators.required]],
  });
 }

 // get all controls from login form
 get formControls() {
  return this.loginForm.controls;
 }

 // Create submit form
 loginCredential(): void {
  // Validation
  this.isSubmitted = true;
  console.log(this.loginForm.value);

  
  // invalid form
  if(this.loginForm.invalid) return;

  //valid logingForm
  // check emailId and password -- call service
  if(this.loginForm.valid){
    this.loginService.loginVerify(this.loginForm.value).subscribe(
      (result)=>{
        this.error="";
        this.jwtresponse=result;

        // based on role, route the component
        // role1 - Admin
        if(this.jwtresponse.data.role == 1){
            this.loginService.isLogged=true;
            this.router.navigateByUrl('/admin');
        }
        // role2 - Manager
        else if(this.jwtresponse.data.role == 2){
            this.loginService.isLogged=true;
            this.router.navigateByUrl('/manager');
        } else{
          this.error = "Sorry! NOT allowed to access..."
        }
      },
      (error)=>{
        console.log(error);
        this.error="this error come from ";
      }
    )
  }
 }
}


