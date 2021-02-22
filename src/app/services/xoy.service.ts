import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class xoyService {
  noganan:boolean = false;
  constructor() { }

  validarGanador(jugador,juego){
    // Combinaciones para ganar
    // A:[1,2,3] B:[4,5,6] C:[7,8,9] D:[1,4,7] 
    // E:[2,5,8] F:[3,6,9] G:[1,5,9] H:[7,5,3]
   
      return new Promise((resolve) => {        
      
          let combinacion_a = juego.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 2 || x.jugada == 3));             
          if(combinacion_a.length == 3){
            resolve(true);
          }
          
          let combinacion_b = juego.filter(x =>x.jugador == jugador &&(x.jugada == 4 || x.jugada == 5 || x.jugada == 6));        
          if(combinacion_b.length == 3){
            resolve(true);
          }
      
          let combinacion_c = juego.filter(x =>x.jugador == jugador &&(x.jugada == 7 || x.jugada == 8 || x.jugada == 9));       
          if(combinacion_c.length == 3){
            resolve(true);
          }
      
          let combinacion_d = juego.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 4 || x.jugada == 7));       
          if(combinacion_d.length == 3){
            resolve(true);
          }
      
          let combinacion_e = juego.filter(x =>x.jugador == jugador &&(x.jugada == 2 || x.jugada == 5 || x.jugada == 8));        
          if(combinacion_e.length == 3){
            resolve(true);
          }
      
          let combinacion_f = juego.filter(x =>x.jugador == jugador &&(x.jugada == 3 || x.jugada == 6 || x.jugada == 9));        
          if(combinacion_f.length == 3){
            resolve(true);
          }
      
          let combinacion_g = juego.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 5 || x.jugada == 9));        
          if(combinacion_g.length == 3){
            resolve(true);
          }
      
          let combinacion_h = juego.filter(x =>x.jugador == jugador &&(x.jugada == 7 || x.jugada == 5 || x.jugada == 3));        
          if(combinacion_h.length == 3){
            resolve(true);
          }
          let nocombinacion: number= 
          (combinacion_a.length)+(combinacion_b.length)+(combinacion_c.length)+(combinacion_d.length)+
          (combinacion_e.length)+(combinacion_f.length)+(combinacion_h.length)

          if (nocombinacion >10) {
              this.noganan=true;   
         }

      });
  }



}
