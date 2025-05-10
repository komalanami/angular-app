import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../models/todo.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  imports:[FormsModule,HttpClientModule , DatePipe],
  providers: [TodoDataService],
  styleUrls: ['./todo.component.scss'],
  standalone:true
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo; 
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router :Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id) {
      this.todoService.retrieveTodo('shan', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    if (this.id) {
      this.todoService.updateTodo('shan', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoService.createTodo('shan', this.todo).subscribe(
        response => console.log('Todo created', response)
      );
    }
  }
}
