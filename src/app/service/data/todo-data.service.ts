import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private apiUrl = 'http://localhost:8080/users/';
  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username : String){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  retrieveTodo(username : String, id : number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username : String, id : number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }   

  updateTodo(username : String, id : number, todo : Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
  
  createTodo(username : String, todo : Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
