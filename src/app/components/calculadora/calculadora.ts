import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.scss'],
  standalone: false
})
export class CalculadoraComponent {

  pantalla:string = '';

  numero1:string = '';
  numero2:string = '';
  operador:string = '';

  agregar(valor:string){

    if(valor === 'C'){
      this.limpiar();
      return;
    }

    if(valor === '='){
      this.calcular();
      return;
    }

    if(this.esOperador(valor)){

      if(this.numero1 === ''){
        return;
      }

      if(this.operador !== ''){
        return;
      }

      this.operador = valor;
      this.pantalla += valor;

      return;
    }

    if(this.operador === ''){
      this.numero1 += valor;
    }else{
      this.numero2 += valor;
    }

    this.pantalla += valor;
  }

  esOperador(valor:string):boolean{
    return valor === '+' ||
           valor === '-' ||
           valor === '*' ||
           valor === '/';
  }

  calcular(){

    const n1 = Number(this.numero1);
    const n2 = Number(this.numero2);

    let resultado:number = 0;

    switch(this.operador){

      case '+':
        resultado = n1 + n2;
      break;

      case '-':
        resultado = n1 - n2;
      break;

      case '*':
        resultado = n1 * n2;
      break;

      case '/':

        if(n2 === 0){
          this.pantalla = 'Error';
          setTimeout(() => {
            this.pantalla = "";
          }, 1000 );
          return;
        }
        resultado = n1 / n2;
      break;

    }

    this.pantalla = resultado.toString();

    this.numero1 = resultado.toString();
    this.numero2 = '';
    this.operador = '';
  }

  limpiar(){

    this.pantalla = '';

    this.numero1 = '';
    this.numero2 = '';
    this.operador = '';

  }

}