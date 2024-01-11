import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { INote } from '../../interfaces/inote';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss',
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _notesService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteForm = this._formBuilder.group({
      title: this._formBuilder.control('', [Validators.required]),
      content: this._formBuilder.control('', [Validators.required]),
    });
  }

  addNote(): void {
    this._notesService.createNote(this.noteForm.value);
    this.noteForm.reset();
  }
}
