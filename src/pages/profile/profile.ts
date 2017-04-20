import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, PopoverController } from 'ionic-angular';
import { DetailPage } from '../detailProfile/detail';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {


  detailPage = DetailPage;

  // @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;


  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {
  }

  goToOtherPage() {

   this.navCtrl.push(DetailPage);
  }

  //  presentPopover(ev) {

  // let popover = this.popoverCtrl.create(PopoverPage, {
  //    contentEle: this.content.nativeElement,
  //    textEle: this.text.nativeElement
  // });

  //  popover.present({
  //    ev: ev
  //  });
  // }


}
