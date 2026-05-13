import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';

import { CalculadoraComponent } from './components/calculadora/calculadora';
import { BotonesComponent } from './components/botones/botones';
import { PantallaResultadoComponent } from './components/pantalla-resultado/pantalla-resultado';

@NgModule({
  declarations: [
    App,
    CalculadoraComponent,
    BotonesComponent,
    PantallaResultadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }