import { Component } from '@angular/core';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';

}


// fetch("https://weatherapi-com.p.rapidapi.com/timezone.json?q=%3CREQUIRED%3E", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
// 		"x-rapidapi-key": "820c7ac425msh13dbb5719de1020p18d635jsndea682f27101"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });