export class Http {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(endpoint: string): Promise<object> {
    return fetch(this.baseURL + endpoint).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    });
  }

  put(endpoint: string, body: object): Promise<object> {
    return this._send("put", endpoint, body);
  }

  post(endpoint: string, body: object): Promise<object> {
    return this._send("post", endpoint, body);
  }

  delete(endpoint: string, body: object): Promise<object> {
    return this._send("delete", endpoint, body);
  }

  _send(method: string, endpoint: string, body: object): Promise<object> {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
