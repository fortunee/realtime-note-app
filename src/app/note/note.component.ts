import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  socket;
  noteList;
  constructor(private http: HttpClient) {
    this.socket = socketIo();
  }

  ngOnInit() {
    this.getNotes();
    this.socket.on('newNote', () => {
        this.getNotes();
      });
  }

  createNote(note) {
    this.http.post('/api/note', { content: note})
      .subscribe();
  }

  getNotes() {
    this.http.get('/api/note')
      .subscribe((notes) => {
        this.noteList = notes;
      });
  }

}
