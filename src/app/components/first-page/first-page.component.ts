import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { LoginServiceService, AuthResponseData } from 'src/app/services/login-service.service';
import { LoginServiceService, AuthResponseData } from 'src/app/services/login-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  isLoggedIn = false;
  error: string = null;
  message = null;

  constructor(private authService: LoginServiceService,private router: Router ) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  changeValue() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    this.error = null;
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const username = form.value.username;

    let authObs: Observable<AuthResponseData>;
    
    

    if(this.isLoggedIn) {
      authObs =this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);   
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        if(this.isLoggedIn) {
          this.message = "logged in successfully";
          this.isLoggedIn = !this.isLoggedIn;
          this.router.navigate(['/homePage']);
        }
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
    form.reset();
  }


}
