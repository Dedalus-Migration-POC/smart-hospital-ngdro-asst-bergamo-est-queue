import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services, TicketDisplayInfo } from '../../services/serivces';
import { RatingComponent } from '../../components/rating/rating.component';
import { md5 } from 'js-md5';
import { FormControl, FormGroup } from '@angular/forms';
import { DesignAngularKitModule } from 'design-angular-kit';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RatingComponent, DesignAngularKitModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute,) { }
  services = inject(Services);

  //?kioskId=TI4C-71-100
  // &ticketNum=CU169
  // &hash=ab41929299365bcd2bf9d5a7e511ea0a
  formGroup = new FormGroup({
    rating: new FormControl(''),

  })


  secretKey = 'xyz456satisfactionKey!'
  data: TicketDisplayInfo | null = null
  ratingData: any
  updateDateTime: any
  error = false
  kioskId: string = ''
  hash: string = ''
  ngOnInit(): void {
    this.pollingData()
  }

  pollingData() {
    this.route.queryParams.subscribe(params => {
      this.kioskId = params['kioskId']
      this.hash = params['hash']
      this.loadTicket({
        kioskId: this.kioskId,
        ticketNum: params['ticketNum'],
        hash: this.hash
      })

      setInterval(() => {
        if (this.data && !this.data.dateEnd) {
          // const md5Hash = md5(this.secretKey + this.kioskId + this.data?.ticketNum).toUpperCase()
          this.loadTicket({ kioskId: this.kioskId, ticketNum: this.data?.ticketNum, hash: this.hash })
        }
      }, 5000)
    });
  }

  beep() {
    var snd = new Audio("https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3");
    snd.play();
  }

  async loadTicket({ kioskId, ticketNum, hash }: any) {
    try {
      const ticket = await this.services.getData(kioskId, ticketNum, hash);
      this.data = ticket
      this.updateDateTime = new Date();
      this.error = false
      if (this.data?.ticketStatus === 'CALLING') {
        this.beep()
      }
    }
    catch (err) {
      console.error(err);
      this.error = true
    }
  }

  sendRating() {
    // const md5Hash = md5(this.secretKey + this.kioskId + this.data?.ticketNum).toUpperCase()
    this.sendRatingRequest({ kioskId: this.kioskId, ticketNum: this.data?.ticketNum, rating: this.formGroup.value.rating, hash: this.hash })

  }


  async sendRatingRequest({ kioskId, ticketNum, rating, hash }: any) {
    try {
      const ratingResponse = await this.services.sendRating(kioskId, ticketNum, rating, hash);
      if (ratingResponse?.status === 201) {
        this.loadTicket({ kioskId: kioskId, ticketNum: ticketNum, hash: hash })
      }
    }
    catch (err) {
      console.error(err);
    }
  }

}





