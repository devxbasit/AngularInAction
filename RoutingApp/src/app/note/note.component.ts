import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent implements OnInit {
  noteId: any = 0;
  noteTitle: string = '';
  noteContent: string = '';

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.noteId = params.get('noteId');
    });

    this._activatedRoute.queryParamMap.subscribe((params: any) => {
      const paramsData = params['params'];
      this.noteTitle = paramsData.title;
      this.noteContent = paramsData.content;
    });
  }
}
