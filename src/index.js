// 09-modules.js 불러오기
// import './chapter/09-modules.js';

import { currencyKR } from './utils/index.js';

let money = 10_908_000;

document.querySelector('output').textContent = currencyKR(money);
