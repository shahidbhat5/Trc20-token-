import { TronWeb } from "tronweb";

export const USDT_CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

export function makeTronWeb({ privateKey } = {}) {
  const apiKey = process.env.TRON_API_KEY;
  return new TronWeb({
    fullHost: "https://api.trongrid.io",
    ...(privateKey ? { privateKey } : {}),
    ...(apiKey ? { headers: { "TRON-PRO-API-KEY": apiKey } } : {})
  });
}

export async function getUsdtContract(tronWeb) {
  return tronWeb.contract().at(USDT_CONTRACT);
}
