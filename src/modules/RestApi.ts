class RestApi {
  private readonly URL = 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api';

  public async httpMethod(method: string, url: string, body?: any) {
    return fetch(`${this.URL}/${url}`, {
      method: method,
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public httpGet = (url: string) => this.httpMethod('GET', url).then((res) => res.json());
  public httpPost = (url: string, body: any) => this.httpMethod('POST', url, body).then((res) => res.json());
}

export default new RestApi();
