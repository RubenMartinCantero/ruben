import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
// Tampoco vamos a necesitar eventemitter ni on select
// @Output() featureSelected = new EventEmitter<string>();
//   onSelect(feature: string) {
//     this.featureSelected.emit(feature);
//   }

}
