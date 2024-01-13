import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() selectedNote = new EventEmitter<INote>();

  constructor(private _notesService: NoteService) {}

  ngOnInit(): void {
    this._notesService.getNotesObservable().subscribe((notes) => {
      this.notes = notes;
    });
  }

  editNote(note: INote): void {
    this.selectedNote.emit(note);
  }

  deleteNote(noteId: number): void {
    this._notesService.deleteNote(noteId);
  }
}
