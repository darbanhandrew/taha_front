import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ShopCardComponent } from './shop-card/shop-card.component';

CUSTOM_ELEMENTS_SCHEMA
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[ShopCardComponent],
  declarations: [ShopCardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModuleModule {}
