import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from '../../../../shared/services/item/item.service';
import { Item } from 'src/app/shared/model/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-table-presenter',
  templateUrl: './dashboard-table-presenter.component.html',
  styleUrls: ['./dashboard-table-presenter.component.scss']
})
export class DashboardTablePresenterComponent implements OnInit {

  items: Item[] = [];
  dataSource = new MatTableDataSource(this.items);
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.itemService.getItemList().subscribe(model => {
      this.items = model;
      this.dataSource = new MatTableDataSource(this.items);
    });
  }


  displayedColumns: string[] = ['id', 'name', 'type', 'amount', "value", "options"];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  editItem(id: number) {
    window.location.href = '/edit/' + id;
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(() => (window.location.reload()));
  }

}
