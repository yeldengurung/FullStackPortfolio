function display(data){
    document.getElementById('screen').value +=data;
    return data
}

function solve(){
    let screen = document.getElementById('screen');
    let data = screen.value;
    let result = eval(data);
    screen.value= result;
    return result
}

function clearScreen(){
    let screen = document.getElementById('screen');
    screen.value= "";
    console.log("Clear was clicked")
}
