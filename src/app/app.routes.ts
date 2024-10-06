import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SolutionViewComponent } from './components/solution-view/solution-view.component';

export const routes: Routes = [
    { path: 'layers', component: MapComponent },
    { path: 'solutions', component: SolutionViewComponent },
    { path: 'home', component: MainViewComponent },
    { path: '', component: MainViewComponent }

];
