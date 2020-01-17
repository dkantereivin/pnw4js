declare class PoliticsAndWar {
    private key;
    private readonly password;
    private url;
    allCities: Function;
    alliance: Function;
    allianceMembers: Function;
    alliances: Function;
    applicants: Function;
    bank: Function;
    city: Function;
    nation: Function;
    nationsMilitary: Function;
    nations: Function;
    tradeHistory: Function;
    tradePrice: Function;
    war: Function;
    wars: Function;
    warAttacks: Function;
    constructor(key: string, password?: string);
    genURL(name: string, id?: number | string): string;
    showKey(pass: string): string;
    setKey(key: string): void;
    rawApiCall(api: string, id?: string): Promise<any>;
}
export default PoliticsAndWar;
