const http =require("http");
const url="http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=49de35b807b87c29e2319f101ab892a6";
var data;

const server = http.createServer(function(req, res){
  var request=require("request");
  request(url,function(err, response, body){
    data = JSON.parse(body);
    res.write("<h1>City - "+data['name']+"</h1>");
    res.write("<h2>Temp in celcius - "+data.main['temp']+"</h2>");
    res.write("<h3>Sunset - "+new Date(data.sys['sunset']*1000)+"</h3>");
    res.end();
  });
});
server.listen(5000);