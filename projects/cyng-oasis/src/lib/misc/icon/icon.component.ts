import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cyng-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon: string | 'cross_mark' | 'dots' | 'upload' | 'info';
  @Input() fill = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
