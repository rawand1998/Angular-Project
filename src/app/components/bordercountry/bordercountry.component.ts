import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bordercountry',
  templateUrl: './bordercountry.component.html',
  styleUrls: ['./bordercountry.component.css']
})
export class BordercountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data: any

}
