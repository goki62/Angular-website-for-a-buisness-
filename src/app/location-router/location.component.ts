import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  
 
  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyChxI5OizoRQm9NqHfeNCv1qzKYVa3LGeA'
    })

    loader.load().then(() =>{
      new google.maps.Map(document.getElementById("map")!,{
        center:{lat: 41.995074, lng:21.422178},
        zoom: 17
      })
    })
   
  }

}
