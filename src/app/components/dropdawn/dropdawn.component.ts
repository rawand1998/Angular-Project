import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-dropdawn',
  templateUrl: './dropdawn.component.html',
  styleUrls: ['./dropdawn.component.css']
})
export class DropdawnComponent  {


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
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
