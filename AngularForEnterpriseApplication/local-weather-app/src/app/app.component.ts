import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { CitySearchComponent } from './city-search/city-search.component'
import { FlexModule } from '@ngbracket/ngx-layout'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CitySearchComponent, CurrentWeatherComponent, FlexModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'local-weather-app'
}
