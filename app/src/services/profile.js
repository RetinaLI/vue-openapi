import { AjaxProvider } from '../providers/ajax';

export class ProfileService {
  ajaxProvider;
  constructor () {
    this.ajaxProvider = new AjaxProvider();
  }

  async getCurrentUser () {
    let result = await this.ajaxProvider.request('getCurrentUser');
    return result.data;
  }

  async getValidMenus () {
    let result = await this.ajaxProvider.request('getValidMenus');
    return result;
  }

  async getApiList () {
    let result = await this.ajaxProvider.request('getApiList');
    return result;
  }
}
