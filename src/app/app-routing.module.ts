import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.homePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('./registry/registry.module').then( m => m.RegistryPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./Productos/prod.module').then( m => m.ProdPageModule)
  },
  {
    path: 'listar-productos',
    loadChildren: () => import('./listarProductos/list-prod.module').then( m => m.ListProdPageModule)
  },
  {
    path: 'crear-productos',
    loadChildren: () => import('./crearProductos/crear-prod.module').then( m => m.CreateProdPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
