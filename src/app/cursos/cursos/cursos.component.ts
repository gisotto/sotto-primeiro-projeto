import { Component } from '@angular/core';
import { ICursos, CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public nomePortal: string = 'http://loiane.training';
  public cursos: ICursos[];

  constructor(private service: CursosService) {
    this.cursos = this.service.getCursos();
  }

}
