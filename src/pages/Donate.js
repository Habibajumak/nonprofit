import React, { useState } from 'react';
import './Donate.css';

function Donate() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    { name: 'CRDB', account: '1234567890', swift: 'BKA123' },
    { name: 'PBZ', account: '0987654321', swift: 'BKB456' },
    { name: 'NMB', account: '0987654321', swift: 'BKB789' },
  ];

  const mobilePayments = [
    { name: 'MPESA', number: '123456' },
    { name: 'Airtel Money', number: '789012' },
    { name: 'HaloPesa', number: '023486' },
    { name: 'TigoPesa', number: '176546' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'paymentMethod') {
      setPaymentMethod(value);
      setSelectedBank('');
    }
    if (name === 'selectedBank') setSelectedBank(value);
  };

  return (
    <div className="donate">
      <h2>Donation Account Details</h2>
      <br></br>
      <p>Donate today, change tomorrow. Your contribution, their transformation. 
        Give hope, make a difference. Together, we can change lives.
         Every penny counts, every life matters.
          Join us in creating a better world.</p>
          <br></br>
      <form>
        <select name="paymentMethod" value={paymentMethod} onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
          <option value="mobile-payment">Mobile Payment</option>
        </select>
        {paymentMethod === 'bank-transfer' && (
          <select name="selectedBank" value={selectedBank} onChange={handleChange} required>
            <option value="">Select Bank</option>
            {banks.map((bank, index) => (
              <option key={index} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
        )}
      </form>
      {paymentMethod === 'credit-card' && (
        <div className="payment-details">
          <h3>Credit Card Details</h3>
          <p>Please proceed with your credit card payment through our secure portal.</p>
        </div>
      )}
      {paymentMethod === 'paypal' && (
        <div className="payment-details">
          <h3>PayPal Details</h3>
          <p>Please proceed with your PayPal payment through our secure portal.</p>
        </div>
      )}
      {paymentMethod === 'bank-transfer' && selectedBank && (
        <div className="payment-details">
          <h3>{selectedBank} Details</h3>
          {banks
            .filter((bank) => bank.name === selectedBank)
            .map((bank, index) => (
              <div key={index}>
                <p>Account Number: {bank.account}</p>
                <p>SWIFT Code: {bank.swift}</p>
              </div>
            ))}
        </div>
      )}
      {paymentMethod === 'mobile-payment' && (
        <div className="payment-details">
          <h3>Mobile Payment Details</h3>
          {mobilePayments.map((payment, index) => (
            <div key={index}>
              <p>{payment.name}: {payment.number}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Donate;
