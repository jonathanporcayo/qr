import { Component, ViewChild } from '@angular/core';  
import {  Nav, Platform } from 'ionic-angular'; 
import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { MainPage } from '../pages';


@Component({
  template: ` 
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage :any;
  session = localStorage.getItem('session');
  @ViewChild(Nav) nav: Nav;

  

  constructor(  public platform: Platform, settings: Settings) {
 console.log(this.session);
    if(this.session ==null){
      this.rootPage=FirstRunPage;
    }else{
      this.rootPage=MainPage;
    }

   
  }

 

  openPage(page) { 
    this.nav.setRoot(page.component);
  }
}
