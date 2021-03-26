/* eslint-disable prettier/prettier */
var _3DES = require('nodejs3des')
const Encrypt_LOOP_3DES = (string,key,n) =>{
  var result ="";
  for(let i=0;i<n;i++)
  {
    result = _3DES.encrypt(key, string)
    string = result
  }
  return result;
}
const Decrypt_LOOP_3DES = (string,key,n) =>{
  var result ="";
  for(let i=0;i<n;i++)
  {
    result = _3DES.decrypt(key, string)
    string = result
  }
  return result;
}

module.exports = {
    Encrypt_LOOP_3DES,Decrypt_LOOP_3DES
}
