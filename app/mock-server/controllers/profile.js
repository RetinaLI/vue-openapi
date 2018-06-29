let fs = require('fs');
let path = require('path');

module.exports = {
  getValidMenus () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/valid-menus.json')));
  },
  getCurrentUser () {
    return {
      'data': {
        'address': '',
        'authorizetype': 0,
        'email': 'zhouweiming@foton.com.cn',
        'fax': '',
        'fullname': '周维明',
        'id': 65436,
        'mobile': '',
        'name': 'zhouweiming',
        'phone': '',
        'photo': '',
        'rememberKey': '',
        'title': 1,
        'zip': ''
      }
    };
  },
  getApiList () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/api-list.json')));
  }
};
