import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProdPageRoutingModule } from './list-prod-routing.module';

import { ListProdPage } from './list-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProdPageRoutingModule
  ],
  declarations: [ListProdPage]
})
export class ListProdPageModule {}
