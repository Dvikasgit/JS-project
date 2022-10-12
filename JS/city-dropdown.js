
function data() {
    let First = document.getElementById("first").value
    console.log(First);

    let Second = document.getElementById("second").value
    console.log(Second)


    let Third = document.getElementById("third").value
    console.log(Third)

    if (First != Second && First != Third && Second != Third && Second != "") {
        alert("Your form is submiited.....")
    }
    else if (First != "" && Second == "" && Third == "") {
        alert("Your form is submiited ")
    }
    
    else if (First == "" && Second == "" && Third == "") {
        alert("Please select city ")
    }
    else {
        alert("Please select diffent city in all filed")

    }
}

function changeAble() {
    let a = document.getElementById("first").value
    let b = document.getElementById("second")
    console.log(a)

    if (a !== "") {
        b.removeAttribute("disabled")
       
    }
}

function changeFun1() {
    let a = document.getElementById("first")
    let c = document.getElementById("second").value
    let d = document.getElementById("third")
    console.log(c)
    if (c !== "")
        a.setAttribute("disabled","disabled")
        d.removeAttribute("disabled")
}

function changefun2(){
    let c = document.getElementById("second")
        c.setAttribute("disabled","disabled")

}

