import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UsersListComponent } from 'src/app/usersList/usersList.component';
import { UsersListModule } from 'src/app/usersList/usersList.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
