import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentTab = '';
  data = '';
  MccMnc = '';
  isDataArrived = false;

  loadPage(pageName: any) {
    this.currentTab = pageName;
  }
  setMccMnc(event: any) {
    this.MccMnc = event.target.value;
  }

  getDataFromServer() {
    setTimeout(() => {
      this.data = 'Data from server';
      this.isDataArrived = true;
    }, 1000);
  }
}
