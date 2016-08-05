module.exports = {
  
  // your code here
  simplePromise:simplePromise,
  add10Promise:add10Promise,
  reject:reject,
  sum50:sum50,

}

function simplePromise( bool ) {

  return new Promise( function (resolve, reject) {
      bool ? resolve('OK') : resolve('BAD');
  })

}

function add10Promise( value ) {
  value > 0 ?  value += 10 : value = 0 + 10;

  return new Promise( function (resolve, reject) {
      resolve(value);
  })

}

function reject( value ) {

  return new Promise( function ( resolve, reject) {
      reject( value );
  })
}


function sum50( value ) {

  return new Promise( function ( resolve, reject) {
      resolve( 50 );
  })
}
