const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors');
var port = 3000;
let {PythonShell} = require('python-shell');

app.use(express.static(path.join(__dirname)));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


app.listen(port, function () {
    console.log(`server running on port ${port}`);
});


app.post('/submit', executeData); 

function executeData(req, res) {
    var fileStructure = req.query.fileStructure;
    var environment = req.query.environment;
    var keywords = req.query.keywords;
    if(!fileStructure || !environment) {
        res.send('fail');
    }
    else {
        let options = { args : [fileStructure],
                        pythonPath: environment};
        if(keywords) {
            options.args = options.args.concat([keywords]);
        }
        var child = PythonShell.run('./DirectoryToGraph.py', options, function(err, data) {
            if(err) res.send('post request failed');
            else {
                res.send('success');
            }
        }); 
        child.on('error', function(err) {
            res.send('post request failed');
        });
    }
}


