//console.log('Loaded!');
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //Create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if (request.readystate===XMLHttpRequest.DONE){
            //take some action
            if (request.status===200){
                //200 means request successfully completed
                var counter=request.responseText;
                 //Render the variable in the correct span
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    //make request to counter endpoint
    request.open('GET', 'https://gpadmasu.imad.hasura-app.io/counter', true);
    request.send(null);
    
    // This code executes without making a request to the counter endpoint
    /* counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); */
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