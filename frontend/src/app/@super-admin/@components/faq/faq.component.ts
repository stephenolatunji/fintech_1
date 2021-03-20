import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
<<<<<<< HEAD
  addFaq : boolean = false; faqs; newFaq = {answer: '', question: '', staffId: localStorage.getItem('staffId')}
=======
  addFaq: boolean = false; faqs; newFaq = { answer: '', question: '', staffId: localStorage.getItem('staffId') }
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.getFaqs()
  }

  getFaqs() {
<<<<<<< HEAD
    this.server.getAllFaq().subscribe(dat=>{
=======
    this.server.getAllFaq().subscribe(dat => {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.faqs = dat.entity
    })
  }

<<<<<<< HEAD
  handleMore(){
=======
  handleMore() {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    alert()
  }

  handleOpenAddFaq() {
    this.addFaq = true;
  }

  back() {
    this.addFaq = false;
  }

  handleAddFaq() {
<<<<<<< HEAD
    this.server.addNewFaq(this.newFaq).subscribe(dat=>{console.log(dat)
      if(dat.succeeded) {
=======
    this.server.addNewFaq(this.newFaq).subscribe(dat => {
      console.log(dat)
      if (dat.succeeded) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

      }
      else {

      }
    })
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
