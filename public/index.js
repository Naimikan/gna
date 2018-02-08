gna.get({
  url: 'https://ipinfo.io/json'
})




var request = gna.get({
  url: 'https://ipinfo.io/json'
});

console.log(request);

setTimeout(function () {
  request.requestObject.abort();

  console.log(request);
}, 10000);
