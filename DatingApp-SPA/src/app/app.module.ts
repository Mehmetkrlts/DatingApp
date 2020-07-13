import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http' ;
import {FormsModule} from '@angular/forms' ;
import {BsDropdownModule} from 'ngx-bootstrap' ;
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_Services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_Services/error.interceptor';
import { AlertifyService } from './_Services/alertify.service';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { appRoutes } from './route';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      MessagesComponent,
      ListsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      [AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }