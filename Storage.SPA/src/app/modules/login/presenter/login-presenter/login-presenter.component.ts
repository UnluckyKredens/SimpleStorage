import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-login-presenter',
  templateUrl: './login-presenter.component.html',
  styleUrls: ['./login-presenter.component.scss']
})
export class LoginPresenterComponent implements OnInit {

  hide: boolean = true;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
      username: (''),
      password: (''),
  })

  login() {
    var user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.userService.login(user).subscribe(x => {
      localStorage.setItem('id', x.toString())
      location.href = '/'
    });

  }
}
