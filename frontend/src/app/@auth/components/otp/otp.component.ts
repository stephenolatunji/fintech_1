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
    document.getElementById('box1').style.border = '4px solid #26474E'
  }

  inputFunc(event, x) {
    if (x == 1 && this.input.one !== null && event.key !== 'Backspace') {
      this.input.one = event.target.value.toString()[event.target.value.toString().length - 1];
      this.two.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box2').style.border = '4px solid #26474E'
    }
    else if (x == 1 && this.input.one == null && event.key == 'Backspace') {
      this.input.one = null;
      this.one.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box1').style.border = '4px solid #26474E'
    }
    if (x == 2 && this.input.two !== null && event.key !== 'Backspace') {
      this.input.two = event.target.value.toString()[event.target.value.toString().length - 1];
      this.three.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box3').style.border = '4px solid #26474E'
    }
    else if (x == 2 && this.input.two == null && event.key == 'Backspace') {
      // this.input.one = null;
      this.one.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box1').style.border = '4px solid #26474E'
    }
    if (x == 3 && this.input.three !== null && event.key !== 'Backspace') {
      this.input.three = event.target.value.toString()[event.target.value.toString().length - 1];
      this.four.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box4').style.border = '4px solid #26474E'
    }
    else if (x == 3 && this.input.three == null && event.key == 'Backspace') {
      // this.input.two = null;
      this.two.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box2').style.border = '4px solid #26474E'
    }
    if (x == 4 && this.input.four !== null && event.key !== 'Backspace') {
      this.input.four = event.target.value.toString()[event.target.value.toString().length - 1];
      this.four.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box4').style.border = '4px solid #26474E'
    }
    else if (x == 4 && this.input.four == null && event.key == 'Backspace') {
      // this.input.three = null;
      this.three.nativeElement.focus();
      // set border default
      this.setDefault();
      document.getElementById('box3').style.border = '4px solid #26474E'
    }
   
  }

  setDefault() {
    document.getElementById('box1').style.border = '1px solid #26474E'
    document.getElementById('box2').style.border = '1px solid #26474E'
    document.getElementById('box3').style.border = '1px solid #26474E'
    document.getElementById('box4').style.border = '1px solid #26474E'
  }

}
