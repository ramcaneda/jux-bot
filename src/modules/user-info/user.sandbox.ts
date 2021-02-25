import { injectable, inject } from "inversify";
import { HttpClient } from "../../services/http-client";
import { TYPES } from "../../types";
import { Profile } from "../../types/profile";
import { ApiCallEnum } from "../../enumerations/api-call-enum";

@injectable()
export class UserSandbox {

    private httpClient: HttpClient;

    constructor(
        @inject(TYPES.HttpClient) client: HttpClient
      ) {
        this.httpClient = client;
      }

    public async getProfile(userId : string) : Promise<Profile> {
        return await this.httpClient.apiCall(ApiCallEnum.user, 'profile', userId);
    }

}