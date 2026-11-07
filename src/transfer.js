import "dotenv/config";
import { makeTronWeb, getUsdtContract } from "./usdt.js";

const [recipient, amountText] = process.argv.slice(2);
const privateKey = process.env.TRON_PRIVATE_KEY;

if (!recipient || !amountText || !privateKey) {
  console.error("Usage: TRON_PRIVATE_KEY=... npm run transfer -- TRecipientAddress 1.25");
  process.exit(1);
}
if (!/^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(recipient)) {
  throw new Error("Recipient does not look like a TRON mainnet address.");
}
if (!/^\d+(\.\d{1,6})?$/.test(amountText) || Number(amountText) <= 0) {
  throw new Error("Amount must be positive and have at most 6 decimal places.");
}

const tronWeb = makeTronWeb({ privateKey });
const token = await getUsdtContract(tronWeb);
const sender = tronWeb.address.fromPrivateKey(privateKey);
const decimals = Number(await token.decimals().call());
if (decimals !== 6) throw new Error("Unexpected USDT decimals; aborting.");

const [whole = "0", fraction = ""] = amountText.split(".");
const units = BigInt(whole) * 10n ** 6n + BigInt((fraction + "000000").slice(0, 6));
const balance = BigInt((await token.balanceOf(sender).call()).toString());
if (balance < units) throw new Error("Insufficient USDT balance.");

console.log("Sender:", sender);
console.log("Recipient:", recipient);
console.log("Amount:", amountText, "USDT");
console.log("This transaction is irreversible.");
const confirmed = process.env.CONFIRM_TRANSFER === "YES";
if (!confirmed) {
  console.log("Dry run only. Set CONFIRM_TRANSFER=YES to broadcast after checking all details.");
  process.exit(0);
}

const tx = await token.transfer(recipient, units.toString()).send({
  feeLimit: 100_000_000,
  callValue: 0
});
console.log("Broadcast result:", tx);
console.log("Check the transaction on https://tronscan.org/");
