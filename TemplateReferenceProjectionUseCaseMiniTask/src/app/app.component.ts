import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Commit } from './commit';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'TemplateReferenceProjectionUseCaseMiniTask';
  repositoryName="AngularInAction"

  commitHistory: Commit[]= []

  commitHandler(name:string, commitMessage:string) {

    this.commitHistory.push({name:name, commitMessage:commitMessage, dateTime:new Date()});

    console.log(this.commitHistory);

  }
  
}
