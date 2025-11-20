let socket: WebSocket | null = null;

export function connectSocket(token: string) {
  socket = new WebSocket(`ws://localhost:3000/ws?token=${token}`);

  socket.onopen = () => console.log("WebSocket connected");
  socket.onclose = () => console.log("WebSocket disconnected");

  return socket;
}

export function getSocket() {
  return socket;
}
