import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { delay, firstValueFrom, of } from "rxjs";

export interface TicketDisplayInfo {
    waitingTime: number
    customersInQueue: number
    dateCreated: string
    dateEnd: string
    lastServed: string
    rating: number
    ticketNum: string
    counter: string
    dateServed: string
}

@Injectable({
    providedIn: "root"
})
export class Services {

    http = inject(HttpClient);

    private readonly IS_DEV = true

    async getData(branchId: any, queueId: any, ticketNumber: any): Promise<any> {
        if (this.IS_DEV) {
            const data$ =
                of(DATA_TICKET_1).pipe(delay(500),)
            const response = await firstValueFrom(data$);
            return response;
        }

        const options =
            { params: new HttpParams().set('branchId', branchId).set('queueId', queueId).set('ticketNumber', ticketNumber) }
        const data$ =
            this.http.get<any>(window.location.origin, options);
        const response = await firstValueFrom(data$);
        return response;
    }



}
export const DATA_TICKET_1 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: null,
    lastServed: 'AS117',
    rating: null,
    ticketNum: 'AS123',
    counter: null,
    dateServed: null,
    if: "!data.dateEnd && !data.counter && !data.dateServed"
}
export const DATA_TICKET_2 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: '2025-04-16T12:00:00+02:00',
    lastServed: 'AS117',
    rating: null,
    ticketNum: 'AS123',
    counter: null,
    dateServed: null,
    if: "data.dateEnd && !data.rating"
}
export const DATA_TICKET_3 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: '2025-04-16T12:00:00+02:00',
    lastServed: 'AS117',
    rating: '5',
    ticketNum: 'AS123',
    counter: '5',
    dateServed: '2025-04-16T12:00:00+02:00',
    if: "data.dateEnd && data.rating"
}
export const DATA_TICKET_4 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: null,
    lastServed: 'AS117',
    rating: null,
    ticketNum: 'AS123',
    counter: '5',
    dateServed: '2025-04-16T12:00:00+02:00',
    if: "data.counter && data.dateServed && !data.dateEnd"
}