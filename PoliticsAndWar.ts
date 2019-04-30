
import * as raw_api from "./api.json";
import axios from "axios";

import * as Functions from "./functions";



class PoliticsAndWar
{
    private key: string;
    private password: string;
    private url: object = {};

    // Function Declarations
    public allCities: any = Functions.allCities;
    public alliance: any = Functions.alliance;
    public allianceMembers: any = Functions.allianceMembers;
    public alliances: any = Functions.alliances;
    public applicants: any = Functions.applicants;
    public bank: any = Functions.bank;
    public city: any = Functions.city;
    public nation: any = Functions.nation;
    public nationsMilitary: any = Functions.nationsMilitary;
    public nations: any = Functions.nations;
    public tradeHistory: any = Functions.tradeHistory;
    public tradePrice: any = Functions.tradePrice;
    public war: any = Functions.war;

    /**
     * @param {String} key The key the user would like to use for calling the api.
     * @param {String} password A password to perform certain operations & view cached key.
     * @ throws {KeyTypeException} Thrown when the provided key is not of type string.
     */
    public constructor(key: string, password: string = "pnw")
    {
        this.key = key;
        this.password = password;
        
        for (let key in raw_api)
        {
            if (key == "base_url") continue;
            this.url[key] = raw_api.base_url + raw_api[key].path.replace("${[KEY]}", this.key);
        }
    }

    public genURL(name: string, id?: number | string): string
    {
        let link: string = this.url[name];

        if (raw_api[name].type !== "gen") 
            link = this.url[name].replace("${[ID]}", id)
                                 .replace("${[PARAMS]}", id);
            console.log(link);
        return link;
    }

    public showKey(pass: string): string
    {
        if (pass == this.password)
            return this.key;
        else
            return "Password Incorrect";
    }

    public setKey(key: string): void
    { this.key = key }


    /**
     * Performs a raw api call and returns a Promise with a useful part of the result.
     * @async
     * @param {String} api Name of the API to call (in api.json)
     * @param {String} id The ID to use for link generation, or all params in string format.
     */
    public async rawApiCall(api: string, id: string = ""): Promise<any>
    {
        let url: string = this.genURL(api, id);
        let res: any = await axios.get(url)
            .catch(err => {
                console.error(err);
                return Promise.reject(err);
            });
        
        let {data} = res;

        if (!data.success)
        {
            let rejectMessage: string = data.general_message;
            return Promise.reject(rejectMessage);       
        }
        return Promise.resolve(data);
    }

}
//
export default PoliticsAndWar;
