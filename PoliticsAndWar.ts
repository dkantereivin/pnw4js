
import * as raw_api from "./api.json";
import axios from "axios";

class PoliticsAndWar
{
    private key: string;
    private url: any = {};

    /**
     * @param {String} key The key the user would like to use for calling the api.
     * @ throws {KeyTypeException} Thrown when the provided key is not of type string.
     */
    public constructor(key: string)
    {
        this.key = key;

        for (var key in raw_api)
        {
            if (key == "base_url") continue;
            this.url[key] = raw_api.base_url + (raw_api[key].path.replace("${[KEY]}", this.key));
        }
    }

    public genURL(name: string, id?: number | string): string
    {
        let link: string = this.url[name];

        if (raw_api[name].type !== "gen") 
            link = this.url[name].replace("${[ID]}", id)
                           .replace("${[PARAMS]}", id);
        return link;
    }

    public showKey(): string
    { return this.key; }


    /**
     * Performs a raw api call and returns a Promise with a useful part of the result.
     * @async
     * @param {String} api Name of the API to call (in api.json)
     * @param {String} id The ID to use for link generation, or all params in string format.
     */
    public async rawApiCall(api: string, id?: number | string): Promise<any>
    {
        let url: string = this.genURL(api, id);
        let res: any = await axios.get(url)
            .catch(err => {
                console.error(err);
                throw err;
            });
        
        return Promise.resolve(res.data);
    }

}

function main() {
    let pnw = new PoliticsAndWar("34651ed1dc764d");
    let res = pnw.rawApiCall("alliance", 1742)
};
main();