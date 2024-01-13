import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
export class NoteFormComponent implements OnInit, OnChanges {
  noteForm!: FormGroup;
  isEditNote: boolean = false;
  @Input() selectedNote!: INote;

  constructor(
    private _formBuilder: FormBuilder,
    private _notesService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteForm = this._formBuilder.group({
      id: 1,
      title: this._formBuilder.control('', [Validators.required]),
      content: this._formBuilder.control('', [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedNote']?.currentValue) {
      this.isEditNote = true;
      const note = changes['selectedNote'].currentValue;
      this.noteForm.patchValue(note);
    }
  }

  submitNote(): void {
    debugger;
    this.isEditNote
      ? this.updateNote()
      : this._notesService.createNote(this.noteForm.value);

    this.noteForm.reset();
  }

  updateNote() {
    this._notesService.updateNote(this.noteForm.value);
    this.isEditNote = false;
  }
}
