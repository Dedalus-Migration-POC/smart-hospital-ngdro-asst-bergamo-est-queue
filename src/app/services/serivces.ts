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
    ticketStatus: "WAITING" | "CALLING" | "CLOSED" | "ABSENT" | "ERROR" | "TRANSFERRED"
}

@Injectable({
    providedIn: "root"
})
export class Services {

    http = inject(HttpClient);

    private readonly IS_DEV = false

    async getData(kioskId: string, ticketNum: string, hash: string): Promise<any> {
        if (this.IS_DEV) {
            const data$ =
                of(DATA_TICKET_1).pipe(delay(500),)
            const response = await firstValueFrom(data$);
            return response;
        }

        const options =
            { params: new HttpParams().set('kioskId', kioskId).set('ticketNum', ticketNum).set('hash', hash) }
        const data$ =
            this.http.get<any>(window.location.origin + '/start-ms/start/extended/display-ticketInfo', options);
        const response = await firstValueFrom(data$);
        return response;
    }

    async sendRating(kioskId: string, ticketNum: string, rating: number, hash: string): Promise<any> {
        if (this.IS_DEV) {
            const data$ =
                of(true).pipe(delay(500),)
            const response = await firstValueFrom(data$);
            return response;
        }
        const body = {
            ticketNum: ticketNum,
            rating: rating,
            kioskId: kioskId
        }

        const options =
            { params: new HttpParams().set('hash', hash) }
        const data$ =
            this.http.post<any>(window.location.origin + '/start-ms/start/extended/customer-satisfaction', body, options);
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
    ticketStatus: "WAITING",
    if: "!data.dateEnd && !data.counter && !data.dateServed"
}
export const DATA_TICKET_2 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: null,
    lastServed: 'AS117',
    rating: null,
    ticketNum: 'AS123',
    counter: '5',
    dateServed: '2025-04-16T12:00:00+02:00',
    ticketStatus: "CALLING",
    if: "data.counter && data.dateServed && !data.dateEnd"
}
export const DATA_TICKET_3 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: '2025-04-16T12:00:00+02:00',
    lastServed: 'AS117',
    rating: null,
    ticketNum: 'AS123',
    counter: null,
    dateServed: null,
    ticketStatus: "CLOSED",
    if: "data.dateEnd && !data.rating"
}
export const DATA_TICKET_4 = {
    waitingTime: 600,
    customersInQueue: 5,
    dateCreated: '2025-04-16T12:00:00+02:00',
    dateEnd: '2025-04-16T12:00:00+02:00',
    lastServed: 'AS117',
    rating: '5',
    ticketNum: 'AS123',
    counter: '5',
    dateServed: '2025-04-16T12:00:00+02:00',
    ticketStatus: "CLOSED",
    if: "data.dateEnd && data.rating"
}
