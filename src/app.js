import { Api } from './js/Api.js';
import { Log } from './js/Log.js';
import { Search } from './js/Search.js';
import { View } from './js/View.js';
import './scss/base.scss';

new Search(new View(), new Log(), new Api());
