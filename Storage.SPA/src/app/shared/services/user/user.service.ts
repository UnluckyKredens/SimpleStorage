import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoints } from 'src/app/core/http/api.endpoint';
import { User } from '../../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }


 login(login: any): Observable<User> {
  console.log(login)
    return this.http.post<User>(apiEndpoints.users.login, login)
}
  findUser(id: any): Observable<User> {
    return this.http.get<User>(apiEndpoints.users.findUserById + id)
  }
}
