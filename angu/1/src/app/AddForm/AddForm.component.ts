import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  nameForm = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(''),
    score: new FormControl(''),

  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.nameForm.value);
  }
}


