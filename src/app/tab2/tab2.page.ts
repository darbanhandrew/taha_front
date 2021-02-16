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
  // wallet: Observable<WalletQuery['affiliate']['walletSet']['edges']>;
  receipt : Observable<WalletQuery['affiliate']['receiptSet']['edges']>;
  amount:any;
  constructor(walletGQL: WalletGQL ) {
     walletGQL.watch(
      {
        id:localStorage.getItem("AFF_ID")
       }
    ).valueChanges.subscribe(
      next=>
      {
        let a = next.data.affiliate.walletSet.edges;
        // let b = JSON.stringify(a);
        // b = JSON.parse(b);
        // b = JSON.stringify(b[0]);
        // let c = JSON.parse(b);
        let b = a[0];
        let c = JSON.stringify(b);
        let d = JSON.parse(c);
        this.amount = d.node.amount;
        this.amount = this.amount.toLocaleString('en-us');
      }
    );
    
    this.receipt = walletGQL.watch(
      {
        id:localStorage.getItem("AFF_ID")
       }
    ).valueChanges.pipe(map(result => result.data.affiliate.receiptSet.edges));
  }


  


}
