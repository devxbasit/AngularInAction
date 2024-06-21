import { Injectable } from '@angular/core';
import { mockIssues } from '../../assets/mock-issues';
import { Issue } from '../interfaces/issue';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = mockIssues;

  constructor() {}

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date(),
    };
    const index = this.issues.findIndex((i) => i === issue);
    this.issues[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    title = title.toLowerCase();
    if (title.length > 3) {
      return this.issues.filter((issue) => issue.title.toLowerCase().indexOf(title) !== -1);
    }
    return [];
  }
}
