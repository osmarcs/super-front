import { Injectable } from '@angular/core';
import { User, ListUser } from './User';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

let CurrentUsers:User[] = [];

@Injectable()
export class UserService {

  private baseUrl: string = "https://randomuser.me/api/?results=12&seed=test"
  constructor(private http: Http) { }

  getUsers(page: number): Observable<ListUser> {
    return this.http
              .get(`${this.baseUrl}&page=${page}`,{headers: this.getHeaders()})
              .map(response => response.json())
              .map(creatListUsers);
  }

  getUser(id: string): Observable<User> {
    return Observable.create(function(observer) {
      let user:User;
      user = CurrentUsers.find(user => user.id == id);
      observer.next(user);
      observer.complete();
    })
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function creatListUsers(res): ListUser {
  let totalPages = (res.pagination) ? res.pagination.total : 10;
  let results = (res.results) ? res.results : [];
  let user = results.map(toUser);
  CurrentUsers = user;

  return <ListUser>({
    totalPages: totalPages,
    users: CurrentUsers
  })
}

function toUser(r:any): User{
  let user = <User>({
    id: r.login.username,
    name: `${r.name.first} ${r.name.last}`,
    email: r.email,
    dob: new Date(r.dob),
    avatar: r.picture.large,
    address: r.location.street,
    phone: r.phone,
  });
  return user;
}
