import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import 'rxjs/add/operator/switchMap';


import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DatePipe]
})
export class DetailsComponent implements OnInit {

  user:User = new User;
  textShow:string = "";
  field:string = "";

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {

    this.route.params
    .switchMap((params: Params) => this.userService.getUser(params['id']))
    .subscribe(user => {
      if (!user) {
        this.goBack();
        return;
      }
      this.user = user;
    });
  }

  goBack(): void{
    this.location.back();
  }

  itemOver(field): void {
    this.field = field;
    this.textShow = this.user[field];
    if (field == 'dob') {
      this.textShow = this.datePipe.transform(this.textShow, 'dd/MM/yyyy');
    }
  }

}
