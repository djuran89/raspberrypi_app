const http = require("http");
const app = require("./bin/server");

const PORT = 3000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
