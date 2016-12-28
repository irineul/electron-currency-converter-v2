import Rates from './rates';


let changeBtnProperties = (isLoading) => {
  if (isLoading){
    document.getElementById("btn-convert").disabled = true;
    document.getElementById("btn-convert").innerHTML = 'Loading...'  
  }
  else{
   document.getElementById("btn-convert").disabled = false;
    document.getElementById("btn-convert").innerHTML = 'Convert'   
  }

}


async function setRate(from, to, quantity) {
  // Modify button property to loading
  changeBtnProperties(true);

  try{
    // get rate from API
    var rate = await Rates.convertRates(from, to, quantity);

    // Successful conversion
    if (rate){
      // Conversion Rocks
      document.getElementById("conversion-rocks").style.visibility = "visible";
      document.getElementById("currency-to-one-value").innerHTML = Object.values(rate.rates) + ' ' + to;
      document.getElementById("currency-to-one-title").innerHTML = from;

      // Conversion value
      document.getElementById("quantity-to").value = Rates.calcRate(quantity, Object.values(rate.rates));
    }
    // Error
    else{
      alert('Invalid conversion');
      document.getElementById("conversion-rocks").style.visibility = "hidden";
      document.getElementById("quantity-to").value = "";
    }
  } catch(e){
    console.log(e);
    alert('Unexpected error');
  }
  finally{
    // Modify button property to default
    changeBtnProperties(false);
  }
}

async function setCurrencies() {
  try{
    // get currencies from API
    var currencies = await Rates.currencies();

    // fetch it to html
    let html = '';
    Object.keys(currencies).forEach(function (key) {
      html += `<option value='${key}'>${currencies[key]}</option>`;
    });

    // set to interface
    document.getElementById("currency-from").innerHTML = html;
    document.getElementById("currency-to").innerHTML = html;
  } catch(e){
    console.log(e);
    alert('Unexpected error');
  }
}


document.getElementById('btn-convert').addEventListener('click', () => {
  let from = document.getElementById("currency-from").value;
  let to = document.getElementById("currency-to").value;
  let quantity = document.getElementById("quantity-from").value;
  
  setRate(from, to, quantity);
  document.getElementById('btn-convert').disabled = false;

});


// Initialize
setCurrencies();
document.getElementById("conversion-rocks").style.visibility = "hidden";