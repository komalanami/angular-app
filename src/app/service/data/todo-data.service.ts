import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private apiUrl = 'http://localhost:8080/hello-world-bean';
  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username : String){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

}
