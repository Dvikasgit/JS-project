var string =""
var value="false"

const clickHandler = (event)=>{
    console.log(event) 
    string =string+event
    document.getElementById('first').value=string
    console.log(string)
    value="true"
}
const clickHandler1 = (event)=>{
    if(value==='true'){
        string+=event.target.value
        value="false"
    }
    
}

const clearDis = () => {
    string=""
    document.getElementById('first').value=string
}

const calculate = (e) => {
    console.log(e.target)

     let result = eval(string).toString()
    string = result
    document.getElementById('first').value=result
    
}

