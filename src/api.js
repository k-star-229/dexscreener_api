import axios from "axios";

export const getData = async () => {

    let url = 'https://io.dexscreener.com/u/trading-history/recent/bsc/0x5C38Ed8835D1157BAf78C03124d4afE41E2B515C';
    const response = await fetch(url, {
      method: "GET",
      mode: "cors"
    });
    console.log(response.json())
}
