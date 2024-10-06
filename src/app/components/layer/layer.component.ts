import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layer.component.html',
  styleUrl: './layer.component.css'
})

export class LayerComponent {

  private markersLayer!: L.LayerGroup;

  public addMarkers(map: L.Map): L.Map {

    this.markersLayer = L.layerGroup().addTo(map);

    L.marker([23.68590, 90.3563]).addTo(this.markersLayer)
      .bindPopup('Bangladesh');

    L.marker([7.8731, 80.7718]).addTo(this.markersLayer)
      .bindPopup('.');

    L.marker([30.211, -89.162]).addTo(this.markersLayer)
      .bindPopup('.');

    L.marker([13.736, 100.523]).addTo(this.markersLayer)
      .bindPopup('.');

    L.marker([1.286, 36.8219]).addTo(this.markersLayer)
      .bindPopup('.');

    return map;
  }


}