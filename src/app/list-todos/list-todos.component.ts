import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date,
  ){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,DatePipe,UpperCasePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent implements OnInit{

  todos =[
    new Todo(1,'Learn to Dance',false ,new Date()),
    new Todo(2,'Become an expert in singing',false ,new Date()),
    new Todo(1,'Visit India',false ,new Date()),
   
  ]
  // todo={
  //   id :1 ,
  //   description :'Learn to Dance'
  // };

  ngOnInit() {
   
  }

}
