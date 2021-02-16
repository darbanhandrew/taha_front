import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router) { }

  phone_no :number;
  pass :string ; 
  pass_rep :string;
  is_TextFieldType:boolean=false;
  ngOnInit() {
  }


  togglePasswordFieldType(){
    this.is_TextFieldType = !this.is_TextFieldType;
  }

  confirm(){

  }

  hasAccount(){
    this.router.navigate(['/login'])
  }

}
