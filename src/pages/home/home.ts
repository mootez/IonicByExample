import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
//import { VisitePage } from '../visite/visite';
import { MessagePage } from '../message/message';
import { ProfilePage } from '../profile/profile';
import { LikePage } from '../like/like';
import { VisitePage } from '../visite/visite';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  tab1Root = ProfilePage;
  tab2Root = LikePage;
  tab3Root = MessagePage;
  tab4Root = VisitePage;


  constructor(public navCtrl: NavController) {
  }


}
