import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPegamentosComponent } from './products-pegamentos.component';

describe('ProductsPegamentosComponent', () => {
  let component: ProductsPegamentosComponent;
  let fixture: ComponentFixture<ProductsPegamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPegamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPegamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
