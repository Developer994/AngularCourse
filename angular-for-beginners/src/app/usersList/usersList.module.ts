import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersListComponent } from 'src/app/usersList/usersList.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule],
  exports: [UsersListComponent],
})
export class UsersListModule {}
