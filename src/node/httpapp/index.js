import express from 'express';
import { Server } from 'http';
import path from 'path';

let app = express(),
    http = Server(app),
    server;

function start(port, staticAssetsDirectory, callback) {
    port = port || 3000;

    let staticPath = path.resolve(__dirname, '../../../', staticAssetsDirectory)

    app.use(express.static(staticPath));
    
    server = http.listen(port, ()=>{
        if(callback){
            callback();
        }
    });
}

function stop(){
    if(server){
        server.close();
    }
}

export default {
    start,
    stop,
    app,
    http
};