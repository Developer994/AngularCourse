import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
})
export class UsersListComponent {
  //   testUsers = ['Jack', 'John', 'Sam'];
  users = [
    {
      id: '1',
      name: 'Jack',
      age: 21,
    },
    {
      id: '2',
      name: 'John',
      age: 25,
    },
    {
      id: '3',
      name: 'Sam',
      age: 29,
    },
  ];

  removeUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  setNewUserName(userName: string): void {
    console.log('setNewUserName', userName);
  }

  //   setNewUserName(event: Event): void {
  //     this.newUserName = (<HTMLInputElement>event.target).value;
  //   }

  addUser(): void {
    console.log('addUser');
  }
}
