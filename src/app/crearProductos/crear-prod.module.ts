import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProdPageRoutingModule } from './crear-prod-routing.module';

import { CreateProdPage } from './crear-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProdPageRoutingModule
  ],
  declarations: [CreateProdPage]
})
export class CreateProdPageModule {}
