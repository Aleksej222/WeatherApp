import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  constructor() { }
  data:any;

  ngOnInit(): void {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
      params: { q: "Paris" },
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': '820c7ac425msh13dbb5719de1020p18d635jsndea682f27101'
      }
    } as AxiosRequestConfig;

    axios.request(options).then( (response) => {
      console.log(response.data);
      console.log(response.data.location.name)
      this.data=response.data.location;
    }).catch(function (error) {
      console.error(error);
    });

  }

}
