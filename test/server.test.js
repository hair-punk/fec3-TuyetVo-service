const axios = require('axios');

  test('Should pass expect when making get request', () => {
    axios.get('http://localhost:3007/6')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array');
        expected(res.data.length).to.equal(3);
      })
  });
