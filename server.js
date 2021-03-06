var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title: 'Article One | KSR',
    date: '20th Sep, 2016',
    heading1: 'Om Namo Narayanaya',
    heading2: 'Welcome! This is article ONE',
    content:` 
            <p> Paragraph One </p>
            <p> Paragraph Two </p>
            <p> Paragraph Three </p>`
    },
    'article-two':{
    title: 'Article Two | KSR',
    date: '21st Sep, 2016',
    heading1: 'Om Namo Yamunaya',
    heading2: 'Welcome! This is article TWO',
    content:` 
            <p> Paragraph One </p>
            <p> Paragraph Two </p>
            <p> Paragraph Three </p>`
    },
    'article-three':{
    title: 'Article Three | KSR',
    date: '22nd Sep, 2016',
    heading1: 'Om Namo Ramanujaya',
    heading2: 'Welcome! This is article THREE',
    content:` 
            <p> Paragraph One </p>
            <p> Paragraph Two </p>
            <p> Paragraph Three </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading1=data.heading1;
    var heading2=data.heading2;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div> <a href="/"> Home </a></div>
                <hr/>
                <div class="center text-big bold"> ${heading2}. </div>
                <h3> ${heading1} </h3>
                <div> ${date} </div>
                <div> ${content} </div>
            </div>
        </body>
</html>`
;
return htmlTemplate;
}

app.get('/test-db/', function(req,res) {
    //make a select request
    
    // return response with the results
});
function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,'salt',10000,512,'sha512');
    // return hashed and make it printable and readable on our screen 
    return hashed.toString('hex'); 
}

// createEndpoint
app.get('/hash/:input', function(req,res) {
    //var hashedString=hash(req.params.input,salt);
    var hashedString=hash(req.params.input,'this-is-some-random-string');
    res.send(hashedString);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});

var names=[];
/* This commented code can appear even towards the end */
/* app.get('/submit-name/:name', function(req,res){
    //Get the names from the request
    var name = req.params.name;
    //Now to convert this array to a string,
    // we will use JavaScript Object Notation(JSON)
    names.push(name);
    res.send(JSON.stringify(names));
}); */

/* This code with QUERY parameter needs to appear before the 
app.get('/:articleName'.... This is due to Express and the way it handles URLs.*/
app.get('/submit-name', function(req,res){// /submit-name/name?name-xxxx
    //Get the names from the request
    var name = req.query.name;
    //Now to convert this array to a string,
    // we will use JavaScript Object Notation(JSON)
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

/*app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});
app.get('/article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});*/

/* app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
}); */

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/mypic-edex.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mypic-edex.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
