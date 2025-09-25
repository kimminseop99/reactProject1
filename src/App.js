import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  
  const onChange = (event) => setMoney(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);


  return (
    <div>
      <h1>The Coins!! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <input value={money}
      onChange={onChange}
      placeholder="how much your money?"
      type="number">
      
      </input>USD
      <ul>
        {coins.map((coin) => (
          <li key={coin.id} style={{ marginBottom: "10px" }}>
            {coin.name} ({coin.symbol}): ${Math.round(coin.quotes.USD.price)}
            {money ? (
              coin.quotes.USD.price > 0 && money / coin.quotes.USD.price >= 1 ? (
                <span> → {Math.floor(money / coin.quotes.USD.price)} 개 살 수 있습니다.</span>
              ) : (
                <span> → 금액이 부족합니다.</span>
              )
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
