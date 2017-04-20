import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    email: string = '';
    password: string = '';
    inscriptionPage = InscriptionPage;
    homePage = HomePage;

    constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    }

    doLogin() {
        let loader = this.loadingCtrl.create({
            content: "Logging in..."
        });
        loader.present();
        setTimeout(() => {
            if (this.email === 'hhh' && this.password === 'fffff') {
                let alert = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are rquired',
                    buttons: ['OK']
                });
                alert.present();
                loader.dismiss();
                return;
            } else if (this.email === '' && this.password === '') {
                loader.dismiss();
                this.navCtrl.push(HomePage);
            } else {
                let alert = this.alertCtrl.create({
                    title: 'Authentification',
                    subTitle: 'Probleme d\'authentification',
                    buttons: ['Quiter']
                });
                alert.present();
                loader.dismiss();
            }
        }, 2000);
    }



}