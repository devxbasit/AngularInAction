import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MccMncService } from './services/mcc-mnc.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private _mccMncService: MccMncService;
  constructor(private mccMncService: MccMncService) {
    this._mccMncService = mccMncService;
  }

  getMccMnc() {

    return this._mccMncService.getMccMnc();

  }
  title = 'DependencyInjectionAndServices';
}
