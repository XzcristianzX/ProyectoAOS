import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto-child',
  standalone: true,
  imports: [],
  templateUrl: './producto-child.component.html',
  styleUrl: './producto-child.component.scss'
})
export class ProductoChildComponent {
  @Input() productoChild :string = '';


  ngOnInit(){
    console.log("iniciando");
  }

  ngOnChanges(){
    console.log("CAmbiando");

  }

  ngOnDestroy(){
    console.log("destruir");

  }
}
