import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser'

import Swal from 'sweetalert2';
import { xoyService } from '../services/xoy.service';
import { InicialService } from '../services/inicial.service';
import {  Atributos } from '../interface/atributos';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
// import { resolve } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements Atributos, OnInit {
  e:number=0;
  jugador:number=0;
  jugadas:Array<any>=[];
  ganste:boolean = false;
  ganador:string="";

  // model: Atributos = {
  //                     txt1:"",txt2:"",txt3:"",txt4:"",txt5:"",txt6:"",txt7:"",txt8:"",txt9:"",
  //                     caja1:"",caja2:"",caja3:"",caja4:"",caja5:"",caja6:"",caja7:"",caja8:"",caja9:""

  //                    };
  txt1="";
  txt2="";
  txt3="";
  txt4="";
  txt5="";
  txt6="";
  txt7="";
  txt8="";
  txt9="";

  caja1="";
  caja2="";
  caja3="";
  caja4="";
  caja5="";
  caja6="";
  caja7="";
  caja8="";
  caja9="";


  constructor(
    private xoy:xoyService,
    private inicial : InicialService   ) { 
    }

  ngOnInit(  ) {
          // this.inicial.inicializar(9);
    };
  onSelect(e){   
    this.e = e;

    if(this.ganste){
      Swal.fire(
        'Juego terminado',
        'Presione el boton para continuar',
        'error'
      )
      return true;
    }

    if(this.jugadas.find(x =>x.jugada == e)){
      Swal.fire(
        'Esta casilla ya esta ocupada',
        'Presione el boton para continuar',
        'error'
      )
      return true;
    }

    if(this.jugador == 0){
      this.jugador = 1;
    }

    let obj = {
      jugador:this.jugador,
      jugada:this.e
    }

    if(this.jugador == 1){
      this.jugadas.push(obj);
      this.colorCaja(this.jugador,e);    
      this.xoy.validarGanador(this.jugador,this.jugadas)
       .then((resp) =>{
        if(resp){
          Swal.fire(
            `Gana la X`,
            'Presione el boton para continuar',
            'success' )
         this.ganste = true; 
         this.ganador = "Felicidades X, ganó la X";   }
      });
        this.jugador = 2;
    }else {      
      this.jugadas.push(obj);
      this.colorCaja(this.jugador,e);     
      this.xoy.validarGanador(this.jugador,this.jugadas)
        .then((resp) =>{
          if(resp){
            Swal.fire(
              `Gana el O`,
              'Presione el boton para continuar',
              'success'
            )
          this.ganste = true; 
          this.ganador = "Felicidades O, ganó la O";  }
        })
      this.jugador = 1;
    } 
     if(this.xoy.noganan && !this.ganste ){
      Swal.fire(
        'No gana la X no gana a O',
        'Presione el boton para continuar',
        'success')
        this.ganste = true; 
        this.ganador = "Lo importante es competir";
      }  
  }
 
  colorCaja(jugador,valor){
    if(jugador == 1){
    let i= valor;
    let toxt = "";
      toxt = "txt" + i.toString();   this[toxt] = "X";
      toxt = "caja" + i.toString();  this[toxt] = "green";
    }else{
      let i= valor;
      let toxt = "";
        toxt = "txt" + i.toString();  this[toxt] = "O";
        toxt = "caja" + i.toString(); this[toxt] = "blue";
    }
  }

  onJugar(){
    // Initialize screen and values
    this.jugador = 0;
    this.jugadas = [];
    this.ganste = false;
    this.ganador = "";  
    let i=0;
    let toxt = "";
    for (i = 0; i < 10; i++) {
      toxt = "txt" + i.toString();  this[toxt] = "";
      toxt = "caja" + i.toString(); this[toxt] = "";
    }
 }

}

 // switch(this.jugador){
  //   case 1: 
  //     this.jugadas.push(obj);
  //     this.colorCaja(this.jugador,e);    
  //     this.serviValidar.validarGanador(this.jugador,this.jugadas)
  //     .then((resp) =>{
  //       if(resp){
  //         Swal.fire(
  //           'Gana la X',
  //           'Presione el boton para continuar',
  //           'success'
  //         )
  //       this.ganste = true; 
  //       this.ganador = "Felicidades X, ganó la X";
  //               }
  //                     })
  //       this.jugador = 2;

  //     case 2:     
  //   this.jugadas.push(obj);
  //   this.colorCaja(this.jugador,e);     
  //   this.serviValidar.validarGanador(this.jugador,this.jugadas)
  //     .then((resp) =>{
  //       if(resp){
  //         Swal.fire(
  //           'Gana el O',
  //           'Presione el boton para continuar',
  //           'success'
  //         )
  //       this.ganste = true; 
  //       this.ganador = "Felicidades O, ganó la O";
  //               }
  //                      } )
  //   this.jugador = 1;
  //   default:
  //     this.jugadas.push(obj);
  //     this.colorCaja(this.jugador,e);     
  //           Swal.fire(
  //             `No hubo ganador`,
  //             'Lo importante es competir',
  //             'success'
  //           )
  //         this.ganste = false; 
  //         this.ganador = "Lo importante es competir";
  //   }
  // }   
 