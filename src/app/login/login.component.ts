import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    visible: String = null;
    constructor(private router: Router){

    }
    ngOnInit(){
    }
 
    openLoginDiv(){
        var div = <HTMLElement>document.querySelector('.overlay');
        div.style.width = "100%";
        div.style.left = "0";
        var main = <HTMLElement>document.querySelector('.main');
        main.style.opacity = "0";
    }

    openSignUpDiv(){
        var div = <HTMLElement>document.querySelector('.overlay-signup');
        div.style.width = "100%";
        div.style.right = "0";
        var main = <HTMLElement>document.querySelector('.main');
        main.style.opacity = "0";
    }

    onLogin(loginForm: NgForm){
          loginForm.reset();
        
        this.router.navigate(['/category']);
    }

    onSignUp(signForm: NgForm){
        signForm.reset();
        var div = <HTMLElement>document.querySelector('.overlay-signup');
          div.style.width = "0";
          div.style.right = "100";
          var main = <HTMLElement>document.querySelector('.main');
          main.style.opacity = "1"
    }

    back(){
        this.ngOnInit();
    }
    backToMain(){
         var div = <HTMLElement>document.querySelector('.overlay');
          div.style.width = "0%";
          div.style.left = "100";
        var main = <HTMLElement>document.querySelector('.main');
        main.style.opacity = "1";
    }
    resetPass(){
       this.visible = "reset";
    }
    forgetPass(){
        this.visible = "forget";
     }
}