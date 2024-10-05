import { Component, Input, Output, EventEmitter } from '@angular/core';
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


  public addMarkers(map: L.Map): L.Map{
    this.markersLayer = L.layerGroup().addTo(map);

    L.marker([0,0]).addTo(this.markersLayer)
      .bindPopup('holi')
      .openPopup();
    return map;
  }
}