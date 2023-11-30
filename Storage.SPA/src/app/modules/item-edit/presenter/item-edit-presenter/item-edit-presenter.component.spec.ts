import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditPresenterComponent } from './item-edit-presenter.component';

describe('ItemEditPresenterComponent', () => {
  let component: ItemEditPresenterComponent;
  let fixture: ComponentFixture<ItemEditPresenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemEditPresenterComponent]
    });
    fixture = TestBed.createComponent(ItemEditPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
