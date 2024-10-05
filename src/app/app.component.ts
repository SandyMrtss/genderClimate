import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { LayerComponent } from './components/layer/layer.component';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from "./components/map/map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayerComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private map!: L.Map;
  private markersLayer!: L.LayerGroup;
  private circleLayer!: L.LayerGroup;
  markersLayerActive: boolean = true;
  circleLayerActive: boolean = true;

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([0.00, 0.00], 1.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.initLayers();
  }

  private initLayers(): void {
    this.markersLayer = L.layerGroup().addTo(this.map);
    this.circleLayer = L.layerGroup().addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.markersLayer)
      .bindPopup('A sample marker!')
      .openPopup();

    L.marker([51.51, -0.1]).addTo(this.markersLayer)
      .bindPopup('Another marker!');

    L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.circleLayer);
  }

  toggleMarkersLayer(active: boolean): void {
    this.markersLayerActive = active;
    if (active) {
      this.map.addLayer(this.markersLayer);
    } else {
      this.map.removeLayer(this.markersLayer);
    }
  }

  toggleCircleLayer(active: boolean): void {
    this.circleLayerActive = active;
    if (active) {
      this.map.addLayer(this.circleLayer);
    } else {
      this.map.removeLayer(this.circleLayer);
    }
  }

  
}