import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(public dbzService : DbzService) {}


  /*
  El service no deberia ser public
  se privatiza y se crean metodos en esta clase que llamen los metodos del servicio
  y se crean getters para los atributos que contenga el service.

  Ejemplo:
  get characters() : Character[] {
    return dbzService.characters;
  }

  onDeleteCharacter(id : string) : void {
    this.dbzService.onDeleteById(id)
  }
  */

}
