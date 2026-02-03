import { Server } from './model/server';
import { PORT } from './config/envs';

const server = new Server( Number(PORT) );
server.listen();