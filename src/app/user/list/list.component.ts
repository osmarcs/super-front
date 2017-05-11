import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:User[] = [];
  currentPage:number = 1;
  totalPages:number[] = [];

  constructor (private userService: UserService) {}

  getUsers(): void {
    this.userService.getUsers(this.currentPage).subscribe(res => {
      this.totalPages = Array(res.totalPages).fill(0);
      this.users  = res.users;
    });
  }

  changePage(page:number, event): void {
    event.preventDefault();
      if (page == this.currentPage || page > this.totalPages.length || page < 1) {
        return;
      }
      this.currentPage = page;
      this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
    this.changePage = this.changePage.bind(this);
  }

}
