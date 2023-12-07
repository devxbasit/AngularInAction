import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  divStyle = {
    color: 'green',
    backgroundColor: 'red',
    border: '1px solid red',
  };

  divClasses = {
    border: true,
    circle: false,
    backgroundGreen: true,
    backgroundPink: false,
  };

  changeDivStyle() {
    this.divStyle.backgroundColor = 'yellow';
    this.divStyle.border = '4px solid green';

    console.log(this.divStyle);
  }

  changeDivClasses() {
    this.divClasses.backgroundGreen = !this.divClasses.backgroundGreen;
    this.divClasses.backgroundPink = !this.divClasses.backgroundPink;

    this.divClasses.circle = !this.divClasses.circle;
    this.divClasses.border = !this.divClasses.border;
  }
}
