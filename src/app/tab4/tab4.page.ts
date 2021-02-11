import { Component, OnInit, Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { AuthService } from '../auth.service';
import { distinctUntilChanged } from 'rxjs/operators';
import {AFF_ID} from '../constants';
import {WalletGQL, WalletQuery} from 'src/generated/graphql';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  trans: Observable<WalletQuery['affiliate']['transactionSet']['edges']>;
  transactions :any;
  constructor(walletGQL:WalletGQL) {
    this.trans = walletGQL.watch(
      {
        id:localStorage.getItem("AFF_ID")
       }
    ).valueChanges.pipe(map(result => result.data.affiliate.transactionSet.edges));

  
  }

  ngOnInit() {
  }
}
