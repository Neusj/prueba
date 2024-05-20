import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './prod.page.html',
  styleUrls: ['./prod.page.scss'],
})
export class ProdPage {
  public productos: any = [];
  constructor(private router: Router, ) { }


  crearProducto(){
    this.router.navigate(['/crear-productos']);
  }

  listarProductos(){
    this.router.navigate(['/listar-productos']);
  } 
}