import { Component, OnInit } from '@angular/core';
import { ShopListQuery,ShopListGQL, PListQuery, PListGQL, PListQueryVariables} from 'src/generated/graphql';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import {DataService} from './../data.service'
import { AlertController, ToastController } from '@ionic/angular';
// import {ProductCardComponent} from './../product-card';
// import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  filter:any;
  shop_title:any;
  shop_image:any;
  link_state :boolean=false;
   productNodes: Observable<PListQuery['shop']['productSet']['edges']>;
   shop_details: Observable<PListQuery['shop']>;
   productVariables : any;
   
   constructor(productListGQL: PListGQL,private route: ActivatedRoute,private dataService: DataService , private router:Router , private toastcontroller:ToastController
    ) {
  //   this.route.queryParams.subscribe(params => {{{item}}
  //     this.productVariables = params["id"];
  //     let a =decodeURIComponent(JSON.parse(this.filter));
  //     console.log(a);
  //     this.filter = this.dataService.data;
  // });
  this.route.queryParams.subscribe(params => {
    // if (params && params.special) {
      // this.filter = JSON.parse(params.id);
      this.filter = params.id
      this.productNodes = productListGQL.watch(
        {
         id:params.id
        }
      )
      .valueChanges.pipe(map(result => result.data.shop.productSet.edges));
      productListGQL.watch(
        {
          id:params.id
        }
      ).valueChanges.subscribe(next=>
        {
          this.shop_title = next.data.shop.title;
          this.shop_image = next.data.shop.image;
        })
      // console.log(this.filter.totring())
    // }
  });
  // this.filter = this.dataService.data;
  

   }

   

  ngOnInit() {
    // navigator.clipboard
    // console.log(this.productNodes)
  //   let sub = this.route.params.subscribe(params => {
  //     this.id = params['id']; 
  //     console.log(params['id'])
  // });
  // }
// console.log(1)
  
  
  }

  goto_product(){
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     p_id: e     
    //   }
    // };
    // this.router.navigate(['/product-page'], navigationExtras);
    // navigator.clipboard)
    // this.pcard.coy();
  }
  
  async copy(text) {
    if (navigator.clipboard) {
      try {
        // console.log(this.link_state);
        // this.link_state=!this.link_state;
        await navigator.clipboard.writeText(text);
        this.presentToast();
      } catch (err) {}
    }
    // this.link_state=false;
  }


  async presentToast() {
    const toast = await this.toastcontroller.create({
      message: 'Link Copied !',
      duration: 2000
    });
    toast.present();
  }


}
