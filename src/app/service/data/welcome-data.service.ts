import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  private apiUrl = 'http://localhost:8080/hello-world-bean';
  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(this.apiUrl);
  }

  executeHelloWorldServicewithParameter(username: string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${username}`);
  }

}
