import axios from "axios";
import PoliticsAndWar from "./PoliticsAndWar";


// Why did I choose to write out all functions?
// That way this can be downloaded and very easily edited and improved by others!
async function allCities (this: PoliticsAndWar): Promise<any>
{
    return await this.rawApiCall("all_cities");
}

async function alliance (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("alliance", <string> id);
}

async function allianceMembers (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("alliance_members", <string> id);
}

async function alliances (this: PoliticsAndWar): Promise<any>
{
    return await this.rawApiCall("alliances");
}

async function applicants (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("applicants", <string> id);
}

async function bank (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("bank", <string> id);
}

async function city (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("city", <string> id);
}

async function nation (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("nation", <string> id);
}

async function nationsMilitary (this: PoliticsAndWar): Promise<any>
{
    return await this.rawApiCall("nations_military");
}

class NationsParams // possibly redundant
{
    public vm?: boolean; // could be string, ensures that this will not break api
    public min_score?: number | string;
    public max_score?: number | string;
    public alliance_id?: number | string;

    public constructor(vm?, min_score?, max_score?, alliance_id?) 
    {
        this.vm = vm; this.alliance_id = alliance_id;
        this.min_score = min_score; this.max_score = max_score; 
    }
}
async function nations (this: PoliticsAndWar, params: NationsParams = null): Promise<any>
{
    if (params == null)
        return await this.rawApiCall("nations");

    if (typeof params.vm != "boolean")
        return Promise.reject("ParamsTypeError: params.vm must be of type boolean.");

    let id: string = "";
    for (let key in params)
        id += key + "=" + params[key] + "&";
    
    return await this.rawApiCall("nations", id);
}

async function tradeHistory(this: PoliticsAndWar, resources: string = null, records: number | string = 1000): Promise<any>
{
    let params: string = "";
    if (resources != null)
        params += "&resources=" + resources;
    
    params += "&records=" + <string> records;

    return await this.rawApiCall("trade_history", params);
}

async function tradePrice (this: PoliticsAndWar, resource: string = "steel"): Promise<any>
{
    return await this.rawApiCall("trade_price", resource);
}

async function war (this: PoliticsAndWar, id: number | string): Promise<any>
{
    return await this.rawApiCall("war", <string> id);
}

//
export 
{
    allCities,
    alliance,
    allianceMembers,
    alliances,
    applicants,
    bank,
    city,
    nation,
    nationsMilitary,
    nations,
    tradeHistory,
    tradePrice,
    war
}