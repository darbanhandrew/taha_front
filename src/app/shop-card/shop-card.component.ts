import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})
export class ShopCardComponent implements OnInit {

  @Input() title:any;
  // @Input() image:Observable<ImageQuery['imageList']['edges']>;
  @Input() image: string;
  @Input() url:any;
  @Input() id:any;
  @Input() comis:any;
  src:any;
  alt:any;
  
  constructor(private dataService: DataService,private navCtrl:NavController) { 
    // this.image.subscribe(
    //   next=>
    //   {
    //     console.log(next[0].node.images.edges[0].node.image)
    //   }
    // );
  //   imageGQL.watch().valueChanges.subscribe(
  //     next=>
  //     {
  //       this.src = next.data.imageList.edges[0].node.image ;
  //       this.alt = next.data.imageList.edges[0].node.alt ;
  //       // console.log(this.src)
  //     }
  //   )
  }

  ngOnInit() {}

  more(){
    // this.id
    // this.router.navigate(['/shop',this.id])
    // console.log(this.id)
    // this.router.navigate(['/shop', thid]);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          // currency: JSON.stringify(id),
          id: this.id
      }
  };
  this.navCtrl.navigateForward(['/shop'], navigationExtras);
  // }
  // this.dataService.setData(this.id)
  // this.router.navigate(['/shop'])
  
}
}