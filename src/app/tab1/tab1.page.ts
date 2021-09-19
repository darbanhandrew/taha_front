import { Component } from '@angular/core';
import { ShopListGQL, ShopListQuery,Shop_FilterQuery,Shop_FilterGQL} from 'src/generated/graphql';
import {Observable} from 'rxjs';
import {combineAll, map} from 'rxjs/operators';
import { shop_filter } from '*/shop_filter.graphql';
import { title } from 'process';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  search_str:any;
  shopNodes: Observable<ShopListQuery['shopList']['edges']>;
  search_bool:any=false;
  shop_filtered: Observable<Shop_FilterQuery['shopList']['edges']>;

  constructor(shopListGQL: ShopListGQL,private shop_filterGQL:Shop_FilterGQL) {
    this.shopNodes = shopListGQL.watch(
    ).valueChanges.pipe(map(result => result.data.shopList.edges));
  }
  
  
  search(){
    this.search_bool=true;
    
    
    this.shop_filtered = this.shop_filterGQL.watch(
      {
      title:"MamadShop"
      }
    ).valueChanges.pipe(map(result => result.data.shopList.edges));

    console.log(this.shop_filtered)
    // console.log(this.shop_filtered);
    // console.log(this.search_str)
  }
}
