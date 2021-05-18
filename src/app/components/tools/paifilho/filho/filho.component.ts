import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input() recebePais;
  @Output() respostaFilho = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.recebePais);
    console.log('Objeto familia recebido do component pai via Input: ', this.recebePais);
  }

  feedback() {
    this.respostaFilho.emit([{"nome": "Raphella", "SobreNome": "Souza"}, {"nome": "João", "SobreNome": "Torres"}]);
    console.log('Resposta para o component pai', this.respostaFilho);
  }

}
