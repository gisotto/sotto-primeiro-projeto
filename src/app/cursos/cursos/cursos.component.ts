import { Component } from '@angular/core';
interface ICursos {
  nome: string;
  valor: number;
}
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public nomePortal: string = 'http://loiane.training';
  public cursos: ICursos[] = [
    { nome: 'Java', valor: 6 },
    { nome: 'Ext Js', valor: 2 },
    { nome: 'Angular', valor: 8 }
  ];

  constructor() {
  }

}
