import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router}   from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


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
  private sub:Subscription;

  constructor (
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
      this.goToPage(page);
  }

  ngOnInit(): void {
    this.changePage = this.changePage.bind(this);
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.currentPage = params['page'] || 1;
        this.getUsers();
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goToPage(pageNum) {
    this.router.navigate(['/user/list'], { queryParams: { page: pageNum } });
  }

}
