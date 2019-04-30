
import * as raw_api from "./api.json";
import axios from "axios";

import * as Functions from "./functions";


/**
 * @public @class @export
 * Main Class for Library. See Constructor Documentation.
 */
class PoliticsAndWar
{
    /**Holds API key for referencing API. */
    private key: string;
    /** Readonly field defined on Object creation. Defaults to "pnw".
     * Cannot be accessed from the object, if needed, store in client code.
    */
    private readonly password: string;
    private url: object = {};

    // Function Declarations
    public allCities: Function = Functions.allCities;
    public alliance: Function = Functions.alliance;
    public allianceMembers: Function = Functions.allianceMembers;
    public alliances: Function = Functions.alliances;
    public applicants: Function = Functions.applicants;
    public bank: Function = Functions.bank;
    public city: Function = Functions.city;
    public nation: Function = Functions.nation;
    public nationsMilitary: Function = Functions.nationsMilitary;
    public nations: Function = Functions.nations;
    public tradeHistory: Function = Functions.tradeHistory;
    public tradePrice: Function = Functions.tradePrice;
    public war: Function = Functions.war;

    /**
     * @public @constructor
     * @param {String} key The key the user would like to use for calling the api.
     * @param {String} password A password to perform certain operations & view stored key.
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

    /**
     * @public @method genURL Returns a generated link with entered parameters.
     * @param name Name of the api to generate a link for, as per api.json
     * @param id ID or Params to insert into link generation.
     * @returns {String}
     */
    public genURL(name: string, id?: number | string): string
    {
        let link: string = this.url[name];

        if (raw_api[name].type !== "gen") 
            link = this.url[name].replace("${[ID]}", id)
                                 .replace("${[PARAMS]}", id);
            console.log(link);
        return link;
    }

    /**
     * @public @method showKey Returns the stored API key being used for calls.
     * @param {String} password
     * @returns {String}
     */
    public showKey(pass: string): string
    {
        if (pass == this.password)
            return this.key;
        else
            return "Password Incorrect";
    }

    /**
     * @public @void @method setKey Sets the API key.
     * @param {String} key The desired key setting.
     */
    public setKey(key: string): void
    { this.key = key }


    /**
     * Performs a raw api call and returns a Promise object with a useful result.
     * @public @async @method rawApiCall
     * @param {String} api Name of the API to call (in api.json)
     * @param {String} id The ID to use for link generation, or all params in string format.
     * @returns {Promise} Success - Returns JSON; Reject - Returns Reason
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
        
        if ((!data.success) && data.hasOwnProperty("success"))
        {
            let rejectMessage: string = data.general_message;
            return Promise.reject(rejectMessage);       
        }
        return Promise.resolve(data);
    }

}
//
export default PoliticsAndWar;
module.exports = PoliticsAndWar;