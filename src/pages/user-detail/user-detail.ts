import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {

  private user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {}

  ionViewDidLoad() {
    this.user = this.navParams.data.user;
  }

}
