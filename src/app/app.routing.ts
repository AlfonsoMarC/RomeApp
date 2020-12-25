// Import modules from angular router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FpwComponent } from './components/fpw/fpw.component';
import { FpwMap1Component } from './components/fpw-map1/fpw-map1.component';
import { FpwMap2Component } from './components/fpw-map2/fpw-map2.component';
import { FpwMap3Component } from './components/fpw-map3/fpw-map3.component';
import { FpwBattle1Component } from './components/fpw-battle1/fpw-battle1.component';
import { SpwComponent } from './components/spw/spw.component';
import { TpwComponent } from './components/tpw/tpw.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'firstpunicwar', component: FpwComponent,
		children: [   // Nested Routes
			{ path: '', component: FpwMap1Component},
			{ path: 'maps', component: FpwMap1Component},
			{ path: 'maps/map2', component: FpwMap2Component },
			{ path: 'maps/map3', component: FpwMap3Component },
			{ path: 'battles', component: FpwBattle1Component },
			{ path: 'battles/battle1', component: FpwBattle1Component }]
	},
	{ path: 'secondpunicwar', component: SpwComponent },
	{ path: 'thirdpunicwar', component: TpwComponent },
	{ path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
