import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  descricao: string ='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pesquisar() {
    if (this.descricao) {
      this,this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao }
      });
      return;
    }

    this,this.router.navigate(['produtos']);
  }

}
