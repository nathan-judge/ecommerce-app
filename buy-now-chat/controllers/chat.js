export default (http) => {
  const io = require('socket.io')(http, {
    cors: {
      origin: ["http://localhost:3000"],
    }
  });
  //on connection
  io.on("connection", (socket) => {
    console.log(`Guest connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log("User has disconnected", socket.id)
      
    });

    socket.on("send-message", (message) => {
      socket.broadcast.emit("receive-message", message);
    });
    

    
  });
};