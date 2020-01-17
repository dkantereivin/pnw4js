import PoliticsAndWar from "./PoliticsAndWar";
declare function allCities(this: PoliticsAndWar): Promise<any>;
declare function alliance(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function allianceMembers(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function alliances(this: PoliticsAndWar): Promise<any>;
declare function applicants(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function bank(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function city(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function nation(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function nationsMilitary(this: PoliticsAndWar): Promise<any>;
declare class NationsParams {
    vm?: boolean;
    min_score?: number | string;
    max_score?: number | string;
    alliance_id?: number | string;
    constructor(vm?: any, min_score?: any, max_score?: any, alliance_id?: any);
}
declare function nations(this: PoliticsAndWar, params?: NationsParams): Promise<any>;
declare function tradeHistory(this: PoliticsAndWar, resources?: string, records?: number | string): Promise<any>;
declare function tradePrice(this: PoliticsAndWar, resource?: string): Promise<any>;
declare function war(this: PoliticsAndWar, id: number | string): Promise<any>;
declare function wars(this: PoliticsAndWar, number: number, allianceids: string): Promise<any>;
declare function warAttacks(this: PoliticsAndWar, minwarid: number, maxwarid: number, warid: number): Promise<any>;
export { allCities, alliance, allianceMembers, alliances, applicants, bank, city, nation, nationsMilitary, nations, tradeHistory, tradePrice, war, wars, warAttacks };
