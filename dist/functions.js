"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.warAttacks = exports.wars = exports.war = exports.tradePrice = exports.tradeHistory = exports.nations = exports.nationsMilitary = exports.nation = exports.city = exports.bank = exports.applicants = exports.alliances = exports.allianceMembers = exports.alliance = exports.allCities = void 0;
function allCities() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("all_cities")];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.allCities = allCities;
function alliance(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("alliance", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.alliance = alliance;
function allianceMembers(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("alliance_members", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.allianceMembers = allianceMembers;
function alliances() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("alliances")];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.alliances = alliances;
function applicants(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("applicants", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.applicants = applicants;
function bank(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("bank", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.bank = bank;
function city(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("city", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.city = city;
function nation(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("nation", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.nation = nation;
function nationsMilitary() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("nations_military")];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.nationsMilitary = nationsMilitary;
var NationsParams = (function () {
    function NationsParams(vm, min_score, max_score, alliance_id) {
        this.vm = vm;
        this.alliance_id = alliance_id;
        this.min_score = min_score;
        this.max_score = max_score;
    }
    return NationsParams;
}());
function nations(params) {
    if (params === void 0) { params = null; }
    return __awaiter(this, void 0, void 0, function () {
        var id, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(params == null)) return [3, 2];
                    return [4, this.rawApiCall("nations")];
                case 1: return [2, _a.sent()];
                case 2:
                    if (typeof params.vm != "boolean")
                        return [2, Promise.reject("ParamsTypeError: params.vm must be of type boolean.")];
                    id = "";
                    for (key in params)
                        id += key + "=" + params[key] + "&";
                    return [4, this.rawApiCall("nations", id)];
                case 3: return [2, _a.sent()];
            }
        });
    });
}
exports.nations = nations;
function tradeHistory(resources, records) {
    if (resources === void 0) { resources = null; }
    if (records === void 0) { records = 1000; }
    return __awaiter(this, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = "";
                    if (resources != null)
                        params += "&resources=" + resources;
                    params += "&records=" + records;
                    return [4, this.rawApiCall("trade_history", params)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.tradeHistory = tradeHistory;
function tradePrice(resource) {
    if (resource === void 0) { resource = "steel"; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("trade_price", resource)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.tradePrice = tradePrice;
function war(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.rawApiCall("war", id)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.war = war;
function wars(number, allianceids) {
    return __awaiter(this, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = "";
                    if (number > 0) {
                        params += number;
                    }
                    if (allianceids.length > 0) {
                        if (!number) {
                            params += "?";
                        }
                        else {
                            params += "&";
                        }
                        params += allianceids;
                    }
                    return [4, this.rawApiCall("wars", params)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.wars = wars;
function warAttacks(minwarid, maxwarid, warid) {
    return __awaiter(this, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = "";
                    if (minwarid > 0) {
                        params += "&min_war_attack_id=" + minwarid;
                    }
                    if (maxwarid > 0) {
                        params += "&max_war_attack_id=" + maxwarid;
                    }
                    if (warid > 0) {
                        params += "&war_id=" + warid;
                    }
                    return [4, this.rawApiCall("warattacks", params)];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.warAttacks = warAttacks;
//# sourceMappingURL=functions.js.map