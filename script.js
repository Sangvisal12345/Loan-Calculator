function calculateLoan() {
    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const loanTerm = document.getElementById('loan-term').value;
  
    // Calculate monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;
  
    // Calculate number of payments
    const numberOfPayments = loanTerm * 12;
  
    // Calculate monthly payment
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
    // Calculate total interest paid
    const totalInterest = monthlyPayment * numberOfPayments - loanAmount;
  
    // Calculate total amount repaid
    const totalAmount = monthlyPayment * numberOfPayments;
  
    // Display results
    document.getElementById('monthly-payment').textContent = `$ ${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-interest').textContent = `% ${totalInterest.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `$ ${totalAmount.toFixed(2)}`;
  }
    