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

  ideas = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

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
