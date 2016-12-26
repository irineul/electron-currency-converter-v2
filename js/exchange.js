'use strict';

class Exchange{

	constructor(appId){
		this.appId = appId;
	}

	static url(url){
		return url + '?app_id=' + this.appId;
	}

	static getCurrencies(){
		let currencies = fetch(url('https://openexchangerates.org/api/currencies.json'));
		return currencies.json();
	}

}

export { Exchange };