# Live Chat App - valós idejű üzenetküldő alkalmazás.
## Használat
A `backend\src`, valamint a `frontend\live-chat-app\src` mappában 
```sh
npm install
```
kiadása, majd 
```
npm run dev
```
vagy VSCode-ban indítás a `package.json`ban található play gombok megnyomásával
vagy a `package.json`ban található parancsok kiadása a terminálban.
## Routes:
http://localhost:3001/

http://localhost:3001/api/register

http://localhost:3001/api/login

http://localhost:3001/api/users

http://localhost:3001/api/messages

http://localhost:3001/api/messages/conversation/:userId

http://localhost:3001/api/messages/thread/:id

http://localhost:3001/api/messages/reply

## Api endpoints:

POST /api/register
POST /api/login
GET /api/users
POST /api/messages
GET /api/messages
GET /api/messages/conversation/:userId
GET /api/messages/thread/:id
POST /api/messages/reply