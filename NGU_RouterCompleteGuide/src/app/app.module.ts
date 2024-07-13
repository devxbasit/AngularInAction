import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseCardsComponent } from './components/course-cards/course-cards.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';
import { BrowserModule } from '@angular/platform-browser';
import { CourseCategoryComponent } from './components/course-category/course-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseCardsComponent,
    NotFound404Component,
    SideMenuComponent,
    CourseCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
