// angular
import { Injectable, Inject, ViewContainerRef } from '@angular/core';

// app
import { isObject, isNativeScript } from '@notadd/utils';
import { XPlatWindow } from '../models';
import { PlatformWindowToken } from './tokens';

@Injectable()
export class WindowService {
  constructor(
    @Inject(PlatformWindowToken) private _platformWindow: XPlatWindow
  ) {}

  public get navigator() {
    return this._platformWindow.navigator;
  }

  public get location() {
    return this._platformWindow.location;
  }

  public get process() {
    return this._platformWindow.process;
  }

  public get require() {
    return this._platformWindow.require;
  }

  public alert(msg: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = this._platformWindow.alert(msg);
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  public confirm(
    msg: any,
    action?: Function /* used for fancyalerts on mobile*/
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = (<any>this._platformWindow).confirm(
        msg,
        isNativeScript() ? action : undefined
      );
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else if (result) {
        resolve();
      } else {
        reject();
      }
    });
  }

  public setTimeout(
    handler: (...args: any[]) => void,
    timeout?: number
  ): number {
    return this._platformWindow.setTimeout(handler, timeout);
  }

  public clearTimeout(timeoutId: number): void {
    return this._platformWindow.clearTimeout(timeoutId);
  }

  public setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return this._platformWindow.setInterval(handler, ms, args);
  }

  public clearInterval(intervalId: number): void {
    return this._platformWindow.clearInterval(intervalId);
  }
}
