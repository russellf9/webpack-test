import greeter = require('./greeter');
import $ = require('jquery');

require('./main.css');

$(() => {
    $(document.body).html(greeter('World'));
});
