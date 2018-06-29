import { ServerRoutesService, REQUEST_METHODS } from '../config/server-routes';

export class AjaxProvider {
  serverRoutesService;
  constructor () {
    this.serverRoutesService = new ServerRoutesService();
  }

  async request (action, params) {
    let actionConfig = this.serverRoutesService.get(action);
    let result;

    if (actionConfig.method === REQUEST_METHODS.GET) {
      result = await this.get(actionConfig, params);
    } else {
      result = await this.post(actionConfig, params);
    }

    return result;
  }

  async get (actionConfig, params) {
    let result = await this.send(actionConfig, params, { 'Content-Type': 'application/json' });
    return result;
  }

  async post (actionConfig, params) {
    let result = await this.send(actionConfig, params, { 'Content-Type': 'application/x-www-form-urlencoded' });
    return result;
  }

  send (actionConfig, params, headers) {
    return new Promise(resolve => {
      $.ajax({
        url: actionConfig.url,
        data: params,
        type: actionConfig.type,
        headers: headers
      }).then(data => {
        resolve(data);
      }, () => {
        resolve(this.errorHandler(actionConfig, params));
      });
    });
  }

  errorHandler (actionConfig, params) {
    return {
      error: 1
    };
  }
}
