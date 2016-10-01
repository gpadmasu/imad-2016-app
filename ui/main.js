//console.log('Loaded!');
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //make request to counter endpoint
    //capture the response and store it in a variable
    //Render the variable in the correct span
    
    // This code executes without making a request to the counter endpoint
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('name');
submit.onclick = function(){
    // make a request to the server and send the name
    
    //capture a list of names and render it as a list
    var names=['name1', 'name2', 'name3', 'name4'];
    var list='';
    for (var i=0; i<names.length; i++) list = '<li>' +names[i] +'<li>';
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};