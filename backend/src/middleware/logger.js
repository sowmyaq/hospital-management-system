import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logStream = fs.createWriteStream(path.join(logsDir, 'app.log'), { flags: 'a' });

const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream: logStream,
});

const morganConsole = morgan('dev');

export { morganMiddleware, morganConsole };
