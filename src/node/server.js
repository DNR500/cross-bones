import server from './httpapp';

process.title = 'cross-bones-node-service';

server.start(3000, 'build/public/');
