#!/usr/bin/env node

var sign = require('./HMAC').sign
message = process.argv[2]
key = process.argv[3]
console.log(sign(message, key))
