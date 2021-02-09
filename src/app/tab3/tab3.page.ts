import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ProfileGQL, ProfileQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  profile: Observable<ProfileQuery['affiliateList']['edges']>;
  constructor(profileGQL: ProfileGQL ) {

    this.profile = profileGQL.watch(
    ).valueChanges.pipe(map(result => result.data.affiliateList.edges));
  }

}
