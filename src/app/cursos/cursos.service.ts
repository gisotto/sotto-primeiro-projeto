import { Injectable } from '@angular/core';

export interface ICursos {
  nome: string;
  valor: number;
}

@Injectable()
export class CursosService {

  constructor() {

  }

  public getCursos(): ICursos[] {
    return [
      { nome: 'Java', valor: 6 },
      { nome: 'Ext Js', valor: 2 },
      { nome: 'Angular', valor: 8 }
    ];
  }
}
