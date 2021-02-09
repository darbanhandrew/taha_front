import { Component } from '@angular/core';
import { ReceiptGQL,ReceiptQuery, WalletGQL, WalletQuery} from 'src/generated/graphql';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  wallet: Observable<WalletQuery['walletList']['edges']>;
  receipt: Observable<ReceiptQuery['affiliate']['receiptSet']['edges']>;

  constructor(walletGQL: WalletGQL , receiptGQL:ReceiptGQL) {
    this.wallet = walletGQL.watch(
      {
        id:"V2FsbGV0Tm9kZTox"
       }
    ).valueChanges.pipe(map(result => result.data.walletList.edges));

    this.receipt = receiptGQL.watch(
    ).valueChanges.pipe(map(result => result.data.affiliate.receiptSet.edges));
  }


  



}
