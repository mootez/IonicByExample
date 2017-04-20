import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,PopoverController } from 'ionic-angular';




@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage  {


  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController) {
  }



}