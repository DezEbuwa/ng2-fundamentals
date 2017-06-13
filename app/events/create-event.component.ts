import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from "./shared/event.service";

@Component({
    templateUrl: './app/events/create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px}
        .error input { background-color:  #E3C3C5 }
        .error ::-webkit-input-placeholder { color:  #999 }
        .error ::-moz-placeholder { color:  #999 }
        .error :-moz-placeholder { color:  #999 }
    `]
})
export class CreateEventComponent implements OnInit {
    isDirty:boolean = true;
    event:any
    constructor(private router:Router, private eventService:EventService) {
    }

    ngOnInit() {
        this.event = {
            id: 0,
            name: 'The new One',
            date: new Date('11/09/2036'),
            time: '9:00 am',
            price: 999.99,
            imageUrl: 'https://yt3.ggpht.com/-oHwtUwfxdyk/AAAAAAAAAAI/AAAAAAAAAAA/KiEjrZQdmPg/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
            location: {
                address: '555 Any St.',
                city: 'Orlando',
                country: 'USA'
            }
        }
    }

    cancel(){
        this.router.navigate(['/events'])
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.isDirty = false
        this.router.navigate(['/events'])
    }
}