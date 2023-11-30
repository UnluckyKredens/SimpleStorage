import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/shared/services/item/item.service';
import { Item } from 'src/app/shared/model/item.model';

@Component({
  selector: 'app-item-add-presenter',
  templateUrl: './item-add-presenter.component.html',
  styleUrls: ['./item-add-presenter.component.scss']
})
export class ItemAddPresenterComponent implements OnInit {

  id: any;
  // isLoaded: boolean = false;
  constructor(private itemService: ItemService, private builder: FormBuilder) { }

  getLargestId() {
    this.itemService.getLargestId().subscribe(maxId => {
      if(maxId == null) {
        this.id = 0;
      }else {
        this.id = maxId;
        this.id++;
        console.log(this.id);
      }
    })
  }

  addItemForm = this.builder.group({
    name: [''],
    type: [''],
    amount: [],
    value: [],
  })

  ngOnInit() {
    this.getLargestId();
  }

  addItem() {
    const item = {
      name: this.addItemForm.value.name,
      type: this.addItemForm.value.type,
      amount: Number(this.addItemForm.value.amount),
      value: Number(this.addItemForm.value.value)
    }
    this.itemService.addItem(JSON.stringify(item)).subscribe(x => {
      location.href = '/';
    });
  }


}
