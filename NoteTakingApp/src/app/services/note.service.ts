import { Injectable, OnInit } from '@angular/core';
import { INote } from '../interfaces/inote';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService implements OnInit {
  private notes: INote[] = [];
  private notesSubject: BehaviorSubject<INote[]> = new BehaviorSubject<INote[]>(
    []
  );

  ngOnInit(): void {}

  constructor() {}

  createNote(note: INote): void {
    note.id = new Date().getTime();
    this.notes.push(note);
    this.notesSubject.next(this.notes);
  }

  getNotesObservable(): Observable<INote[]> {
    return this.notesSubject.asObservable();
  }

  deleteNote(noteId: number): void {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    this.notesSubject.next(this.notes);
  }

  updateNote(updatedNote: INote) {
    debugger;
    const index = this.notes.findIndex((note) => note.id === updatedNote.id);

    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.notesSubject.next(this.notes);
    }
  }
}
