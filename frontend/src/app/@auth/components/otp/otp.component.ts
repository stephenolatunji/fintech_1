import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  confirmViaEmail: boolean = false;
  input = {
    one: null, two: null, three: null, four: null
  }

  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  inputFunc(event, x) {
    console.log(this.input.two)
    if (x == 1 && this.input.one !== null && event.key !== 'Backspace') {
      this.input.one = event.target.value.toString()[event.target.value.toString().length - 1];
      this.two.nativeElement.focus()
    }
    else if (x == 1 && this.input.one == null && event.key == 'Backspace') {
      this.input.one = null;
      this.one.nativeElement.focus()
    }
    if (x == 2 && this.input.two !== null && event.key !== 'Backspace') {
      this.input.two = event.target.value.toString()[event.target.value.toString().length - 1];
      this.three.nativeElement.focus()
    }
    else if (x == 2 && this.input.two == null && event.key == 'Backspace') {
      // this.input.one = null;
      this.one.nativeElement.focus()
    }
    if (x == 3 && this.input.three !== null && event.key !== 'Backspace') {
      this.input.three = event.target.value.toString()[event.target.value.toString().length - 1];
      this.four.nativeElement.focus();
    }
    else if (x == 3 && this.input.three == null && event.key == 'Backspace') {
      // this.input.two = null;
      this.two.nativeElement.focus()
    }
    if (x == 4 && this.input.four !== null && event.key !== 'Backspace') {
      this.input.four = event.target.value.toString()[event.target.value.toString().length - 1];
      this.four.nativeElement.focus()
    }
    else if (x == 4 && this.input.four == null && event.key == 'Backspace') {
      // this.input.three = null;
      this.three.nativeElement.focus()
    }
    console.log(this.input.four)
  }

}
