import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Apollo } from 'apollo-angular';
import { USERNAME, AUTHTOKEN } from '../constants';
import { LoginGQL,LoginMutation, ObtainJsonWebToken } from 'src/generated/graphql';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { throwServerError } from '@apollo/client/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // constructor(profileGQL: ProfileGQL , private authService: AuthService) {

  //   this.profile = profileGQL.watch(
  //   ).valueChanges.pipe(map(result => result.data.affiliateList.edges));
  // }
  login_bool:boolean=false;
  id :string ;
  pass :string;
  token:any;
  username:any;
  login: LoginMutation['tokenAuth'];
  constructor(private authService: AuthService,private apollo: Apollo , private loginGQL:LoginGQL , private router:Router,public loadingcontroller:LoadingController) { 
     
  }
  


  ngOnInit() {
  }


  // login(){
  //   this.authService.setusername("root")
  // }

async confirm(){
  const loading = await this.loadingcontroller.create({
    message: 'در حال بارگزاری ...'
    });
    loading.present();
    this.loginGQL.mutate({
      username:this.id,
      password:this.pass

    }).subscribe(next=>
      {
        if(next.data.tokenAuth.token !=null){
          this.login_bool = true;
          this.token = next.data.tokenAuth.token;
          let a = next.data.tokenAuth.payload;
          let b = JSON.stringify(a);
          let c = JSON.parse(b);
          this.username = c.username ;
          this.authService.saveUserData(this.username,this.token);
          // console.log(localStorage.getItem('AUTHTOKEN'));
          loading.dismiss()
          this.router.navigate(['/tabs/tab3']);
          // console.log(this.username)
        }
      }
    );
  }

}
