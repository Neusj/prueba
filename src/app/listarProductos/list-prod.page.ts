import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './list-prod.page.html',
  styleUrls: ['./list-prod.page.scss'],
})
export class ListProdPage implements OnInit {
  public productos: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.http.get<any>('https://ul3zqzfu6a.execute-api.us-west-2.amazonaws.com/prod/api-productos/listar')
      .subscribe(response => {
        this.productos = JSON.parse(response.body).productos;       
      });

    
  }
  
}
