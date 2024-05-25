import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import ProductoComponent from './producto.component';
import { ConsultaService } from '../../services/http/consulta.service';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ProductoComponent],
      providers: [ConsultaService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on init', () => {
    spyOn(component['productoS'], 'getAll').and.callThrough();
    component.ngOnInit();
    expect(component['productoS'].getAll).toHaveBeenCalled();
  });
});

