import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessageErrorsDirective} from "@app/shared/directives/field-errors/directive/message-errors.directive";
import {RouterLink} from "@angular/router";
import {NgSelectModule} from "@ng-select/ng-select";
import {AlertService} from "@app/core/services/alert.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductsService} from "@app/modules/products/services/products.service";
import {TrimDirective} from "@app/shared/directives/trim.directive";
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";
import {LoadingService} from "@app/core/services/loading.service";
import {Observable} from "rxjs";
import {IMAGE_lOGO_EXTENSIONS} from "@app/core/utils/consts";

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    FormsModule,
    MessageErrorsDirective,
    ReactiveFormsModule,
    RouterLink,
    NgSelectModule,
    TrimDirective,
    InputMaskDirective
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});
  screen: number = 1;
  images: string = '';

  constructor(
    private _alert: AlertService,
    private _product: ProductsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialogRef<ProductEditComponent>,
    private _loading: LoadingService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.getProductById(this.data);
    }
  }

  getProductById(id: any) {
    this._loading.show();
    this._product.getProductById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.setDataProduct(data);
        this._loading.hide();
        this.images = data.product_image;
      }
    });
  }

  setDataProduct(data: any) {
    this.productForm.get('nombre')?.setValue(data['product_name']);
    this.productForm.get('valor')?.setValue(data['product_price']);
    this.productForm.get('detalle')?.setValue(data['product_detail']);
    this.productForm.get('img')?.setValue(data['product_image']);
  }

  changeScreen(screen: number) {
    if (this.productForm.valid) {
      this.screen = screen;
    } else {
      this.productForm.markAllAsTouched();
      this._alert.warning('Debes completar todos los campos');
    }
  }

  initForm(): void {
    this.productForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      detalle: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.minLength(3)]),
      valor: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
    });
  }

  sendDataRegisterProduct() {
    if (this.productForm.valid) {
      this._loading.show();
      const dataProduct: any = {
        detalle: this.productForm.get("detalle")?.value,
        nombre: this.productForm.get("nombre")?.value,
        valor: this.productForm.get("valor")?.value,
        img: this.productForm.get("img")?.value
      };

      if (this.data && this.data.id) {
        // Actualizar producto existente
        const productId = this.data.id;
        this._product.updateProduct(productId, dataProduct).subscribe({
          next: () => {
            this.productForm.reset();
            this.images = '';
            this._alert.success('Producto actualizado exitosamente');
            this._dialog.close(true);
            this._loading.hide();
          },
          error: (error) => {
            this._alert.error(error.error.message || "Hubo un problema al actualizar el producto.");
            this._loading.hide();
          }
        });
      } else {
        // Crear nuevo producto
        this._product.saveProduct(dataProduct).subscribe({
          next: () => {
            this.productForm.reset();
            this.images = '';
            this._alert.success('Producto registrado exitosamente');
            this._dialog.close(true);
            this._loading.hide();
          },
          error: (error) => {
            this._alert.error(error.error.message || "Hubo un problema al registrar el producto.");
            this._loading.hide();
          }
        });
      }
    } else {
      this._alert.warning('Debes completar todos los campos y agregar una imagen');
    }
  }
}
