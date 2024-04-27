import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoChildComponent } from './producto-child.component';

describe('ProductoChildComponent', () => {
  let component: ProductoChildComponent;
  let fixture: ComponentFixture<ProductoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
