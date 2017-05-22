import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateEventComponent
} from './events/index'
import {EventsAppComponent} from './events-app.component'
import {NavbarComponent} from './nav/navbar.component'
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes'
import {RouterModule} from '@angular/router';

import {Error404Component} from './errors/404.component';


@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventsListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [ EventsAppComponent ]
})

export class AppModule{}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}