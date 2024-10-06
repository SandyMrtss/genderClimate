import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-solution-view',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './solution-view.component.html',
  styleUrl: './solution-view.component.css'
})
export class SolutionViewComponent {
  constructor(private router: Router) { };
}
