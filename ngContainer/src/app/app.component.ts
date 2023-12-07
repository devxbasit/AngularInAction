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
  title = 'ngContainer';
  isDataProcessed = true;
  clients = [
    { name: 'client 1', paid: true },
    { name: 'client 2', paid: false },
    { name: 'client 3', paid: true },
    { name: 'client 4', paid: false },
  ];
}
