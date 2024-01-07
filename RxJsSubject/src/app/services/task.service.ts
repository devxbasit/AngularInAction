import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // sender(publisher)  -> service -> receiver(subscribers)

  // using eventEmitter
  // CreateTask: EventEmitter<string> = new EventEmitter<string>();
  // onCreateTask(value: string) {
  //   this.CreateTask.emit(`${value} - ${Math.random()}`);
  // }

  //using Subject
  CreateTask: Subject<string> = new Subject<string>();
  onCreateTask(value: string) {
    this.CreateTask.next(`${value} - ${Math.random()}`);
  }
}
