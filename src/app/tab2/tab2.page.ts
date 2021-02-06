import { Component } from '@angular/core';
import { ShopListGQL, ShopListQuery} from 'src/generated/graphql';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  shopNodes: Observable<ShopListQuery['shopList']['edges']>;

  constructor(shopListGQL: ShopListGQL) {
    this.shopNodes = shopListGQL.watch().valueChanges.pipe(map(result => result.data.shopList.edges));
  }

}
