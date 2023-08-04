import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters : Character[] = []

  onNewCharacter(character : Character) : void {
    console.log(character)
    this.characters.push(character)
  }
  onDeleteById(id : string) : void {
    this.characters = this.characters.filter( character => character.id != id)
  }
}
