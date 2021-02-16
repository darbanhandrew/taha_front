import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {


  @Input() image:any;
  @Input() title:any;
  @Input() url:any;
  @Input() price:any;
  link_state:boolean=false;

  // exp = "تومان-"
  constructor() { }

  // async copy() {
  //   if (navigator.clipboard) {
  //     try {
  //       // console.log(this.link_state);
  //       this.link_state=!this.link_state;
  //       await navigator.clipboard.writeText(this.url);
  //     } catch (err) {}
  //   }
  //   // this.link_state=false;
  // }
  ngOnInit() {}

}
