import fetch from 'node-fetch'
// import * as config from '../../config'
// import { util } from '../utils'

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

class API {
  static environment: string = ''

  static setEnvironment(environment: string = config.runtime.env): void {
    this.environment = environment
  }

  static getServiceDetails = (msg = '') => {
    let description = ''
    description += msg.length > 0 ? `\n\n\n****** ${msg} ******` : ``
    description += `\n\n*** Request ***`
    description += `\n${request.curl}`
    description += `\n\n*** Response ***`
    description += `\nstatus: ${response.status}`
    description += `\nstatusText: ${response.statusText}`
    description += `\nbody: ${JSON.stringify(response.body)}`

    return description
  }

  private defaultHost: string

  private path: string

  private headers: any

  constructor(defaultHost: string, path: string = '') {
    this.defaultHost = defaultHost
    this.path = path
    this.headers = {}
  }

  get base() {
    return `${this.defaultHost}${this.path}`
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value
  }

  removeHeader(key: string) {
    delete this.headers[key]
  }

  getHeaders() {
    return {
      ...DEFAULT_HEADERS,
      ...this.headers,
    }
  }

  url(path: string, queryParams: any) {
    let query: string = ''
    const host: string = this.base

    if (queryParams) {
      const { ...params } = queryParams
      query = Object.keys(params)
        .map((k) => `${k}=${encodeURIComponent(params[k])}`)
        .join('&')
    }

    const url = path ? `${path}` : ''

    return [`${host}${url}`, query].join('?')
  }

  getCurlRequest({ url, method, headers, body }) {
    let curl = ''

    curl += `curl -X ${method} `
    curl += `'${url}'`
    Object.keys(headers).forEach((header) => {
      curl += ` -H '${header}: ${headers[header]}'`
    })

    if (body && body.length > 2) {
      curl += ` -d '${body}'`
    }

    return curl
  }

  buildErrorMessage({ rqst, resp }) {
    return JSON.stringify({
      _track: {
        logger: 'api',
        request: rqst,
        response: resp,
      },
    }).replace(/\\"/g, '"')
  }

  request({ url, method, headers, body }) {
    const req = {
      url,
      method,
      headers,
      body,
    }

    request.setRequest(req)
    // logger.info('============= REQUEST =============')
    // logger.info(`request: ${request.curl}`)

    return fetch(url, {
      method,
      headers,
      body,
    })
  }

  responseJSON() {
    return (res: any) => {
      if (res.ok && res.status >= 200 && res.status < 300) {
        return res.json().then((json: any) => {
          const resp: any = {}
          resp.status = res.status
          resp.statusText = res.statusText
          resp.body = json

          response.setResponse(resp)

          logger.info('============= API (response ok) =============')
          logger.info(`request: ${request.curl}`)
          logger.info(`response [status]: ${resp.status}`)
          logger.info(
            `response [statusText]: ${JSON.stringify(resp.statusText)}`,
          )
          logger.info(`response [body]: ${JSON.stringify(resp.body)}`)

          return resp
        })
      }

      return res.text().then((text: string) => {
        const resp: any = {}
        resp.status = res.status
        resp.statusText = res.statusText
        resp.body = text

        response.setResponse(resp)

        logger.error('============= API (response not ok) =============')
        logger.error(`request: ${request.curl}`)
        logger.error(`response [status]: ${resp.status}`)
        logger.error(
          `response [statusText]: ${JSON.stringify(resp.statusText)}`,
        )
        logger.error(`response [body]: ${JSON.stringify(resp.body)}`)

        const customError = this.buildErrorMessage({
          rqst: request.getRequest(), // API.getRequest(),
          resp: response.getResponse(),
        })

        throw new Error(customError)
      })
    }
  }

  requestJSON({
    path = '',
    method = 'GET',
    queryParams = {},
    headers = {},
    body = {},
  }) {
    let bodyStr: any
    if (!util.isEmpty(body)) {
      bodyStr = JSON.stringify(body)
    }

    const url: string = this.url(path, queryParams)
    const headrs = { ...this.getHeaders(), ...headers }

    return this.request({
      url,
      method,
      headers: headrs,
      body: bodyStr,
    }).then(this.responseJSON())
  }
}

export default API
