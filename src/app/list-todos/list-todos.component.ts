import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../models/todo.model';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,DatePipe,UpperCasePipe,HttpClientModule],
  providers: [TodoDataService],
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

  constructor(private todoservice:TodoDataService ,private router :Router ){}

  ngOnInit() {
   this.todoservice.retrieveAllTodos('shan').subscribe({
    next :response =>{
      console.log(response);
      this.todos=response;
    },
   }
   );
  }

  onupdate(id:number) {
    console.log('Update clicked',id);
    this.router.navigate(['todos',id]);
  }

  ondelete(id:number) {
    console.log('Delete clicked');
  }

}
