import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  accont: any = {};
  session = localStorage.getItem('session');
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public toastCtrl: ToastController, ) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
  }


  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  codigo() {
    if (this.accont.codigo == '1') {
      this.startNotification('si es beneficiario');
      this.Beneficio('data');
    }

    if (this.accont.codigo == '2') {
      this.startNotification(' no beneficiario');
    }

    if (this.accont.codigo == '3') {
      this.startNotification('completar datos');
      this.compledData();
    }
  }


  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }

  Beneficio(data) {
    let addModal = this.modalCtrl.create('BeneficioPage');
    addModal.onDidDismiss(item => { 
      console.log(item);
    })
    addModal.present();
  }

  startNotification(data) {
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  
  compledData(){
    let addModal = this.modalCtrl.create('UpdateInfoPage');
    addModal.onDidDismiss(item => { 
      console.log(item);
    })
    addModal.present();
  }
}
