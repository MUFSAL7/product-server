//importing json.server
const jsonserver=require("json-server")

//creating server
const mdbServer=jsonserver.create()

//initializing middleware
const middleware=jsonserver.defaults()
//creating router instance for resources
const router=jsonserver.router("db.json")

//configuring middleware and router to server
mdbServer.use(middleware)
mdbServer.use(router)

//setting port number
const PORT = 3000 || process.env.PORT;

//calling listen methode with server for activating server
mdbServer.listen(PORT,()=>{
    console.log("Server running at PORT:"+PORT);
    
})