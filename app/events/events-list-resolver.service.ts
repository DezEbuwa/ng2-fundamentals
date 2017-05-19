import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventsListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {
        console.log(this.eventService);
    }
    resolve() {

        return this.eventService.getEvents().map(events => events)
    }
}