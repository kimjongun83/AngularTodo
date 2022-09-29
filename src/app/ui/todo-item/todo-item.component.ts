import { StorageService } from './../../services/storage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-item[item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem;
  isEdit = false;
  newContent!: string;
  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.newContent = this.item.content;
  }

  onDelete(): void {
    this.storageService.deleteItem(this.item.id);
  }
}
