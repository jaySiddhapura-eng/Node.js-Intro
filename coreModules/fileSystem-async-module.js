const { readFile, writeFile } = require('fs');

// usage of callback function

let contentOfFile1;
let contentOfFile2;

// read first file in async
readFile('./sampleContentFolder/file1.txt','utf-8', (err, result)=>{
    if(err){
        return
    }
    contentOfFile1 = result;

    // if first file scanned successfully then read the second file
    readFile('./sampleContentFolder/file2.txt','utf-8',(err, result)=>{
        if(err){
            return
        }
        contentOfFile2 = result;

        //if both the files are scanned successfully then write into new file
        writeFile('./sampleContentFolder/result-async.txt',
        `here is the result ${contentOfFile1}, ${contentOfFile2}`,
        {flag: 'a'},
        (err, result)=>{
            if(err){
                return
            }
            console.log(result);
        }
        )
    })

})