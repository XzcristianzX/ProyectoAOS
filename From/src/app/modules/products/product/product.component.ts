import {Component, OnInit, ChangeDetectorRef,NgZone } from '@angular/core';
import {TableComponent} from "@app/shared/layout/table/table.component";
import {TableActions, TableColumn} from "@app/shared/layout/interfaces/table-actions";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ProductEditComponent} from "@app/modules/products/product-edit/product-edit.component";
import {AlertService} from "@app/core/services/alert.service";
import {ProductsService} from "@app/modules/products/services/products.service";
import {LoadingService} from "@app/core/services/loading.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    TableComponent,
    MatDialogModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  buttonActionName: string = 'Agregar producto';
  tableActions: TableActions = {
    add: true,
    edit: true,
    delete: true,
  };
  columnsTable: TableColumn[] = [
    { name: 'Nombre', key: 'nombre', type: 'text' },
    { name: 'Precio', key: 'valor', type: 'text' },
    { name: 'Descripción', key: 'detalle', type: 'text' },
  ];
  tableData: any = [];

  constructor(
    private _dialog: MatDialog,
    private _product: ProductsService,
    private _alert: AlertService,
    private _loading: LoadingService,
    private _changeDetectorRef: ChangeDetectorRef  // Inyectar ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this._loading.show();
    this._product.getAllProducts().subscribe({
      next: (data) => {
        this.tableData = data;
        this._loading.hide();
        this._changeDetectorRef.detectChanges();  // Forzar detección de cambios
      },
    });
  }

  editProduct(value: any) {
    const refDialog = this._dialog.open(ProductEditComponent, {
      data: value.product_id,
    });
    refDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.getAllProduct();
      }
    });
  }

  deleteProduct(value: any) {
    this._loading.show();
    this._product.deleteProduct(value.product_id).subscribe({
      next: () => {
        this.getAllProduct();
        this._loading.hide();
        this._alert.success('Producto eliminado exitosamente');
      },
      error: (err) => {
        this._alert.warning(err.error);
        this._loading.hide();
      }
    });
  }

  addProduct() {
    const refDialog = this._dialog.open(ProductEditComponent, {});
    refDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.getAllProduct();
      }
    });
  }
}