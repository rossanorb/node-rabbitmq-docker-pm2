exports.JSONtoBuffer = function(obj){
    return Buffer.from(JSON.stringify(obj));    
}

exports.BufferToJSON = function(buff){
    return JSON.parse(buff.toString());
}