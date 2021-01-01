import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cyng-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() loading = false;

  @Input() dismissable = false;
  dismissed = false;

  @Input() actionLabel: string;
  @Output() action = new EventEmitter<boolean>();

  @Input() img: string;
  @Input() alt: string;

  @Input() title: string;
  @Input() expandable = false;
  expanded = false;

  constructor() { }

  ngOnInit(): void {
    if (this.img && !this.alt) {
      console.warn('cyng-card: IMAGE WITHOUT ALT TEXT!');
    }
  }

  onAction() {
    this.action.emit(true);
  }

}
