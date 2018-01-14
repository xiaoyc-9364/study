
function call(res) {
    console.log('call');
}
module.exports = {
    controller(req, res) {
        res.write('发送');
        call('hello',req, res);
        res.end();
    }
};