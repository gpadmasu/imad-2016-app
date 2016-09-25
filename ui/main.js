console.log('Loaded!');
var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
    // This code executes without making a request to the counter endpoint
    counter = counter+1;
    var spoan=doucment.getElementById("count");
    span.innerHTML=counter.toString();
    
    //make request to counter endpoint
    //capture the response and store it in a variable
    //Render the variable in the coreect span
};