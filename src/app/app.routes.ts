import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { LayerComponent } from './components/layer/layer.component';
import { ViewHotspotsComponent } from './components/view-hotspots/view-hotspots.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SolutionViewComponent } from './components/solution-view/solution-view.component';

export const routes: Routes = [
    { path: 'layers', component: ViewHotspotsComponent },
    { path: 'solutions', component: SolutionViewComponent },
    { path: 'home', component: MainViewComponent },
    { path: '', component: MainViewComponent }


];
