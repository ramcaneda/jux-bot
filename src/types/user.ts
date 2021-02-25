import { Status } from "./status";

export interface User {
    level: number,
    gender: string,
    player_id: number,
    name: string,
    status: Status
}