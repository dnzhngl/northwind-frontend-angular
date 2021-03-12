import { HttpClient} from '@angular/common/http';  //bunun vasıtasıyla bir backende istekte bulunabiliyoruz, backendteki dataya ulaşabiliyoruz.. React'ta axios, fetch vb.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl="https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient:HttpClient) { }

  
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl); 
  } 
}