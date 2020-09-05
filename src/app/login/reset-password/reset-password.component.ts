import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 @Output() visible = new EventEmitter<String>();
 value: String;
  constructor() { }

  ngOnInit() {
  }

  backPage(){
     this.value = "none"
     this.visible.emit(this.value);
  }
}
