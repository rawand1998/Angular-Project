import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdawn',
  templateUrl: './dropdawn.component.html',
  styleUrls: ['./dropdawn.component.css']
})
export class DropdawnComponent  implements OnInit  {

  constructor(private router: Router) {}
  ngOnInit(): void {}

  showOptions = false;

  @Input()
  placeholder: string | undefined;

  @Input()
  values: any;

  @Input()
  value: any;
  
  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
   this.valueChange.emit(value);
    console.log(this.value)
    this.router.navigate([`region/${value}`])
   
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
