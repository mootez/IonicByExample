import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ProfilePage } from '../pages/profile/profile';
import { LikePage } from '../pages/like/like';
import { VisitePage } from '../pages/visite/visite';
import { MessagePage } from '../pages/message/message';
import { DetailPage } from '../pages/detailProfile/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    VisitePage,
    MessagePage,
    HomePage,
    InscriptionPage,
    ProfilePage,
    LikePage,
    DetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    VisitePage,
    MessagePage,
    HomePage,
    InscriptionPage,
    ProfilePage,
    LikePage,
    DetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
