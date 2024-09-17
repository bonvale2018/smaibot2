// main.js

document.addEventListener('DOMContentLoaded', function() {
    fetchCryptoPrices();
});

function fetchCryptoPrices() {
    const cryptoContainer = document.getElementById('crypto-container');
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const bitcoinPrice = data.bitcoin.usd;
            const ethereumPrice = data.ethereum.usd;
            const litecoinPrice = data.litecoin.usd;

            cryptoContainer.innerHTML = `
                <div class="crypto-box">
                    <h3>Bitcoin (BTC)</h3>
                    <p>$${bitcoinPrice.toFixed(2)}</p>
                </div>
                <div class="crypto-box">
                    <h3>Ethereum (ETH)</h3>
                    <p>$${ethereumPrice.toFixed(2)}</p>
                </div>
                <div class="crypto-box">
                    <h3>Litecoin (LTC)</h3>
                    <p>$${litecoinPrice.toFixed(2)}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching cryptocurrency data:', error);
            cryptoContainer.innerHTML = '<p>Failed to load cryptocurrency data.</p>';
        });
}
