import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './prod.page.html',
  styleUrls: ['./prod.page.scss'],
})
export class ProdPage implements OnInit {
  public productos: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.http.get<any>('https://gpy6uzcaq9.execute-api.us-west-2.amazonaws.com/producto/todos')
      .subscribe(response => {
        this.productos = response.productos;
      });
  }
  
}
