import { Component } from '@angular/core';
import {WalletGQL, WalletQuery} from 'src/generated/graphql';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  wallet: Observable<WalletQuery['affiliate']['walletSet']['edges']>;
  receipt : Observable<WalletQuery['affiliate']['receiptSet']['edges']>;

  constructor(walletGQL: WalletGQL ) {
    this.wallet = walletGQL.watch(
      {
        id:localStorage.getItem("AFF_ID")
       }
    ).valueChanges.pipe(map(result => result.data.affiliate.walletSet.edges));
    
    this.receipt = walletGQL.watch(
      {
        id:localStorage.getItem("AFF_ID")
       }
    ).valueChanges.pipe(map(result => result.data.affiliate.receiptSet.edges));
  }


  



}
