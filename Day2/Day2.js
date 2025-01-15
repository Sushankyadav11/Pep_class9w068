let balance = 0;

function deposit(amount) {
  balance += amount;
  console.log(`Deposited $${amount}. Balance: $${balance}`);
}

function withdraw(amount) {
  if (amount > balance) {
    console.log('Insufficient balance.');
  } else {
    balance -= amount;
    console.log(`Withdrew $${amount}. Balance: $${balance}`);
  }
}

deposit(1000);
withdraw(500);
withdraw(600);
