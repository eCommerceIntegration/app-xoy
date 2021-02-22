"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(serviValidar) {
        this.serviValidar = serviValidar;
        this.e = 0;
        this.jugador = 0;
        this.jugadas = [];
        this.ganste = false;
        this.ganador = "";
        this.txt1 = "";
        this.txt2 = "";
        this.txt3 = "";
        this.txt4 = "";
        this.txt5 = "";
        this.txt6 = "";
        this.txt7 = "";
        this.txt8 = "";
        this.txt9 = "";
        this.caja1 = "";
        this.caja2 = "";
        this.caja3 = "";
        this.caja4 = "";
        this.caja5 = "";
        this.caja6 = "";
        this.caja7 = "";
        this.caja8 = "";
        this.caja9 = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSelect = function (e) {
        var _this = this;
        this.e = e;
        if (this.ganste) {
            sweetalert2_1["default"].fire('Juego terminado', 'Presione el boton para continuar', 'error');
            return true;
        }
        if (this.jugadas.find(function (x) { return x.jugada == e; })) {
            sweetalert2_1["default"].fire('Esta casilla ya esta ocupada', 'Presione el boton para continuar', 'error');
            return true;
        }
        if (this.jugador == 0) {
            this.jugador = 1;
        }
        var obj = {
            jugador: this.jugador,
            jugada: this.e
        };
        if (this.jugador == 1) {
            this.jugadas.push(obj);
            this.colorCaja(this.jugador, e);
            this.serviValidar.validarGanador(this.jugador, this.jugadas)
                .then(function (resp) {
                if (resp) {
                    sweetalert2_1["default"].fire("Ganador jugador X", 'Presione el boton para continuar', 'success');
                    _this.ganste = true;
                    _this.ganador = "Felicidades Ganaste X";
                }
            });
            this.jugador = 2;
        }
        else {
            this.jugadas.push(obj);
            this.colorCaja(this.jugador, e);
            this.serviValidar.validarGanador(this.jugador, this.jugadas)
                .then(function (resp) {
                if (resp) {
                    sweetalert2_1["default"].fire("Ganador jugador O", 'Presione el boton para continuar', 'success');
                    _this.ganste = true;
                    _this.ganador = "Felicidades Ganaste O";
                }
            });
            this.jugador = 1;
        }
    };
    HomeComponent.prototype.colorCaja = function (jugador, valor) {
        if (jugador == 1) {
            switch (valor) {
                case 1:
                    this.txt1 = "X";
                    this.caja1 = "green";
                    break;
                case 2:
                    this.txt2 = "X";
                    this.caja2 = "green";
                    break;
                case 3:
                    this.txt3 = "X";
                    this.caja3 = "green";
                    break;
                case 4:
                    this.txt4 = "X";
                    this.caja4 = "green";
                    break;
                case 5:
                    this.txt5 = "X";
                    this.caja5 = "green";
                    break;
                case 6:
                    this.txt6 = "X";
                    this.caja6 = "green";
                    break;
                case 7:
                    this.txt7 = "X";
                    this.caja7 = "green";
                    break;
                case 8:
                    this.txt8 = "X";
                    this.caja8 = "green";
                    break;
                case 9:
                    this.txt9 = "X";
                    this.caja9 = "green";
                    break;
            }
        }
        else {
            switch (valor) {
                case 1:
                    this.txt1 = "O";
                    this.caja1 = "blue";
                    break;
                case 2:
                    this.txt2 = "O";
                    this.caja2 = "blue";
                    break;
                case 3:
                    this.txt3 = "O";
                    this.caja3 = "blue";
                    break;
                case 4:
                    this.txt4 = "O";
                    this.caja4 = "blue";
                    break;
                case 5:
                    this.txt5 = "O";
                    this.caja5 = "blue";
                    break;
                case 6:
                    this.txt6 = "O";
                    this.caja6 = "blue";
                    break;
                case 7:
                    this.txt7 = "O";
                    this.caja7 = "blue";
                    break;
                case 8:
                    this.txt8 = "O";
                    this.caja8 = "blue";
                    break;
                case 9:
                    this.txt9 = "O";
                    this.caja9 = "blue";
                    break;
            }
        }
    };
    HomeComponent.prototype.onJugar = function () {
        this.jugador = 0;
        this.jugadas = [];
        this.ganste = false;
        this.ganador = "";
        var myObj;
        var i = 0;
        var toxt = "";
        console.log(toxt);
        for (i = 0; i < 9; i++) {
            toxt = toxt + i.toString();
            this[toxt] = "";
            console.log(this[toxt]);
        }
        // this.txt1="";
        // this.txt2="";
        // this.txt3="";
        // this.txt4="";
        // this.txt5="";
        // this.txt6="";
        // this.txt7="";
        // this.txt8="";
        // this.txt9="";
        this.caja1 = "";
        this.caja2 = "";
        this.caja3 = "";
        this.caja4 = "";
        this.caja5 = "";
        this.caja6 = "";
        this.caja7 = "";
        this.caja8 = "";
        this.caja9 = "";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
