import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPesasComponent } from './products-pesas.component';

describe('ProductsPesasComponent', () => {
  let component: ProductsPesasComponent;
  let fixture: ComponentFixture<ProductsPesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPesasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
