import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Commit } from '../commit';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

  @Input() commitHistory:Commit[] = [];
  @Input() repositoryName:string = '';
  @Input() listTemplate!:TemplateRef<any>;

}
