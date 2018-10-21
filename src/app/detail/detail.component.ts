import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataC} from '../content/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data;
  constructor(private route: ActivatedRoute, private _data: DataC) {
  }

  ngOnInit() {
    this.data = this._data.getItems()[this.route.snapshot.params['id']];
  }

}
