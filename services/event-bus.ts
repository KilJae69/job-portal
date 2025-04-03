export type AuthEventData = {
    message?: string;
    redirectUrl?: string;
};

export type EventTypes = {
    'auth:sessionExpired': AuthEventData;
    'auth:error': AuthEventData;
    [key: string]: any;
};

export type EventCallback<T = any> = (data: T) => void;
export type Unsubscribe = () => void;

class EventBus {
    private events: {
        [key: string]: EventCallback[];
    } = {};

    /**
     * Subscribe to an event
     * @param event The event name to subscribe to
     * @param callback The callback function to execute when the event is published
     * @returns An unsubscribe function
     */
    subscribe<K extends keyof EventTypes>(
        event: K,
        callback: EventCallback<EventTypes[K]>
    ): Unsubscribe {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(callback);

        // Return unsubscribe function
        return () => {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        };
    }

    /**
     * Publish an event with data
     * @param event The event name to publish
     * @param data The data to pass to the subscribers
     */
    publish<K extends keyof EventTypes>(event: K, data: EventTypes[K]): void {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

export default new EventBus();