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
var raw_api = require("./api.json");
var axios_1 = require("axios");
var Functions = require("./functions");
var PoliticsAndWar = (function () {
    function PoliticsAndWar(key, password) {
        if (password === void 0) { password = "pnw"; }
        this.url = {};
        this.allCities = Functions.allCities;
        this.alliance = Functions.alliance;
        this.allianceMembers = Functions.allianceMembers;
        this.alliances = Functions.alliances;
        this.applicants = Functions.applicants;
        this.bank = Functions.bank;
        this.city = Functions.city;
        this.nation = Functions.nation;
        this.nationsMilitary = Functions.nationsMilitary;
        this.nations = Functions.nations;
        this.tradeHistory = Functions.tradeHistory;
        this.tradePrice = Functions.tradePrice;
        this.war = Functions.war;
        this.wars = Functions.wars;
        this.warAttacks = Functions.warAttacks;
        Object.defineProperty(this, key, { value: key });
        Object.defineProperty(this, password, { value: password });
        for (var key_1 in raw_api) {
            if (key_1 == "base_url")
                continue;
            this.url[key_1] = raw_api.base_url + raw_api[key_1].path.replace("${[KEY]}", this.key);
        }
    }
    PoliticsAndWar.prototype.genURL = function (name, id) {
        var link = this.url[name];
        if (raw_api[name].type !== "gen")
            link = this.url[name].replace("${[ID]}", id)
                .replace("${[PARAMS]}", id);
        return link;
    };
    PoliticsAndWar.prototype.showKey = function (pass) {
        if (pass == this.password)
            return this.key;
        else
            return "Password Incorrect";
    };
    PoliticsAndWar.prototype.setKey = function (key) { this.key = key; };
    PoliticsAndWar.prototype.rawApiCall = function (api, id) {
        if (id === void 0) { id = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var url, res, data, rejectMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.genURL(api, id);
                        return [4, axios_1["default"].get(url)["catch"](function (err) {
                                console.error(err);
                                return Promise.reject(err);
                            })];
                    case 1:
                        res = _a.sent();
                        data = res.data;
                        if ((!data.success) && data.hasOwnProperty("success")) {
                            rejectMessage = data.general_message;
                            return [2, Promise.reject(rejectMessage)];
                        }
                        return [2, Promise.resolve(data)];
                }
            });
        });
    };
    return PoliticsAndWar;
}());
exports["default"] = PoliticsAndWar;
module.exports = PoliticsAndWar;
//# sourceMappingURL=PoliticsAndWar.js.map