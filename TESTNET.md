# Educational TRC-20 test token

This project is a learning exercise on the TRON Nile testnet. It is not USDT, is not issued by Tether, has no cash value, and must not be presented as USDT.

## Token details
- Name: Learning Demo Token
- Symbol: LDT
- Decimals: 6
- Fixed initial supply: 1,000,000,000 LDT
- Initial holder: the wallet that deploys the contract

## Deploy and send a test transfer
1. Use a wallet you control and switch it to the TRON Nile testnet.
2. Obtain test TRX from the official TRON Nile testnet faucet/documentation. Testnet assets have no monetary value.
3. Open the contract in a trusted Solidity/Tron IDE configured for Nile, compile with Solidity 0.8.20, and deploy. Review the bytecode and constructor before signing.
4. Confirm the deployed contract address and verify it on the Nile testnet explorer.
5. In the deployed contract's transfer method, send 500000000000 base units to the intended recipient. With 6 decimals, this equals 500,000 LDT.
6. Confirm the recipient address carefully and sign the transaction in your own wallet. Never share a seed phrase or private key.

The previously supplied recipient string is TTX6wcJywMF86RNUwsEFKXz1r47qT4WGNo. Independently validate that it is a valid TRON address for the selected testnet before signing. Do not send test tokens to an address unless you control it or the recipient has confirmed it can receive Nile testnet tokens.

## Important
- This contract does not mint genuine USDT and cannot create a Tether balance.
- This assistant cannot deploy the contract or sign/broadcast a blockchain transaction for you.
- Never use a mainnet wallet/private key in an online IDE or share it in chat.
