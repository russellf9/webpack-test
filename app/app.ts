declare var require: any;

import greeter = require('./greeter');
import $ = require('jquery');

require("!style!css!sass!./main.scss");

$(() => {
    $(document.body).html(greeter('World'));
});
