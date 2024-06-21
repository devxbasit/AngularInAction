import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueForm } from 'src/app/interfaces/IssueForm';
import { Issue } from 'src/app/interfaces/issue';
import { IssuesService } from 'src/app/service/issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  @Output() formClose = new EventEmitter();

  issueForm: FormGroup<IssueForm>;
  issueService = inject(IssuesService);

  suggestions: Issue[] = [];

  constructor(fb: FormBuilder) {
    this.issueForm = fb.nonNullable.group({
      title: fb.nonNullable.control('', [Validators.required]),
      description: fb.nonNullable.control('', [Validators.required]),
      priority: fb.nonNullable.control('', [Validators.required]),
      type: fb.nonNullable.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.issueForm.controls.title.valueChanges.subscribe((title) => {

      this.suggestions = this.issueService.getSuggestions(title);
      console.log(`suggestions ${title}`, this.suggestions);
    });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }
}
