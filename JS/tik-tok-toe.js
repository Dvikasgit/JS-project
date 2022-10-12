// Tik- Tok-Toe Js    
    
    let Digit = 1;

    function myfun1() {
            if (Digit == 1) {
        document.getElementById('btn1').value = "X";
    document.getElementById('btn1').disabled = true;
    Digit = 0;
            } else {
        document.getElementById('btn1').value = 'O'
                document.getAnimations('btn1').disabled = true
    Digit = 1;
            }
        }

    function myfun2() {
            if (Digit == 1) {
        document.getElementById("btn2").value = "X"
                document.getElementById('btn2').disabled = true;
    Digit = 0;
            } else {
        document.getElementById('btn2').value = "O";
    document.getElementById("btn2").disabled = true;
    Digit = 1;
            }


        }

    function myfun3() {
            if (Digit == 1) {
        document.getElementById("btn3").value = "X"
                document.getElementById("btn3").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn3").value = "O"
                document.getElementById("btn3").disabled = true;
    Digit = 1;
            }

        }


    function myfun4() {
            if (Digit == 1) {
        document.getElementById("btn4").value = "X"
                document.getElementById("btn4").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn4").value = "O"
                document.getElementById("btn4").disabled = true;
    Digit = 1;
            }
        }

    function myfun5() {
            if (Digit == 1) {
        document.getElementById("btn5").value = "X"
                document.getElementById("btn5").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn5").value = "O"
                document.getElementById("btn5").disabled = true;
    Digit = 1;
            }
        }

    function myfun6() {
            if (Digit == 1) {
        document.getElementById("btn6").value = "X"
                document.getElementById("btn6").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn6").value = "O"
                document.getElementById("btn6").disabled = true;
    Digit = 1;
            }
        }

    function myfun7() {
            if (Digit == 1) {
        document.getElementById("btn7").value = "X"
                document.getElementById("btn7").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn7").value = "O"
                document.getElementById("btn7").disabled = true;
    Digit = 1;
            }
        }

    function myfun8() {
            if (Digit == 1) {
        document.getElementById("btn8").value = "X"
                document.getElementById("btn8").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn8").value = "O"
                document.getElementById("btn8").disabled = true;
    Digit = 1;
            }
        }

    function myfun9() {
            if (Digit == 1) {
        document.getElementById("btn9").value = "X"
                document.getElementById("btn9").disabled = true;
    Digit = 0;
            } else {
        document.getElementById("btn9").value = "O"
                document.getElementById("btn9").disabled = true;
    Digit = 1;
            }
        }

function myget() {
        document.getElementsByClassName("buttons").value = "";
        location.reload();

}

function match() {
        let a = document.getElementById("btn1").value;
        let b = document.getElementById("btn2").value;
        let c = document.getElementById("btn3").value;
        let d = document.getElementById("btn4").value;
        let e = document.getElementById("btn5").value;
        let f = document.getElementById("btn6").value;
        let g = document.getElementById("btn7").value;
        let h = document.getElementById("btn8").value;
        let i = document.getElementById("btn9").value;
        
        if (a == "X" && b == "X" && c == "X") {
                alert("x is winner ");  
                location.reload();

               
        }
        else if (d == "X" && e == "X" && f == "X") {    
                alert("x is winner ");
                location.reload();              
        }
        else if (g == "X" && h == "X" && i == "X") {
                alert("x is winner ");
                location.reload();
        }
        else if (a == "X" && d == "X" && g == "X") {
                alert("x is winner ");
                location.reload();
        }
        else if (b == "X" && e == "X" && h == "X") {
                alert("x is winner ");
                location.reload();
        }
        else if (c == "X" && f == "X" && i == "X") {
                alert("x is winner ");
                location.reload();
        }
        else if (a == "X" && e == "X" && i == "X") {
                alert("x is winner ");
                location.reload();
        }
        else if (c == "X" && e == "X" && g == "X") {
                alert("x is winner ");
                location.reload();
                
        }





        else if (a == "O" && b == "O" && c == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (d == "O" && e == "O" && f == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (g == "O" && h == "O" && i == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (a == "O" && d == "O" && g == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (b == "O" && e == "O" && h == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (c == "O" && f == "O" && i == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (a == "O" && e == "O" && i == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (c == "O" && e == "O" && g == "O") {
                alert("O is winner ");
                location.reload();

        }
        else if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "" && g !== "" && h !== "" && i !== "") {
                alert("Game is Draw please start again");
                location.reload();

        }
       

}
