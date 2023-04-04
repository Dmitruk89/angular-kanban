import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column-field',
  templateUrl: './column-field.component.html',
  styleUrls: ['./column-field.component.scss'],
})
export class ColumnFieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  columns: string[] = ['ideas', 'todo', 'in progress', 'done'];

  ideas: string[] = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];
  todo: string[] = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];
  inProgress = [];
  done = [];

  getListData(name: string): string[] {
    switch (name) {
      case 'ideas':
        return this.ideas;
      case 'todo':
        return this.todo;
      case 'in progress':
        return this.inProgress;
      case 'done':
        return this.done;
      default:
        return [];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
