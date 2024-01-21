import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  //encapsulation: ViewEncapsulation.Emulated,
  //encapsulation: ViewEncapsulation.None,
})
export class Comp3Component {}
