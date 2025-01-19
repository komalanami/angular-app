import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../models/todo.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,DatePipe,UpperCasePipe,HttpClientModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent implements OnInit{

  todos : Todo[] =[]
  //   new Todo(1,'Learn to Dance',false ,new Date()),
  //   new Todo(2,'Become an expert in singing',false ,new Date()),
  //   new Todo(1,'Visit India',false ,new Date()),
   
  // ]
  // todo={
  //   id :1 ,
  //   description :'Learn to Dance'
  // };

  constructor(private todoservice:TodoDataService){}

  ngOnInit() {
   this.todoservice.retrieveAllTodos('Shan').subscribe({
    next :response =>{
      console.log(response);
      this.todos=response;
    },
   }
   );
  }

}
