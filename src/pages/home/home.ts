import { UserDetailPage } from './../user-detail/user-detail';
import { UsersProvider } from './../../providers/users-provider';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private users: any[];

  constructor(
    public navCtrl: NavController,
    private usersProvider: UsersProvider
  ) {}

  ionViewDidLoad(){
    this.usersProvider.getData()
      .subscribe(res => this.users = res);
  }

  goToUserDetail(user){
    this.navCtrl.push(UserDetailPage, {
      user: user
    });
  }
}
