import { Component, ViewChild } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  title = 'weather-application';
  weatherData: any;
  cityName: string="Shimla";
  @ViewChild('city') cityValue:any;

  onSubmit(formData: any)
  {
    this.cityName=formData;
    this.getWeatherData(formData.city);
    this.clearInput();
  }

  constructor(private weatherService: WeatherService)
  {
    this.getWeatherData(this.cityName);
  }

  clearInput()
  {
    this.cityValue.nativeElement.value = '';
  }

  private getWeatherData(city: string)
    {
      this.weatherService.getWeatherData(city).subscribe(data =>{
        console.log(data);
        this.weatherData = data;
        
      });
    }
}