let newLine = "\r\n";
let balance = 1000;

let text =
  "1-Balance Viewing" +
  newLine +
  "2-Withdrawing Money" +
  newLine +
  "3-Deposit Money" +
  newLine +
  "4-Exit" +
  newLine +
  "Please select a value: ";

let election = prompt(text);

switch (election) {
  case "1":
    alert("Your Balance : " + balance);
    break;
  case "2":
    let amountToWithdraw = Number(
      prompt("Enter the amount you want to withdraw : ")
    );
    if (amountToWithdraw < balance) {
      balance = balance - amountToWithdraw;
      alert("Remaining balance : " + balance);
    } else {
      alert(
        "You cannot withdraw more than your balance!" +
          newLine +
          "Balance : " +
          balance +
          "" +
          "Amount to Withdraw" +
          amountToWithdraw
      );
    }
    break;
  case "3":
    let amountToDeposit = Number(prompt("Enter the amount to be deposited : "));
    balance = balance + amountToDeposit;
    alert("Your current balance : " + balance);
    break;
  case "4":
    alert("System logged out.");
    break;
  default:
    alert("Please enter a value between 1-4");
    break;
}
