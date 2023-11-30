import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { apiEndpoints } from 'src/app/core/http/api.endpoint';
import { Item } from 'src/app/shared/model/item.model';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

constructor(private http: HttpClient) { }

getItemList(): Observable<Item[]> {
 return this.http.get<Item[]>(apiEndpoints.items.getItemList);
}

getItemById(id: number): Observable<Item> {
  return this.http.get<Item>(apiEndpoints.items.getItemById + "/" + id);
}

deleteItem(id: number) {
  return this.http.delete(apiEndpoints.items.deleteItem + id);
}
getLargestId() {
  return this.http.get(apiEndpoints.items.getLargestId);
}

addItem(item: any): Observable<Item>  {
   return this.http.post<Item>(apiEndpoints.items.addItem, item, httpOptions);
}
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
