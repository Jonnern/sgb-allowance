# sgb-allowance
Show history and revoke (a single or all) allowances for the connected address on these networks ( you can pull request for more):

Flare, Songbird, Coston1, Coston2, Polygon, Binance Smart Chain, Arbitrium, Optimistic, Ethereum, Ropsten, Rinkeby, Kovan.


Web Dapp: https://sgb-allowance.ftso.eu 

## How it works
This tool works by searching all your "approve transactions" for your address in the connected network block explorer.

Transactions are then filterd for spender addresses in chronological order: the newest for unique spender with a spend limit > 0 are shown and can be revoked pushing the "revoke" button and signing a new "approve transaction" that set the limit back to zero.
