import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss',
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = [];
  taskService1: TaskService = inject(TaskService);
  taskService2: TaskService = inject(TaskService);
  taskService3: TaskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService1.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    });
    this.taskService1.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    });

    this.taskService2.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    });

    this.taskService3.CreateTask.subscribe((value) => {
      this.tasks.push(value);

      console.log(this.tasks);
    });
  }
}
