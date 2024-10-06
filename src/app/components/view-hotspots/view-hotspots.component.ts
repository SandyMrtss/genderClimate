import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-view-hotspots',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MapComponent],
  templateUrl: './view-hotspots.component.html',
  styleUrl: './view-hotspots.component.css'
})
export class ViewHotspotsComponent {

  constructor(private router: Router) { };
  
}
