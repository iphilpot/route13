import { JobId, JobType, LocationId, SimTime } from '../types';
import { OutOfServiceJob, OutOfServiceJobState, } from '../types';
import { TransferJob, TransferJobState, } from '../types';

export class JobFactory {
    nextId: JobId;

    constructor() {
        this.nextId = 0;
    }

    outOfService(suspendLocation: LocationId, suspendTime: SimTime, resumeTime: SimTime) {
        return  {
            id: this.nextId++,
            type: JobType.OUT_OF_SERVICE,
            assignedTo: null,
    
            state: OutOfServiceJobState.BEFORE_BREAK,
            suspendLocation,
            suspendTime,
            resumeTime
        } as OutOfServiceJob;
    }
    
    transfer(
        quantity: number,
        pickupLocation: LocationId,
        pickupAfter: SimTime,
        dropoffLocation: LocationId,
        dropoffBefore: SimTime
    ) {
        return {
            id: this.nextId++,
            type: JobType.TRANSFER,
            assignedTo: null,
    
            state: TransferJobState.BEFORE_PICKUP,
            quantity,
            pickupLocation,
            pickupAfter,
            dropoffLocation,
            dropoffBefore
        } as TransferJob;   
    }
}