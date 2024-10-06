import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layer.component.html',
  styleUrl: './layer.component.css'
})

export class LayerComponent implements OnInit {

  private markersLayer!: L.LayerGroup;
  private map!: L.Map;

  constructor(private router: Router) { };

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([30, 0.00], 1.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 7,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.addMarkers(this.map);
  }

  public addMarkers(map: L.Map): L.Map {

    this.markersLayer = L.layerGroup().addTo(map);

    L.marker([7.8731, 80.7718]).addTo(this.markersLayer);

    const popupContentKatrina = `<div style="max-width: 200px; max-height: 200px; overflow-y: auto; padding-bottom: 20px"> 
    <h5> Hurricane Katrina </h5> 
    <p> <b>49% of all fatalities</b> were poor women over 75. They were less able to evacuate due to limited resources, health issues, and social isolation <p>
    <button id="redirectKatrina" type="button" class="btn btn-outline-info btn-sm" style="position: absolute; bottom: 10px; margin-top: 40px;">Learn more</button>
    </div>`;

    const marker1 = L.marker([30.211, -89.162]).addTo(this.markersLayer)
      .bindPopup(popupContentKatrina);
 
    marker1.on('popupopen', () => {
      const button = document.getElementById('redirectKatrina');
      if (button) {
        button.onclick = () => {
          window.open('https://iwpr.org/women-disasters-and-hurricane-katrina/', '_blank'); // Redirects to the specified URL
        };
      }
    });

    const popupContentBangladesh = `<div style="max-width: 200px; max-height: 200px; overflow-y: auto;"> 
    <h5> Bangladesh Floodings </h5> 
    <img src="/assets/img/bangladesh.JPG" style="width: 100%; height: auto;"/> 
    <p>In 1991, during cyclone disasters, <b>90%</b> of the 140,000 people who died were women because they were not taught how to swim. </p> 
    </div>`;
    L.marker([23.68, 90.35]).addTo(this.markersLayer).bindPopup(popupContentBangladesh);

    L.marker([13.736, 100.523]).addTo(this.markersLayer);
    L.marker([1.286, 36.8219]).addTo(this.markersLayer);
    L.marker([-11.95,-75.6]).addTo(this.markersLayer);
    L.marker([17, -96]).addTo(this.markersLayer);
    L.marker([32.9, -7.9]).addTo(this.markersLayer);
    L.marker([-17, 45.5]).addTo(this.markersLayer);
    L.marker([32.6, 79]).addTo(this.markersLayer);
    L.marker([30.6, 21.5]).addTo(this.markersLayer);

    L.marker([15.25, 29.86]).addTo(this.markersLayer);
    L.marker([-5.8,107.6]).addTo(this.markersLayer);
    L.marker([14.7,121.54]).addTo(this.markersLayer);
    L.marker([2.38,19.94]).addTo(this.markersLayer);
    L.marker([5.35, -76.31]).addTo(this.markersLayer)

    return map;
  }


}