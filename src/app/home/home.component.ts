import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
backgroundColorToggle = '#77777';
  upcomingCampaignData: { Date: string; days: string; Date1: Date; Campaign: string; image: string; location: string; pricing: string; }[];
  constructor() {
  }

  ngOnInit() {
    const day0 = new Date('2019-10-04');
    const day1 = new Date('2019-10-11');
    const day2 = new Date('2019-10-18');
    const day3 = new Date('2019-10-25');
    const day4 = new Date('2019-11-01');
    this.upcomingCampaignData = [
      // tslint:disable-next-line:max-line-length
      {Date: '2019-10-04', days: '', Date1: day0, Campaign: 'Test whatsapp', image: '../../assets/images/whatsapp.png', location: 'US', pricing: '200$'},
      // tslint:disable-next-line:max-line-length
      {Date: '2019-10-11', days: '', Date1: day1, Campaign: 'Test facebook', image: '../../assets/images/facebook.png', location: 'UK', pricing: '400$'},
      // tslint:disable-next-line:max-line-length
      {Date: '2019-10-18', days: '', Date1: day2, Campaign: 'Test twitter', image: '../../assets/images/twitter.png', location: 'CA, FR', pricing: '600$'},
      // tslint:disable-next-line:max-line-length
      {Date: '2019-10-25', days: '', Date1: day3, Campaign: 'Test linkedin', image: '../../assets/images/linkedin.png', location: 'FR', pricing: '800$'},
      // tslint:disable-next-line:max-line-length
      {Date: '2019-11-01', days: '', Date1: day4, Campaign: 'Test youtube', image: '../../assets/images/youtube.png', location: 'JP', pricing: '100$'},
    ];
    this.addDays(this.upcomingCampaignData);
    console.log(new Date());
  }
  priceClick(value1, value2) {
    const newValue = 'pricing' + value1;
    document.getElementById(newValue).innerHTML = value2;
  }
  addEvent(value1, value2) {
    console.log(value2);
    const newDate = 'date' + value1;
    const newDay = 'days' + value1;
    const date1 = value2.target.value;
    const date2 = new Date();
    document.getElementById(newDate).innerHTML = date1.toLocaleDateString();
    const diff = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    document.getElementById(newDay).innerHTML = diffDays.toString();
  }
  addDays(data) {
    const date2 = new Date();
    for (let i = 0; i < data.length; i++) {
      const date1 = data[i].Date1;
      const diff = Math.abs(date1.getTime() - date2.getTime());
      const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      data[i].days = diffDays;
    }
    console.log(this.upcomingCampaignData);
  }
}
