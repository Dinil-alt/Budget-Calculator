function tologin(){
    inner.innerHTML =`
    <div class="row w-100 mt-5">
    <div class="col-1"></div>
    <div class="border bord1 border-2 border-info rounded pt-5 pb-2">
        <p class="log">login</p>
        <input class="user form-control border border-primary w-75 mt-1 ms-5" id="username" placeholder="Username" type="text">
        <input class="user form-control border border-primary w-75 mt-4 ms-5" id="password" placeholder="Password" type="text">
        <button class="btn btn-primary w-75 mt-3 ms-5" onclick="login()">Login</button>
        <button class="btn text-success w-75 mt-3 ms-5">Reset Password</button>
    </div>
    <div class="col-1"></div>
</div>`
}
function toregister(){
    inner.innerHTML = `<div class="row w-100 mt-5">
    <div class="col-1"></div>
    <div class="border bord2 border-2 border-success rounded pt-2 pb-2" >
        <p class="reg">Register</p>
        <input class="user form-control border border-success w-75 mt-1 ms-5" id="user" placeholder="Username" type="text">
        <input class="user form-control border border-success w-75 mt-3 ms-5" id="mail" placeholder="Email Id" type="email">
        <input class="user form-control border border-success w-75 mt-3 ms-5" id="pass" placeholder="Password" type="password">
        <input class="user form-control border border-success w-75 mt-3 ms-5" id="pass1" placeholder="Re-enter password" type="password">
        <button class="btn btn-success w-75 mt-3 ms-5 mb-3" onclick="register()">Register</button>
    </div>
    <div class="col-1"></div>
</div>`
}
function register() {
    const user = document.getElementById("user");
    const mail = document.getElementById("mail");
    const password = document.getElementById("pass");
    const repass = document.getElementById("pass1");
    if(password.value==repass.value){
        const registerData = {
            username: user.value,
            mail:mail.value,
            password:password.value
        }

        if(registerData.user==""||registerData.mail==""||registerData.password==""){
            alert("Fill all the feilds");
        }
        else{
            if(registerData.user in localStorage){
                alert("Already  registered");
            }
            else{
                localStorage.setItem(registerData.username,JSON.stringify(registerData));
                alert("Regestered successfully");
            }
        }
    }
    else{
        alert("password mismatch");
    }


}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username==""||password==""){
        alert("Fill all the feilds");
    }
    else{
        if(username in localStorage){
            const loginData=JSON.parse(localStorage.getItem(username));
            if(loginData.password==password){
                alert("logged in successfully");
                window.location='./homepage.html'
            }
            else{
                alert("Check your password")
            }
        }
        else{
            alert("Check the username")
        }
    }


}

function PrintTable() {
    var printWindow = window.open('', '', 'height=600,width=1000');
    printWindow.document.write('<html><head><title>Table Contents</title>');

    //Print the Table CSS.
    var table_style = document.getElementById("table_style").innerHTML;
    printWindow.document.write('<style type = "text/css">');
    printWindow.document.write(table_style);
    printWindow.document.write('</style>');
    printWindow.document.write('</head>');

    //Print the DIV contents i.e. the HTML Table.
    printWindow.document.write('<body>');
    var divContents = document.getElementById("dvContents").innerHTML;
    printWindow.document.write(divContents);
    printWindow.document.write('</body>');

    printWindow.document.write('</html>');
    printWindow.document.close();
    printWindow.print();
}

function logout(){
    window.location ="./index.html"
}


function enterBudget(){
    const budget = document.getElementById("budget").value;
    inner1.innerHTML =`<div class="budg">
                            <p>${budget}</p>
                        <div>`
    
}

let expense_record =[];
var exp=0;

function enterData(date='N/A',event='N/A', amount='N/A') {
    const budget = document.getElementById("budget").value;
    var date = document.getElementById("date").value;
    console.log(date);
    var event = document.getElementById("event").value;
    console.log(event);
    var amount = document.getElementById("amount").value;
    console.log(amount);

    if(date==""||event==""||amount==""){
        alert("Please fill all feilds");
    }
    else{
        // let inputs = [date,event,amount];
      exp = Number(exp)+Number(amount);
      inner2.innerHTML =`<div class="bu">
      <p>${exp}</p>
      <div>`
      bala = Number(budget)-exp;
      inner3.innerHTML =`<div class="bu">
      <p>${bala}</p>
      <div>`
      tot.innerHTML = `<div>Total Amount: ${exp}</div>`
      expense_record.push({date,event,amount})
      renderTable();
       }
    }
    

  function renderTable(){
    if(expense_record.length==1){
        expense_record.forEach((expense)=>{
            table_style.innerHTML+=`<tr >
                <td>${expense.date}</td>
                <td>${expense.event}</td>
                <td>${expense.amount}</td>
            </tr>`
        });
    }
    else{
        expense_record.reduceRight((expense)=>{
            table_style.innerHTML+=`<tr >
                <td>${expense.date}</td>
                <td>${expense.event}</td>
                <td>${expense.amount}</td>
            </tr>`
        });
    }
}


//   buttn.addEventListener('click',enterData)