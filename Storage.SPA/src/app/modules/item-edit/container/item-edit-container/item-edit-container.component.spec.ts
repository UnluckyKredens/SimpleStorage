import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditContainerComponent } from './item-edit-container.component';

describe('ItemEditContainerComponent', () => {
  let component: ItemEditContainerComponent;
  let fixture: ComponentFixture<ItemEditContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemEditContainerComponent]
    });
    fixture = TestBed.createComponent(ItemEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
