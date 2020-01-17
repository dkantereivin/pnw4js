var __awaiter=this&&this.__awaiter||function(a,c,b,e){function f(a){return a instanceof b?a:new b(function(c){c(a)})}return new (b||(b=Promise))(function(b,g){function d(a){try{l(e.next(a))}catch(m){g(m)}}function h(a){try{l(e["throw"](a))}catch(m){g(m)}}function l(a){a.done?b(a.value):f(a.value).then(d,h)}l((e=e.apply(a,c||[])).next())})},__generator=this&&this.__generator||function(a,c){function b(a){return function(c){return e([a,c])}}function e(b){if(k)throw new TypeError("Generator is already executing.");
for(;f;)try{if(k=1,g&&(d=b[0]&2?g["return"]:b[0]?g["throw"]||((d=g["return"])&&d.call(g),0):g.next)&&!(d=d.call(g,b[1])).done)return d;if(g=0,d)b=[b[0]&2,d.value];switch(b[0]){case 0:case 1:d=b;break;case 4:return f.label++,{value:b[1],done:!1};case 5:f.label++;g=b[1];b=[0];continue;case 7:b=f.ops.pop();f.trys.pop();continue;default:if(!(d=f.trys,d=0<d.length&&d[d.length-1])&&(6===b[0]||2===b[0])){f=0;continue}if(3===b[0]&&(!d||b[1]>d[0]&&b[1]<d[3]))f.label=b[1];else if(6===b[0]&&f.label<d[1])f.label=
d[1],d=b;else if(d&&f.label<d[2])f.label=d[2],f.ops.push(b);else{d[2]&&f.ops.pop();f.trys.pop();continue}}b=c.call(a,f)}catch(n){b=[6,n],g=0}finally{k=d=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}var f={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},k,g,d,h;return h={next:b(0),"throw":b(1),"return":b(2)},"function"===typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h};exports.__esModule=!0;
function allCities(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(a){switch(a.label){case 0:return[4,this.rawApiCall("all_cities")];case 1:return[2,a.sent()]}})})}exports.allCities=allCities;function alliance(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("alliance",a)];case 1:return[2,c.sent()]}})})}exports.alliance=alliance;
function allianceMembers(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("alliance_members",a)];case 1:return[2,c.sent()]}})})}exports.allianceMembers=allianceMembers;function alliances(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(a){switch(a.label){case 0:return[4,this.rawApiCall("alliances")];case 1:return[2,a.sent()]}})})}exports.alliances=alliances;
function applicants(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("applicants",a)];case 1:return[2,c.sent()]}})})}exports.applicants=applicants;function bank(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("bank",a)];case 1:return[2,c.sent()]}})})}exports.bank=bank;
function city(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("city",a)];case 1:return[2,c.sent()]}})})}exports.city=city;function nation(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("nation",a)];case 1:return[2,c.sent()]}})})}exports.nation=nation;
function nationsMilitary(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(a){switch(a.label){case 0:return[4,this.rawApiCall("nations_military")];case 1:return[2,a.sent()]}})})}exports.nationsMilitary=nationsMilitary;var NationsParams=function(){return function(a,c,b,e){this.vm=a;this.alliance_id=e;this.min_score=c;this.max_score=b}}();
function nations(a){void 0===a&&(a=null);return __awaiter(this,void 0,void 0,function(){var c,b;return __generator(this,function(e){switch(e.label){case 0:return null!=a?[3,2]:[4,this.rawApiCall("nations")];case 1:return[2,e.sent()];case 2:if("boolean"!=typeof a.vm)return[2,Promise.reject("ParamsTypeError: params.vm must be of type boolean.")];c="";for(b in a)c+=b+"="+a[b]+"&";return[4,this.rawApiCall("nations",c)];case 3:return[2,e.sent()]}})})}exports.nations=nations;
function tradeHistory(a,c){void 0===a&&(a=null);void 0===c&&(c=1E3);return __awaiter(this,void 0,void 0,function(){var b;return __generator(this,function(e){switch(e.label){case 0:return b="",null!=a&&(b+="&resources="+a),b+="&records="+c,[4,this.rawApiCall("trade_history",b)];case 1:return[2,e.sent()]}})})}exports.tradeHistory=tradeHistory;
function tradePrice(a){void 0===a&&(a="steel");return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("trade_price",a)];case 1:return[2,c.sent()]}})})}exports.tradePrice=tradePrice;function war(a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(c){switch(c.label){case 0:return[4,this.rawApiCall("war",a)];case 1:return[2,c.sent()]}})})}exports.war=war;
function wars(a,c){return __awaiter(this,void 0,void 0,function(){var b;return __generator(this,function(e){switch(e.label){case 0:return b="",0<a&&(b+=a),0<c.length&&(b=a?b+"&":b+"?",b+=c),[4,this.rawApiCall("wars",b)];case 1:return[2,e.sent()]}})})}exports.wars=wars;
function warAttacks(a,c,b){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(f){switch(f.label){case 0:return e="",0<a&&(e+="&min_war_attack_id="+a),0<c&&(e+="&max_war_attack_id="+c),0<b&&(e+="&war_id="+b),[4,this.rawApiCall("warattacks",e)];case 1:return[2,f.sent()]}})})}exports.warAttacks=warAttacks;