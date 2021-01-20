import { Calendar } from "primeng/calendar";
import { Guest } from "./Guest";

export class Checkin{
    id: number;
    guest: Guest;
    dateIn: Calendar;
    dateOut: Calendar;
    addVehicle: boolean;
}