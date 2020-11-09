export enum LeadStatus {
    LookingForRental = "Looking For Rental",
    NotInterested = "Not Interested",
    Rented = "Rented",
    DoNotCall = "Do Not Call",
    Archived = "Archived"
}

export interface ILeadItem {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    source: string,
    status: LeadStatus,
    createdDate: Date,
    updatedDate: Date
}

export class LeadItem implements ILeadItem {
    constructor (){};
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    source: string;
    status: LeadStatus;
    createdDate: Date;
    updatedDate: Date;

    static fromItemJson (itemJson: LeadItemJSON){
        let leadItem = new LeadItem();
        leadItem.id = itemJson.id;
        leadItem.firstName = itemJson.firstName;
        leadItem.lastName = itemJson.lastName;
        leadItem.phone = itemJson.phone;
        leadItem.source = itemJson.source;
        leadItem.status = LeadStatus[itemJson.status];
        leadItem.createdDate = new Date(itemJson.createdDate);
        leadItem.updatedDate = new Date(itemJson.updatedDate);
        return leadItem;
    };
}

export interface LeadItemJSON {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    source: string,
    status: string,
    createdDate: string,
    updatedDate: string
}