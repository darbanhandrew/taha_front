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
    this.router.navigate(['/verify'])
  }

  hasAccount(){
    this.router.navigate(['/login'])
  }

  
  
  // ionViewWillEnter() {
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(56px)';
  //     });
  //   } // end if
  // }

  // ionViewDidLeave() {
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(0)';
  //     });
  //   } // end if
  // }

}
