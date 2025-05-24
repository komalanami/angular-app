import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: String) {
    return this.http.get<Todo[]>(`${API_URL}${username}/todos`);
  }

  retrieveTodo(username: String, id: number) {
    return this.http.get<Todo>(`${API_URL}${username}/todos/${id}`);
  }

  deleteTodo(username: String, id: number) {
    return this.http.delete(`${API_URL}${username}/todos/${id}`);
  }

  updateTodo(username: String, id: number, todo: Todo) {
    return this.http.put(`${API_URL}${username}/todos/${id}`, todo);
  }

  createTodo(username: String, todo: Todo) {
    return this.http.post(`${API_URL}${username}/todos`, todo);
  }
}
