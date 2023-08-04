import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter()

  public character : Character = {
    id : '',
    name : '',
    power : 0
  };

  public emitCharacter() : void {
    if(this.character.name === '') return
    if(this.character.power < 0) return
    this.character.id = uuid()
    this.onNewCharacter.emit(this.character)

    console.log(this.character)

    this.character = {
      id : '',
      name : '',
      power : 0
    }
  }
}
