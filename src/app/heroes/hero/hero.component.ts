import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string = 'ironman'
  public age : number = 40
  public method : string = 'Idk man'


  get capitalizedName() : string {
    const capitalized = '????'
    return capitalized
  }

  changeHero() : void {
    this.name = 'spiderman'
  }

  changeAge(e : number) : void {
    if(this.age !== 40) {
      this.age = 40
      return
    }
    this.age = e
  }

}
