import React, { useState, useEffect } from 'react';

const Transaction = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
     console.log(`Balance changed: ${balance}`);
  }, [balance]);

  const handleDeposit = () => {
    if (amount > 0) {
      setBalance(prevBalance => prevBalance + amount);
      setAmount(0);
    }
  };

  const handleWithdraw = () => {
    if (amount > 0 && balance >= amount) {
      setBalance(prevBalance => prevBalance - amount);
      setAmount(0);
    } else {
      alert('Insufficient balance or invalid amount!');
    }
  };

  return (
   
    <div>
       <center>
      <h1>Bank Account</h1>
      <p>Balance: ${balance}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      /> <br/><br/>
      <button onClick={handleDeposit}>Deposit</button><span> </span>
      <button onClick={handleWithdraw}>Withdraw</button>
      <br /> <br />
      </center>
    </div>
  );
};

export default Transaction;
