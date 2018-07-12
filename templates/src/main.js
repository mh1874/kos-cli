import KOS from 'kos-core';
import createLogger from 'redux-logger';
import '@/themes/index.less';
import Router from './router';

KOS.use(createLogger);

KOS.start(Router, '#app');
