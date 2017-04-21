import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, PopoverController, ModalController } from 'ionic-angular';
import { DetailPage } from '../detailProfile/detail';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {


  detailPage = DetailPage;

  // @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;


  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController, public modalCtrl: ModalController) {
  }

  goToOtherPage() {
    //   this.navCtrl.push(DetailPage);
    let modal = this.modalCtrl.create(DetailPage);
    modal.present();
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
