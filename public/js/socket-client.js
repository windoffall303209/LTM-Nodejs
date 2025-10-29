// Socket.IO Client
let socket;

function initSocketConnection() {
  socket = io();

  socket.on("connect", () => {
    console.log("✅ Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });

  return socket;
}

// Initialize socket if not already done
if (typeof socket === "undefined") {
  socket = initSocketConnection();
}
