import { Component, OnInit } from '@angular/core';
import { DataC} from './data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content;

  constructor(private data: DataC, private router: Router) { }

  ngOnInit() {
    this.content = this.data.getItems();
  }

  colorMe(id){
    this.router.navigate(['coloring', id]);
  }

  readMe(id){
    this.router.navigate(['details', id]);
  }
}
