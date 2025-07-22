import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from '../../services/serivces';
import { RatingComponent } from '../../components/rating/rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute,) { }
  services = inject(Services);

  //branchId=45&queueId=12&ticketNumber=CA455&hash=md5
  branchId: any
  queueId: any
  ticketNumber: any

  data: any
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.loadCourses(params['branchId'], params['queueId'], params['ticketNumber'])
      // setInterval(() => this.loadCourses(params['branchId'], params['queueId'], params['ticketNumber']), 5000);

    });
  }

  async loadCourses(branchId: any, queueId: any, ticketNumber: any) {
    try {
      const ticket = await this.services.getData(branchId, queueId, ticketNumber);
      this.data = ticket
    }
    catch (err) {
      console.error(err);
    }
  }

}





