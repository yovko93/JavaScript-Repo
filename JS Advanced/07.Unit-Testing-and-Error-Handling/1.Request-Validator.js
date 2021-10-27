function solve(obj) {
    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || !/^([a-zA-Z\.]+|\*)$/gm.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!obj.version || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (obj.message === undefined || (/[<>\&\\'"]/gm.test(obj.message))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));