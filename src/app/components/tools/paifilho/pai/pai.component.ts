import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {
  pais: Object[];
  respostaFilho: Object[];

  constructor() {
    this.pais = [
      {
        nome: 'Vitor',
        sobreNome: 'Borges'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Daniel'
      },
      {
        nome: 'Thiago',
        sobreNome: 'Contre!'
      }
    ];
  }

  ngOnInit() {
      console.log(this.pais);
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    console.log(respostaFilho);
    this.respostaFilho = respostaFilho;
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

}
