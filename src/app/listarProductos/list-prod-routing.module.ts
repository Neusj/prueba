import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProdPage } from './list-prod.page';

const routes: Routes = [
  {
    path: '',
    component: ListProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProdPageRoutingModule {}
