import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChamadosProvider } from '../../providers/chamados/chamados';
import { RestJsonProvider } from '../../providers/rest-json/rest-json';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 public items = [];
 public filas = [];
 public fila;
 public tituloChamado;

  constructor(public navCtrl: NavController, public chamados: ChamadosProvider, public ws: RestJsonProvider) {
    //this.items  = ws.getWS([{ 'fila':'TI' }]);
    this.filas = chamados.getFilas();
  }

  listar(){
    var idFila = this.fila;
    this.tituloChamado = this.chamados.getNameFila(idFila);
    this.items = this.chamados.getChamados(idFila);
  }

  itemSelected(){}

}
