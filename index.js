const events = document.getElementById("events-table");
console.log(events);

const URL =
    "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";
const request = new XMLHttpRequest();

const promiseSeries = new Promise(function (resolve, reject) {
    request.open("GET", URL);
    request.onload = function () {
        if (request.status === 200) {
            let response = JSON.parse(request.response);
            let count = 1;
            let contador = {};
            let elementcount = 0;
            let squirrelcount = 0;
            response.forEach((row) => {
                for (let index = 0; index < row.events.length; index++) {
                    elementcount++;
                    if (!(row.events[index] in contador))
                        contador[row.events[index]] = {
                            "true-true": 0,
                            "true-false": 0,
                            "false-true": 0,
                            "false-false": 0,
                        };
                    if (row.squirrel) {
                        contador[row.events[index]]["true-true"]++;
                        squirrelcount++;
                    } else contador[row.events[index]]["true-false"]++;
                }

                let rowSquirrel = document.createElement("tr");
                let number = document.createElement("td");
                let numberData = document.createTextNode(count);
                let arrEve = document.createElement("td");
                let arrEveData = document.createTextNode(row.events);
                let squirr = document.createElement("td");
                let squirrData = document.createTextNode(row.squirrel);
                number.appendChild(numberData);
                rowSquirrel.appendChild(number);
                arrEve.appendChild(arrEveData);
                rowSquirrel.appendChild(arrEve);
                squirr.appendChild(squirrData);
                rowSquirrel.appendChild(squirr);
                if (row.squirrel) rowSquirrel.style.backgroundColor = "red";
                events.appendChild(rowSquirrel);
                count++;
            });
            for (let index = 0; index < contador.length; index++) 
            {
                const element = array[index];
                
            }
        } else {
            reject(request.statusText);
        }
    };
    request.send();
});

promiseSeries.then(
    (succ) => console.log(succ),
    (err) => console.log(err)
);
