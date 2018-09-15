import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteList = ['Sample note one', 'Sample note two'];
  constructor() { }

  ngOnInit() {
  }

  createNote(value) {
    this.noteList.push(value);
  }

}
