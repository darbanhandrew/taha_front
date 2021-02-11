import { Component, OnInit, Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import result, { ProfileGQL, ProfileQuery,VerifyGQL,VerifyMutation,User_IdGQL,User_IdQuery } from 'src/generated/graphql';
import { AuthService } from '../auth.service';
import { distinctUntilChanged } from 'rxjs/operators';
import {AFF_ID} from './../constants'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  // profile: Observable<ProfileQuery['userList']['edges']>;
  user__ : Observable<User_IdQuery['userList']['edges']>;
  user_id: any;
  logged: boolean = false;
  name:any;
  constructor(profileGQL: ProfileGQL , private authService: AuthService , verifyGQL:VerifyGQL,user_idGQL:User_IdGQL) {

    // this.profile = profileGQL.watch(
    // ).valueChanges.pipe(map(result => result.data.userList.edges));

    // profileGQL.watch().valueChanges.subscribe(next=>
    //   {
    //     next.data.userList.edges
    //   })


    verifyGQL.mutate({
      token:localStorage.getItem("AUTHTOKEN")

    }).subscribe(next=>
      {
        if(next.data.verifyToken != null){
          let a = next.data.verifyToken.payload;
          let b =JSON.stringify(a);
          let c = JSON.parse(b);
          this.name = c.username;
          user_idGQL.watch(
            {
              username:this.name,
            }
          ).valueChanges.pipe(map(result=>result.data.userList.edges)).subscribe(next=>
            {
              let data = JSON.stringify(next)
              let a = JSON.parse(data);
              let b = a[0];
              let c = b.node.User.edges[0].node.id;
              localStorage.setItem(AFF_ID,c);
              console.log(c)
            }
          );
        }
      }
    );


    // his.receipt = receiptGQL.watch(
    //   ).valueChanges.pipe(map(result => result.data.affiliate.receiptSet.edges))
    
      

  
  }

  ngOnInit() {
    // this.authService.isAuthenticated
    //   .distinctUntilChanged() // Only emit when the current value is different than the last
    //   .subscribe(isAuthenticated => {
    //     this.logged = isAuthenticated
    //   });

  }

  logout() {
    this.authService.logout();
  }
}
