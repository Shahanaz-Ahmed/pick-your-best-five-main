document.getElementById("calculate-btn").addEventListener("click", function () {
  // Expense per player
  const expencePerPlayer = document.getElementById("expense-calculation");
  const expenseAmountString = expencePerPlayer.value;
  const expenseAmount = parseFloat(expenseAmountString);

  const totalExpense = document.getElementById("expense");

  totalExpense.innerText = expenseAmount;

  //per player * 5
  const totalExpensePlayer = expenseAmount * 5;
  totalExpense.innerText = totalExpensePlayer;

  expencePerPlayer.value = "";

  //managercost
  document.getElementById("btn-total").addEventListener("click", function () {
    const managerCost = document.getElementById("manager-cost");
    const costManagerString = managerCost.value;
    const costOfManager = parseFloat(costManagerString);
    //coach
    const coachCost = document.getElementById("coach-cost");
    const costCoachString = coachCost.value;
    const costOfCoach = parseInt(costCoachString);

    const totalAmount = document.getElementById("total-cost");

    //total expence = manager + coach + player expence
    const totalCost = costOfManager + costOfCoach + totalExpensePlayer;
    totalAmount.innerText = totalCost;
    managerCost.value = "";
    coachCost.value = "";
  });
});
