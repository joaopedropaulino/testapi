/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
page;
perPage;
total;
totalPage;
data;

  constructor(private apiService: ApiService) {this.buscarTodos()}


   buscarTodos(page=2){
     this.apiService.buscarUsuarios(page).subscribe(usuarios =>{
       console.log(usuarios);
       this.page= usuarios['page'];
       this.perPage= usuarios['per_page'];
       this.total= usuarios['total'];
       this.totalPage= usuarios['total_pages'];
       this.data= usuarios['data'];
     });
}

}
