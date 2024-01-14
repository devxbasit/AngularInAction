import { Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutProjectsComponent } from './about-projects/about-projects.component';
import { AboutSponsorsComponent } from './about-sponsors/about-sponsors.component';

export const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'payments', redirectTo: '/notes', pathMatch: 'full' },

  { path: 'home', title: 'home', component: HomeComponent },
  { path: 'notes/:noteId', title: 'note with id', component: NoteComponent },
  { path: 'notes', title: 'note', component: NotesComponent },
  { path: 'notes/:noteId', title: 'note with id', component: NoteComponent },
  {
    path: 'about',
    title: 'about',
    component: AboutComponent,

    children: [
      {
        path: 'about-projects',
        title: 'projects',
        component: AboutProjectsComponent,
      },
      {
        path: 'about-sponsors',
        title: 'sponsors',
        component: AboutSponsorsComponent,
      },
    ],
  },

  {
    path: '**',
    title: '404 - page not found',
    component: NotFoundComponent,
  },
];
