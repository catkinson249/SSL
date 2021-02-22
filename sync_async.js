var http = require('http');     //*  mispelled
// callback runs at later time
var myname = function () {      //*  mispelled
    console.log("Here is my IP address");
}
async function callHttpbin() {        //*  mispelled,   //*   async promise
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function (response) {
                var str = "";
                response.setEncoding('utf8');
                response.on('data', function (data) {
                    str += data;
                });
                response.on('end', function () {
                    var result = JSON.parse(str);
                    myips = result.origin;
                    resolve(myips) //* 
                });
            }
        );
    });

    let result = await promise;
    return result;      //*  returns value AFTER promise is fulfilled
}
async function executeAsyncTask() {     //* async starts tasks
    const valueA = await callHttpbin()
    myname();
    const valueB = valueA;      //* to print IP out twice
    console.log(valueB + " " + valueA)
    // Output Here is my IP address 149.24.160.1, 149.24.160.1

}       //*     end function executing task

executeAsyncTask();     //*     call function to execute task