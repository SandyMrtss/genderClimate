import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LayerComponent } from '../layer/layer.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [RouterModule, RouterOutlet, LayerComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

  constructor(private router: Router) { };

}
