
export async function fetchData(id) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const data = await res.json();
     return data;
  } catch (error) { 
    console.error(error);
  }
}

export async function fetchMarketChartData(id, days, Changeprice) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );
    const data = await res.json();
    return data; 
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchCoinData(){
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    const data = await res.json();
     return data;
  } catch (error) {
    console.error(error);
  }
};

export function convertDate(number) {
  let myDate = new Date(number);
  return myDate.getDate() + '/' + (myDate.getMonth() + 1); 
}
