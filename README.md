# TRON USDT Integration (Educational)

This repository demonstrates how to **interact with the genuine Tether USD (USDT) TRC-20 contract** on TRON. It does not create, mint, clone, or impersonate USDT.

## Official TRON USDT contract

`TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`

Verify the address independently using Tether's official supported-protocols page and TRONSCAN before sending funds.

## Features

- Read USDT balances on TRON mainnet.
- Read token metadata and decimals.
- Optional transfer script using a private key supplied through an environment variable.
- No private keys or seed phrases are stored in this repository.

## Setup

Requires Node.js 18+.

```bash
npm install
```

Create a local `.env` file (never commit it):

```env
TRON_API_KEY=your_trongrid_api_key
TRON_PRIVATE_KEY=your_private_key_only_if_you_need_to_send
TRON_ADDRESS=your_T_address
```

Read a balance:

```bash
npm run balance -- TYourTronAddress
```

Send USDT (irreversible; verify recipient and amount carefully):

```bash
npm run transfer -- TRecipientAddress 1.25
```

The transfer script requires `TRON_PRIVATE_KEY` and signs locally. Start with a small amount. Never share your private key or enter it into an untrusted website.

## Important

- Genuine USDT is issued and controlled by Tether. This repository cannot mint genuine USDT or increase its supply.
- The 1-billion-token quantity discussed in the project conversation is **not** a supply this project can create. This code only reads/transfers USDT already held by a wallet.
- Transactions made with genuine USDT are recorded on TRON and can be checked on TRONSCAN.
- This is educational sample code, not an audited wallet. Review and test before use.

Official references:
- Tether supported protocols: https://tether.to/en/supported-protocols/
- TRON developer documentation: https://developers.tron.network/
- TRONSCAN: https://tronscan.org/
