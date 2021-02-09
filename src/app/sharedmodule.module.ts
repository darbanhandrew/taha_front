import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ProductCardComponent } from './product-card/product-card.component';

CUSTOM_ELEMENTS_SCHEMA
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[ShopCardComponent,ProductCardComponent],
  declarations: [ShopCardComponent,ProductCardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModuleModule {}
