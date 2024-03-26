import { ClientHttpService } from '../../lib/client';
import { FromRouteCommand, TripApi } from './api';
import { ActualTrip } from './model/actual_trip';
export declare class HttpTripClient implements TripApi {
    private baseUrl;
    private httpService;
    constructor(baseUrl: string, httpService: ClientHttpService);
    tripFromRouteV1(cmd: FromRouteCommand): Promise<ActualTrip[]>;
}
