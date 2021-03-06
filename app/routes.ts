import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateEventComponent
} from './events/index'
import {Error404Component} from './errors/404.component';
import {CreateSessionComponent} from "./events/event-details/create-session.component";



export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]