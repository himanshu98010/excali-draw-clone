import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 8080 });
ws.on("connection", () => {
  ws.on("message", (data) => {});
});
