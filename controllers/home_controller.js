module.exports.home = function(req, res){
    return res.end('<h1>Hi</h1>');
}

module.exports.practice = function(req, res){
        return res.end('<p>My Personal practice page</p>')
}