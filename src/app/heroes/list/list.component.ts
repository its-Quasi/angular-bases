import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes : string[] = ['superman', 'batman', 'wonderwoman', 'Thor']
  public deletedHero? : string;

  deleteLast() : void {
    this.deletedHero = this.heroes.pop()
  }
}
