import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 public items = {};

  constructor(public navCtrl: NavController) {
    this.items = [
        {
            'id' : 1,
            'name' : 'chamado 1'
        },
        {
            'id' : 2,
            'name' : 'chamado 2'
        },
        {
            'id' : 3,
            'name' : 'chamado 3'
        },
        {
            'id' : 4,
            'name' : 'chamado 4'
        },
    ];

  }

  itemSelected(){}

}
