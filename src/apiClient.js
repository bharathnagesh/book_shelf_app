import superagent from 'superagent';
const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class ApiClient {
  constructor() {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers = {}, fields } = {}) => new Promise((resolve, reject) => {
        headers['Accept'] = "application/json;charset=utf-8";
        let request = superagent[method](path)
          .set(headers);

        if (params) {
          request.query(params);
        }

        if (headers) {
          request.set(headers);
        }

        if (fields) {
          fields.forEach(item => request.field(item.key, item.value));
        }

        if (data) {
          headers['Content-Type'] = "application/json";
          request.set(headers);
          request.send(data);
        }

        request.end( (err, response = {}) => {
          if (err) {
            reject(response.body || err);
          }
          else {
            resolve(response.body);
          }
        });
      });
    });
  }

  empty() {}
}
