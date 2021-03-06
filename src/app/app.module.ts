import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './user/list/list.component';
import { DetailsComponent } from './user/details/details.component';

import { UserService } from './user/user.service';
import { PaginationComponent } from './paginate/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/user/list',
        pathMatch: 'full'
      },
      {
        path: 'user/list',
        component: ListComponent
      },
      {
        path: 'user/details/:id',
        component: DetailsComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
