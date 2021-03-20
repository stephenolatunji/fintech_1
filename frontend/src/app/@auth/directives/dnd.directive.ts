import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @Output() onFileDropped = new EventEmitter<any>();
<<<<<<< HEAD
	
  // @HostBinding('style.background-color') private background = '#f5fcff'
  @HostBinding('style.opacity') private opacity = '1'
	
=======

  // @HostBinding('style.background-color') private background = '#f5fcff'
  @HostBinding('style.opacity') private opacity = '1'

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '0.25'
  }
<<<<<<< HEAD
	
=======

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1'
  }
<<<<<<< HEAD
	
=======

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1'
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }

}
