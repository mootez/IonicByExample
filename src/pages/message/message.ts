import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  envoyerModel: string = "envoyer";
  constructor(public navCtrl: NavController) {

  }

}
