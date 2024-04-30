import { Component } from '@angular/core';
import { IDeactivatedComponent } from '../../interface/can-deactivate';
import { identifierName } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements IDeactivatedComponent {

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }


}
