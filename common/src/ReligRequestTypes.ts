export type ReligRequest = {
    name: string;
    religion: string;
    location: string;
    priority: Priority;
    service: string;
    status: Status;
};

export enum Priority {
    low = ':)',
    normal = '!',
    high = '!!',
    emergency = '(╯°□°)╯︵ ┻━┻'
}

export enum Status {
    unassigned = 'unassigned',
    assigned = 'assigned',
    inProgress = 'in progress',
    completed = 'completed'
}