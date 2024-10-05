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
  @Input() name!: string;
  @Input() active: boolean = false;
  @Output() layerToggle = new EventEmitter<boolean>();

  toggleLayer() {
    this.active = !this.active;
    this.layerToggle.emit(this.active);
  }
}