import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../models/todo.model';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, DatePipe, UpperCasePipe, HttpClientModule],
  providers: [TodoDataService],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message : String = '';

  constructor(private todoservice: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.todoservice.retrieveAllTodos('shan').subscribe({
      next: response => {
        console.log(response);
        this.todos = response;
      },
    });
  }

  onupdate(id: number) {
    console.log('Update clicked', id);
    this.router.navigate(['todos', id]);
  }

  ondelete(id: number) {
    console.log(`delete todo ${id}`)
    this.todoservice.deleteTodo('shan', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful!`;
        console.log(response);
        this.refreshTodos();
      }
    )
  }

  addTodo() {
    console.log('Add clicked');
    this.router.navigate(['todos', -1]);
  }

  refreshTodos() {
    this.todoservice.retrieveAllTodos('shan').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
