const http = require('http');
const fs = require('fs');

// console.log(http.createServer)
// console.log(fs)

const server = http.createServer((request, response) => {
  // console.log(response);
  // console.log(request.method);
  
  if(request.method === "GET") {
    fs.readFile('./index.html', (err,data)=> {
      response.writeHead(200, {"content-type": "text/html"});
      response.write(data);
      response.end();
      if(err) throw err;
    });
  } else if(response.method === "POST") {
    request.on('data',(data)=> {
      response.writeHead(200,{'Content-Type' : "text/html"});
      response.write(data);
      response.end();
    })
  }
})

server.listen(3213,()=> {
  console.log("요청이 오기전까진 listen, 그저 듣고만 있습니다")
  console.log("패킷 전송 방식이기 때문에, 전화와 다르게 통화기능은 없습니다")
  console.log("하지만 요청은 받아 줍니다 ")
})