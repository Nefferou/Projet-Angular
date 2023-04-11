import { Component, EventEmitter, OnChanges, Output } from '@angular/core';
import { Input,} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() mySearch!: String;
  @Output() mySearchChange = new EventEmitter<String>();

  value: String = '';

  onSearch(e: any) {
    this.mySearch = e.target.value;
    this.mySearchChange.emit(this.mySearch);
  }

  suppSearch() {
    this.mySearch = "";
    this.mySearchChange.emit(this.mySearch);
  }
}
