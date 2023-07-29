import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
//import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }