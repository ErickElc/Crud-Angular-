import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.scss'],
})
export class BotaoCarregarMaisComponent implements OnInit {
  @Input() existeMaisPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
