import { Component, Input, inject, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoChildComponent } from '../producto-child/producto-child.component';

@Component({
  selector: 'app-producto-detail',
  standalone: true,
  imports: [ProductoChildComponent],
  templateUrl: './producto-detail.component.html',
  styleUrl: './producto-detail.component.scss'
})
export class ProductoDetailComponent {
  @Input('id') id : string = '1';

  public pid :string | null =  '';

  public cambio : string = '' ;
  private route  = inject(ActivatedRoute);
  
  cambiar(){
    console.log(11);
    this.cambio =  (this.cambio === '1')? 'dos': '1';
  }

  ngOnInit(){
    // console.log("init");
    this.pid = this.route.snapshot.params?.['id'];
  }

  ngOnChanges(){
    // console.log("chang");

  }


  ngOnDestroy(){
    // console.log("destroid");

  }

}
