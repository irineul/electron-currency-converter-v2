export default class Rates{

	static isValidRate(fixerResponse){
		let isValid = true;
		if (fixerResponse.hasOwnProperty("error"))
		   isValid = false;
		 else{
		   if (Object.values(fixerResponse.rates).length > 0)
		     isValid = true;
		   else
		     isValid = false;
		 }
		 return isValid;
	}

	static async currencies(){
		var currencies = await fetch('https://openexchangerates.org/api/currencies.json');
		return currencies.json();
	}

	static async convertRates(from, to, quantity){
		let url = 'http://api.fixer.io/latest?base='+from+'&symbols='+to+'?app_id=e1a03227b2e444538bd8ed483a35da7b';
		let latest = await fetch(url);
		let latestJson = await latest.json();

		return this.isValidRate(latestJson) ? latestJson : false;
	}




	static calcRate(quantity, value){
		return parseFloat(quantity)*parseFloat(value);
	}

}