let diesel = 24.53,
  gas = 22.25,
  lpg = 11.1;

const newLine = "\r\n";

const fuelText =
  "1-Diesel" +
  newLine +
  "2-Gas" +
  newLine +
  "3-LPG" +
  newLine +
  "SELECT YOUR FUEL TYPE";

let fuelType = prompt(fuelText);

if (fuelType == "1" || fuelType == "2" || fuelType == "3") {
  let fuelLiters = Number(prompt("Enter Fuel Liters : "));

  let balance = Number(prompt("Enter Your Balance : "));

  if (fuelType == "1") {
    let amountPayable = diesel * fuelLiters;

    if (amountPayable < balance) {
      alert(
        "Refueling successful " +
          newLine +
          "Remaining balance " +
          (balance - amountPayable)
      );
    } else {
      alert(
        "Your balance is not enough " +
          newLine +
          "Amount payable " +
          amountPayable +
          newLine +
          "Balance " +
          balance +
          newLine +
          "Missing amount " +
          (amountPayable - balance)
      );
    }
  } else if (fuelType == "2") {
    let amountPayable = gas * fuelLiters;

    if (amountPayable < balance) {
      alert(
        "Refueling successful " +
          newLine +
          "Remaining balance " +
          (balance - amountPayable)
      );
    } else {
      alert(
        "Your balance is not enough " +
          newLine +
          "Amount payable " +
          amountPayable +
          newLine +
          "Balance " +
          balance +
          newLine +
          "Missing amount " +
          (amountPayable - balance)
      );
    }
  } else if (fuelType == "3") {
    let amountPayable = lpg * fuelLiters;

    if (amountPayable < balance) {
      alert(
        "Refueling successful " +
          newLine +
          "Remaining balance " +
          (balance - amountPayable)
      );
    } else {
      alert(
        "Your balance is not enough " +
          newLine +
          "Amount payable " +
          amountPayable +
          newLine +
          "Balance " +
          balance +
          newLine +
          "Missing amount " +
          (amountPayable - balance)
      );
    }
  }
} else {
  alert("Please select a valid fuel type");
}
