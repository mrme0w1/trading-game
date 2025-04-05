let playerMoney = 1000;
let stockPrice = 100;
let stockAmount = 0;

// Update display elements
function updateDisplay() {
    document.getElementById('player-money').innerText = playerMoney;
    document.getElementById('stock-price').innerText = stockPrice;
}

// Buy stock
document.getElementById('buy-button').addEventListener('click', () => {
    if (playerMoney >= stockPrice) {
        playerMoney -= stockPrice;
        stockAmount += 1;
        addTransaction('Bought 1 stock');
        updateDisplay();
    } else {
        alert("Not enough money to buy stock!");
    }
});

// Sell stock
document.getElementById('sell-button').addEventListener('click', () => {
    if (stockAmount > 0) {
        playerMoney += stockPrice;
        stockAmount -= 1;
        addTransaction('Sold 1 stock');
        updateDisplay();
    } else {
        alert("You don't own any stock to sell!");
    }
});

// Add transaction to history
function addTransaction(transaction) {
    let historyList = document.getElementById('history-list');
    let listItem = document.createElement('li');
    listItem.innerText = `${transaction} - Stock price: $${stockPrice}`;
    historyList.appendChild(listItem);
}

// Simulate stock price fluctuation
setInterval(() => {
    stockPrice = Math.floor(Math.random() * 200) + 50; // Random price between $50 and $250
    updateDisplay();
}, 5000); // Update every 5 seconds
