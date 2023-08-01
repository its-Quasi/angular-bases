import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public characters : Character[] = [
    {
      name: 'Krillin',
      power: 100
    },
    {
      name: 'Gohan',
      power: 1000
    }
  ]
  onNewCharacter(character : Character) : void {
    console.log(character)
    this.characters.push(character)
  }
  onDeleteCharacter(index : number) : void {
    //dummy change
    this.characters.splice(index, 1)
  }
}
