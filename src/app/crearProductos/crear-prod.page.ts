import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './crear-prod.page.html',
  styleUrls: ['./crear-prod.page.scss'],
})
export class CreateProdPage implements OnInit {
  producto = {
    nombre: '',
    peso: '',
    precio: ''
  };

  constructor(private http: HttpClient, private router: Router,) {}

  ngOnInit() {}

  generarIdAleatorio() {
    return Math.random().toString(36).substr(2, 9);
  }

  onSubmit() {
    const nuevoProducto = {
      id: this.generarIdAleatorio(),
      nombre: this.producto.nombre,
      peso: this.producto.peso,
      precio: this.producto.precio
    };

    this.http.post(
      'https://ul3zqzfu6a.execute-api.us-west-2.amazonaws.com/prod/api-productos/crear',
      nuevoProducto
    ).subscribe(response => {
        this.router.navigate(['/listar-productos']);
      }, error => {
        console.error('Error al crear producto:', error);
      });
  }
}
