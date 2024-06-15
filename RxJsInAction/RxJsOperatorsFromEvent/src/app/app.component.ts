import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'RxJsOperatorsFromEvent';
  @ViewChild('searchBox') searchBox: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.searchBox.nativeElement, 'input').subscribe((data) => {
      console.log(data);
    });
  }
}
