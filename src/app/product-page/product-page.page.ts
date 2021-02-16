import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {




  // this.filter = this.dataService.data;
  //  this.productNodes = productListGQL.watch(
  //    {
  //     id:this.filter
  //    }
  //  )
  //  .valueChanges.pipe(map(result => result.data.shop.productSet.edges));

  //  }



  id:any;
  // product: Observable<ProductQuery>;
  
  constructor() { 
    
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.id = this.router.getCurrentNavigation().extras.state.p_id;
    //   }
    // });
    // this.product = productGQL.watch(
    //   {
    //    id:this.id
    //   }
    // )
    // .valueChanges.pipe(map(result => result.data));
 
    
    // this.product = productGQL.watch(
    //   {
    //         id:this.id
    //        }
    //      )
  }


  ngOnInit() {
    console.log(this.id)
    // this.product.subscribe(
    //   params => {
    //     if (params) {
    //       // let res1 = JSON.stringify(params)
    //       // let queryParams = JSON.parse(res1);
    //       console.log("1");
    //     }
  
    //     // console.log(params)
    //   }
    // )
  }

}
