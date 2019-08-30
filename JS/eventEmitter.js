/*
 * @Author: GuoWei
 * @Date: 2019-08-30 21:40:02
 * @LastEditors: GuoWei
 * @LastEditTime: 2019-08-30 21:40:34
 * @Description: 发布订阅模式实现基本功能
 */
class EventEmitter {
  constructor() {
    this._eventpool = {};
  }

  on(event, callback) {
    this._eventpool[event] ? this._eventpool[event].push(callback) : this._eventpool[event] = [callback]
  }

  emit(event, ...args) {
    this._eventpool[event] && this._eventpool[event].forEach(cb => cb(...args))
  }

  off(event) {
    if (this._eventpool[event]) {
      delete this._eventpool[event]
    }
  }

  once(event, callback) {
    this.on(event, (...args) => {
      callback(...args);
      this.off(event)
    })
  }
}
