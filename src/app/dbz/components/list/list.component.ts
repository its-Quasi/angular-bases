import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
//import Hero from '../../interfaces'

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete : EventEmitter<number> = new EventEmitter()

  @Input()
  public characters : Character[] = [] // input list from my parent

  onDeleteCharacter(index : number) : void {
    this.onDelete.emit(index)
  }

}
