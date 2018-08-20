import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage { 
  account: any = {  };

 
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public user: User,  public toastCtrl: ToastController, public translateService: TranslateService) { 
  }

 
  doLogin() {
    if(this.account.email && this.account.password){
      this.user.login(this.account).subscribe((resp) => {
        this.navCtrl.push(MainPage);
      }, (err) => {
        localStorage.setItem('session',this.account.email); 
        this.navCtrl.push(MainPage); 
      });
    }else{
      this.startNotification('Datos Vasios');
    } 
  }
  

  startNotification(data){
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
