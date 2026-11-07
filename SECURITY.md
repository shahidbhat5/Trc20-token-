# Security notes

- Never commit `.env`, private keys, seed phrases, API secrets, or wallet backups.
- The transfer script is dry-run by default. Broadcasting requires `CONFIRM_TRANSFER=YES`.
- Verify the official token contract independently before interacting with it:
  `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`.
- Test with a small amount first. TRON transactions are irreversible.
- This repository does not deploy a token contract and cannot mint genuine Tether USDT.
