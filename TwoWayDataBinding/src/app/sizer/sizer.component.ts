import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  standalone: true,
  imports: [],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.scss'
})
export class SizerComponent {

  @Input() size: number = 0;
  @Output() sizeChange = new EventEmitter<number>()


  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size += delta
    this.sizeChange.emit(this.size);
  }

}
