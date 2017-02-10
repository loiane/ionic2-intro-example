import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersProvider {

  private users: any[];

  constructor(public http: Http) {
  }

  getData(){

    if (this.users){
      return Observable.of(this.users);
    }

    return this.http.get('https://randomuser.me/api/?results=10')
      .map((res: Response) => res.json().results)
      .do(data => this.users = data)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
