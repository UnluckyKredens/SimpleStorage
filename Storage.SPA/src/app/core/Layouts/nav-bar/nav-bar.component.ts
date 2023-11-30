import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  username: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.FindUser()
  }

  FindUser() {
    var id = localStorage.getItem('id');

    this.userService.findUser(id).subscribe(x => {
      this.username = x.username;
    })
  }
}
