window.gna = (function () {
  // Unsupported promises
  if (!(typeof Promise !== 'undefined' && Promise.toString().indexOf('[native code]') !== -1)) {
    throw new Error('Sorry, your browser doesn\'t support Promises.');
  }

  function gna (data) {

  }

  gna.cancelAction = { cancel: function () {} };

  gna.get = function (data, actions) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', data.url, true);

    return new Promise(function (resolve, reject) {
      xhr.onload = function () { resolve(xhr.responseText); };
      actions.cancel = function () {
        xhr.abort();
        reject(new Error('Cancelled'));
      };

      xhr.onerror = reject;
    });
  };


  // gna.get = function (data) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('GET', data.url, true);
  //
  //   return {
  //     requestObject: xhr,
  //     $promise: new Promise(function (resolve, reject) {
  //       xhr.send();
  //
  //       setTimeout(function () {
  //         xhr.onreadystatechange = function (e) {
  //           if (xhr.readyState === 4 && xhr.status === 200) {
  //             var response = JSON.parse(xhr.responseText);
  //             resolve(response);
  //           }
  //         };
  //       }, 20000);
  //     })
  //   };
  // };

  return gna;
})();
