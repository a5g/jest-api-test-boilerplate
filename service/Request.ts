export class Request {
  public url: string
  public method: string
  public headers: any
  public body: any
  public curl: string

  // constructor() {}

  public setRequest(request: any) {
    this.url = request.url
    this.method = request.method
    this.headers = request.headers
    this.body = request.body
    this.curl = this.getCurl()
  }

  public getRequest() {
    const req: any = {}
    req.url = this.url
    req.method = this.method
    req.header = this.headers
    req.body = this.body
    req.curl = this.getCurl()

    return req
  }

  public setUrl(url: string) {
    this.url = url
  }

  public setMethod(method: string) {
    this.method = method
  }

  public setHeaders(headers: any) {
    this.headers = headers
  }

  public setBody(body: string) {
    this.body = JSON.parse(body)
  }

  public getCurl() {
    let curl = ''

    curl += `curl -X ${this.method} `
    curl += `'${this.url}'`
    Object.keys(this.headers).forEach((header) => {
      curl += ` -H '${header}: ${this.headers[header]}'`
    })

    if (this.body && this.body.length > 2) {
      curl += ` -d '${this.body}'`
    }

    return curl
  }
}
