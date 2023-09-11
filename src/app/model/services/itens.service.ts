import { Injectable } from '@angular/core';
import { Itens } from '../entities/itens/Itens';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  public armamentos : Itens[] = [];
  constructor() {
    let i1 :Itens = new Itens("M4A1");
    this.armamentos.push(i1);

    let i2 :Itens = new Itens("Desert Eagle");
    this.armamentos.push(i2);

    let i3 :Itens = new Itens("AWP");
    this.armamentos.push(i3);

    let i4 :Itens = new Itens("Glock");
    this.armamentos.push(i4);
  }

  cadastrar(item : Itens){
    this.armamentos.push(item);
  }

  obterTodos() : Itens[]{
    return this.armamentos;
  }

  obterPorIndice(indice : number) : Itens{
    return this.armamentos[indice];
  }

  atualizar(indice : number, novo : Itens){
    this.armamentos[indice] = novo;
  }

  deletar(indice : number){
    this.armamentos.splice(indice, 1);
  }
}