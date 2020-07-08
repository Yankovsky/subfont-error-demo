require('https').get('https://fonts.googleapis.com/css?family=Roboto:300&text=x%09%20()%2C-.%2F0123456789%3A%3BACFGIPRSTWYabcdeghijklmnoprstuy~%C2%A0%C2%AB%C2%BB%D0%90%D0%91%D0%92%D0%93%D0%94%D0%95%D0%97%D0%98%D0%99%D0%9A%D0%9B%D0%9C%D0%9D%D0%9E%D0%9F%D0%A0%D0%A1%D0%A2%D0%A3%D0%A4%D0%A5%D0%A6%D0%A7%D0%A8%D0%AB%D0%AC%D0%AF%D0%B0%D0%B1%D0%B2%D0%B3%D0%B4%D0%B5%D0%B6%D0%B7%D0%B8%D0%B9%D0%BA%D0%BB%D0%BC%D0%BD%D0%BE%D0%BF%D1%80%D1%81%D1%82%D1%83%D1%84%D1%85%D1%86%D1%87%D1%88%D1%89%D1%8B%D1%8C%D1%8D%D1%8E%D1%8F%D1%91%E2%80%94%E2%82%BD%E2%84%96&format=woff2', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
  });

})
