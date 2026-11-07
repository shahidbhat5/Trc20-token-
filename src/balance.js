import "dotenv/config";
import { makeTronWeb, getUsdtContract } from "./usdt.js";

const address = process.argv[2] || process.env.TRON_ADDRESS;
if (!address) {
  console.error("Usage: npm run balance -- TYourTronAddress");
  process.exit(1);
}

const tronWeb = makeTronWeb();
const token = await getUsdtContract(tronWeb);
const [rawBalance, decimals, symbol, name] = await Promise.all([
  token.balanceOf(address).call(),
  token.decimals().call(),
  token.symbol().call(),
  token.name().call()
]);

const places = Number(decimals);
const balance = Number(rawBalance.toString()) / (10 ** places);
console.log({ name, symbol, contract: token.address, address, balance, decimals: places });
