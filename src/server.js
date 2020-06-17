import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

import app from './app';

app.listen(3333);
