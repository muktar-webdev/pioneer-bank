// --Login Button Event Handler--//
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


// --Deposit Button event handler--//
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");

    // --calling updateSpanText()--//
    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);
     
    // --Deposit amount--//
   /* const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = currentDepositNumber + depositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;
    
    //--Current Balance--//
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance; */

    // --For after deposit null value--//
    document.getElementById("depositAmount").value = "";
     
})


// --Withdraw Button Event Handler--//
const withrowBtn = document.getElementById("addWithrow");
withrowBtn.addEventListener("click",function(){
    // const withrowAmount = document.getElementById("withrowAmount").value;
    // const withrowNumber = parseFloat(withrowAmount);
    const withrowNumber = getInputNumber("withrowAmount");
    

    // --for shortcut of withrow & balance--//
    updateSpanText("currentWithrow",withrowNumber)
    updateSpanText("currentBalance", -1 * withrowNumber);

   // --Withrow Amount--//
    // const currentWithrow = document.getElementById("currentWithrow").innerText;
    // const currentNumber = parseFloat(currentWithrow);
    // const totalWithrow = withrowNumber + currentNumber;
    // document.getElementById("currentWithrow").innerText = totalWithrow;
    

    // --Current Balance--//
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - withrowNumber;
    // document.getElementById("currentBalance").innerText = totalBalance; 

    // --For after deposit null value--//
    document.getElementById("withrowAmount").value = "";  
})
// function updateSpanText2(id,withrowNumber){
//     const currentWithrow_Balance = document.getElementById(id).innerText;
//     const currentWithrow_Balance_Number = parseFloat(currentWithrow_Balance);
//     const totalWithrow_Balance = currentWithrow_Balance_Number + withrowtNumber;
//     document.getElementById(id).innerText = totalWithrow_Balance;
// }

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// --For avoiding Sametype Work--//
function updateSpanText(id,depositNumber){
    const currentDeposit_Balance = document.getElementById(id).innerText;
    const currentDeposit_Balance_Number = parseFloat(currentDeposit_Balance);
    const totalDeposit_Balance = currentDeposit_Balance_Number + depositNumber;
    document.getElementById(id).innerText = totalDeposit_Balance;

}