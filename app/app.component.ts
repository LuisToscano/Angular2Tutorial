import {Component} from 'angular2/core';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'my-app',
	templateUrl:'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
    providers: [
	 ROUTER_PROVIDERS,
	 HeroService
    ] 
})


@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
  ,
  {
	  path: '/detail/:id',
	  name: 'HeroDetail',
	  component: HeroDetailComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
