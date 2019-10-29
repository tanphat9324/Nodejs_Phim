const jwt = require('jsonwebtoken');
const fs = require('fs');
const contant = require('../config/constants');

module.exports = {
  signToken: () => {
      let payload = {
        test: 'test'
      };


    let privateKEY = fs.readFileSync('private.key','utf8');
    let publicKEY = fs.readFileSync('public.key','utf8');

    let i = '';
    let s = '';
    let a = '';

    let signOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: '12h',
      algorthm:'RS256'
    };
    const token = jwt.sign(payload, privateKEY, signOptions);
    return token;
  }
}