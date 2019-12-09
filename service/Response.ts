export class Response {
  public status: number
  public statusText: string
  public body: any

  // constructor() {}

  public setStatus(status: number) {
    this.status = status
  }

  public setStatusText(statusText: string) {
    this.statusText = statusText
  }

  public setBody(body: any) {
    this.body = body
  }

  public setResponse(resp: any) {
    this.status = resp.status
    this.statusText = resp.statusText
    this.body = resp.body
  }

  public getResponse(): any {
    const resp: any = {}
    resp.status = this.status
    resp.statusText = this.statusText
    resp.body = this.body

    return resp
  }
}
