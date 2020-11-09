import { ILeadItem, LeadStatus, LeadItemJSON } from "./lead";

export const leads: ILeadItem[] = [
    {
        id: 1,
        firstName: "Eric",
        lastName: "Cantona",
        email: "ericcantona@gmail.com",
        phone: "123-478-4894",
        source: "http://findnewhome.com",
        status: LeadStatus.LookingForRental,
        createdDate: new Date("2020-11-05T00:00:00"),
        updatedDate: new Date("2020-11-06T00:00:00")
    },
    {
        id: 2,
        firstName: "Json",
        lastName: "Statham",
        email: "jstatham@gmail.com",
        phone: "949-198-4166",
        source: "http://exotic-villas.com",
        status: LeadStatus.Rented,
        createdDate: new Date("2020-11-07T00:00:00"),
        updatedDate: new Date("2020-11-08T00:00:00")
    },
    {
        id: 3,
        firstName: "Scott",
        lastName: "Fitch",
        email: "scottf@gmail.com",
        phone: "144-342-5433",
        source: "http://findnewhome.com",
        status: LeadStatus.LookingForRental,
        createdDate: new Date("2020-11-07T00:00:00"),
        updatedDate: new Date("2020-11-09T00:00:00")
    },
    {
        id: 4,
        firstName: "Carl",
        lastName: "Gustav",
        email: "carlgustav@gmail.com",
        phone: "785-894-3624",
        source: "http://navi-realestate.com",
        status: LeadStatus.DoNotCall,
        createdDate: new Date("2020-11-08T00:00:00"),
        updatedDate: new Date("2020-11-09T00:00:00")
    },
    {
        id: 5,
        firstName: "Lam",
        lastName: "Nguyen",
        email: "lamnguyen123@gmail.com",
        phone: "123-145-7496",
        source: "http://getnewhome.com",
        status: LeadStatus.Archived,
        createdDate: new Date("2020-11-03T00:00:00"),
        updatedDate: new Date("2020-11-03T00:00:00")
}];
