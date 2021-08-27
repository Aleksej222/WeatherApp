import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import * as L from 'leaflet';
import { latLng } from 'leaflet';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  data: any;
  cityName: string = ""
  city: string = "";
  val: string = "";
  temp: any;
  notFound:boolean=false;
  @ViewChild(MapComponent) mapChildComponent:MapComponent;

  constructor() { }

  ngOnInit(): void {


  }

  getCity(value: string) {
    this.cityName = value;
  }

  getData() {

    const options = {
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=7b170f75ef1d79212f0ffd4cd8af3f10`,
      params: {
        q: this.city,
        appid: '7b170f75ef1d79212f0ffd4cd8af3f10',
        id: '2172797',
        lang: 'null',
        units: 'metric',
        mode: 'xml, html'
      }
    } as AxiosRequestConfig; 

    axios.request(options).then((response) => {
      console.log(response.data);
      // console.log(response.data.main.temp)
      // console.log(response.data.weather[0].main)
      this.data=response.data;

      this.temp = response.data.main.temp
      this.temp = Math.round(this.temp);
      this.notFound=false;
      // this.mapChildComponent.chnageMapState(latLng)
      let latlng = L.latLng(response.data.coord.lat, response.data.coord.lon);
      this.mapChildComponent.changeMapState(latlng)
    }).catch(error=> {
      console.error(error);
      this.notFound=true;
      this.cityName = "";
      this.data = undefined;
    });
  }
}


// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
//   params: { q: this.city},
//   headers: {
//     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
//     'x-rapidapi-key': '820c7ac425msh13dbb5719de1020p18d635jsndea682f27101'
//   }
// } as AxiosRequestConfig; 
// axios.request(options).then( (response) => {
//   console.log(response.data);
//   console.log(response.data.location.name)
//   this.data=response.data.location;
// }).catch(function (error) {
//   console.error(error);
// });

