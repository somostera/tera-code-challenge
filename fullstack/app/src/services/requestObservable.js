import { uniqueId } from '@/utils/Util.js';

export default class RequestObservable {

    constructor() {
        this.requests = new Set();
        this.observables = new Map();
    }

    watch(observable) {
        let id = uniqueId();
        this.observables.set(id, observable)
        return id;
    }
    callObservables() {
        // eslint-disable-next-line no-unused-vars
        for (var [key, value] of this.observables) {
            value(!!this.requests.size);
        }
    }

    updateRequests(id, remove) {
        if (remove) {
            this.requests.delete(id);
        } else {
            this.requests.add(id);
        }
        this.callObservables();
    }
}