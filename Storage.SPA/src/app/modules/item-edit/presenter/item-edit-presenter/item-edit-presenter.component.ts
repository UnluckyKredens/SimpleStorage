import { Constructor } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ItemService } from 'src/app/shared/services/item/item.service';
import { Item } from 'src/app/shared/model/item.model';

@Component({
  selector: 'app-item-edit-presenter',
  templateUrl: './item-edit-presenter.component.html',
  styleUrls: ['./item-edit-presenter.component.scss']
})
export class ItemEditPresenterComponent implements OnInit {

  itemId: any;
  item: Item;
  isLoaded: boolean = false;
  constructor(private ItemService: ItemService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    console.log(this.itemId)
    this.getItem();
  }

  getItem() {
    this.ItemService.getItemById(this.itemId).subscribe(x => {
     this.item = x;
     this.isLoaded = true;
    })
  }

  editItem() {

  }
}
