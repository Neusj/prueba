import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProdPage } from './crear-prod.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProdPageRoutingModule {}
