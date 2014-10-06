var loadtest = require('loadtest');
var options = {
    url: 'http://jrousseau.norman.wdtinc.com:2525/employee/2/task',
    maxRequests: 10000,
    concurrency: 70
};
loadtest.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log(result);
});
