var vhttp = require('http'); //digunakan untuk menampung semua nama file modul http
var vurl = require('url');
var vfs = require('fs'); //file stream

vhttp.createServer(function (req, res) {
	var akses = vurl.parse(req.url);
	if (akses.pathname == "/") {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		alamat = "index.html";
		vfs.createReadStream(alamat).pipe(res);
	} else {


		res.writeHead(404, {
			"Content-Type": "text/plain"
		});
		res.write("Selamat Datang di Node JS \n");
		res.write("URL-nya adalah" + req.url);
		res.end();
	}
}).listen(8889);

console.log("Server is Running");

//2xx means there is no problem within request and response
//4xx means there is a problem within the client side (no requested page exist, etc)
//5xx means there is a problem within the server side