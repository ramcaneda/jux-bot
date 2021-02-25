import { injectable, inject } from "inversify";
import { HttpClient } from "../../services/http-client";
import { TYPES } from "../../types";
import { Profile } from "../../types/profile";

@injectable()
export class UserSandbox {

    private httpClient: HttpClient;

    constructor(
        @inject(TYPES.HttpClient) client: HttpClient
      ) {
        this.httpClient = client;
      }

    public async getProfile(userId : string) : Promise<Profile> {
        return await this.httpClient.singleSelectionCall('user', 'profile', userId);
    }

}