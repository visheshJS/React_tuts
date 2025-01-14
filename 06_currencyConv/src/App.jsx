import React, { useState } from 'react';
import InputBox from './components/InputBox';
// import useExchangeRates from './hooks/useExchangeRates';
import useExchangeRates from './hooks/useExchangeRates';

function App() {
  const apiKey = 'YOUR_ACTUAL_API_KEY'; // ***REPLACE THIS WITH YOUR ACTUAL KEY***
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);

  const { rates: fromRates, error: fromError, isLoading: fromLoading } = useExchangeRates(apiKey, fromCurrency);
  const { rates: toRates, error: toError, isLoading: toLoading } = useExchangeRates(apiKey, toCurrency);

  if (!apiKey) {
    return <div>Please provide an API Key</div>
  }

  if (fromError) return <div>Error fetching from rates: {fromError}</div>;
  if (toError) return <div>Error fetching to rates: {toError}</div>;

  if (fromLoading || toLoading) return <div>Loading rates...</div>;

  const convertedAmount = fromRates && toRates ? (amount * (toRates[toCurrency] / fromRates[fromCurrency])) : 0;
  const fromOptions = fromRates ? Object.keys(fromRates) : [];
  const toOptions = toRates ? Object.keys(toRates) : [];

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={setAmount}
                currencyOptions={fromOptions}
                onCurrencyChange={setFromCurrency}
                selectCurrency={fromCurrency}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={handleSwap}>
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(2)}
                currencyOptions={toOptions}
                onCurrencyChange={setToCurrency}
                selectCurrency={toCurrency}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;