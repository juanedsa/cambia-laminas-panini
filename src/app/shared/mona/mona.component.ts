import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mona',
  templateUrl: './mona.component.html',
  styleUrls: ['./mona.component.scss']
})
export class MonaComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
