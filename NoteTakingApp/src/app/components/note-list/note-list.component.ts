import { Component, OnInit } from '@angular/core';
import { INote } from '../../interfaces/inote';
import { CommonModule, NgIfContext } from '@angular/common';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
})
export class NoteListComponent implements OnInit {
  notes: INote[] = [];

  constructor(private _notesService: NoteService) {}

  ngOnInit(): void {
    this._notesService.getNotesObservable().subscribe((notes) => {
      this.notes = notes;
    });
  }

  editNote(): void {}

  deleteNote(): void {}
}
