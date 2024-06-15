import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  newTask: string = '';
  taskService: TaskService = inject(TaskService);

  addTask() {
    this.taskService.onCreateTask(this.newTask);
  }
}
