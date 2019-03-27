import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  public clickedEvent: Event;
  addTolist(event: Event) {
    this.clickedEvent = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
