import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private todoItemList$ = new BehaviorSubject<TodoItem[]>([
    {
      content: 'content',
      id: 1,
    },
  ]);

  cacheTodoItemList: TodoItem[] = [];
  constructor() {
    this.cacheTodoItemList = [
      {
        content: 'content',
        id: 1,
      },
    ]
  }

  todoItemList(): Observable<TodoItem[]> {
    return this.todoItemList$.asObservable();
  }

  addNewItem(item: TodoItem): void {
    const currentTodoItemList = this.todoItemList$.getValue();
    const updatedTodoItemList = structuredClone(currentTodoItemList);
    updatedTodoItemList.push(item);
    this.todoItemList$.next(updatedTodoItemList);
    this.cacheTodoItemList = updatedTodoItemList;
  }

  deleteItem(id: number): void {
    const currentTodoItemList = this.todoItemList$.getValue();
    const updatedTodoItemList = currentTodoItemList.filter(x => x.id !== id);
    this.todoItemList$.next(updatedTodoItemList);
  }

  filter(content: string): void {
    if (!content) {
      const currentTodoItemList = this.todoItemList$.getValue();
      const filterTodoItemList = currentTodoItemList.filter(x => x.content.includes(content));
      this.todoItemList$.next(filterTodoItemList);
    } else {
      this.todoItemList$.next(this.cacheTodoItemList);
    }
  }


}
