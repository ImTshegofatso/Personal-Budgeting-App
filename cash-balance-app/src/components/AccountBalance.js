import React, { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalState';
import './AccountBalance.css';

const AccountBalance = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [amount, setAmount] = useState('');

  // Function to update balance with error handling
const updateBalance = (amount) => {
  // Check if amount is empty or not a number
  if (amount === "" || isNaN(amount)) {
    // Display error message
    alert("Please enter a valid number!");
    // Return undefined to indicate invalid input
    return;
  }
  // Convert amount to a valid number
  const validAmount = parseFloat(amount);
  // Check if the converted amount is NaN
  if (isNaN(validAmount)) {
    // Display error message
    alert("Please enter a valid number!");
    // Return undefined to indicate invalid input
    return;
  }
  // Return the valid amount
  return validAmount;
};

  // Function to handle deposit button click
  const handleDeposit = () => {
  // Validate input amount
  const validAmount = updateBalance(amount);
  // Proceed only if amount is valid
  if (validAmount !== undefined) {
    // Dispatch deposit action with valid amount
    dispatch({ type: 'DEPOSIT', amount: validAmount });
    // Clear input field
    setAmount('');
  }
};
  // Function to handle withdraw button click
  const handleWithdraw = () => {
  // Validate input amount
  const validAmount = updateBalance(amount);
  // Proceed only if amount is valid
  if (validAmount !== undefined) {
    // Dispatch withdraw action with valid amount
    dispatch({ type: 'WITHDRAW', amount: validAmount });
    // Clear input field
    setAmount('');
  }
};

  return (
    <div className="account-balance">
      <h1>Account Balance App</h1>
      <p>Balance: R{state.balance.toFixed(2)}</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={() => dispatch({ type: 'ADD_INTEREST' })}>
        Add Interest
      </button>
      <button onClick={() => dispatch({ type: 'CHARGES' })}>Charges</button>
    </div>
  );
};

export default AccountBalance;
