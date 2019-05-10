// angular
import { Injectable } from '@angular/core';

export interface IDebug {
  LEVEL_1: boolean;
  LEVEL_2: boolean;
  LEVEL_3: boolean;
  LEVEL_4: boolean;
  LEVEL_5: boolean;
}

@Injectable()
export class LogService {
  public static DEBUG: IDebug = {
    LEVEL_1: false, // .warn only
    LEVEL_2: false, // .error only
    LEVEL_3: false, // .log + all the above
    LEVEL_4: false, // .log + all the above + info
    LEVEL_5: false // just info (excluding all else)
  };

  // info (extra messages like analytics)
  // use LEVEL_5 to see only these
  public info(...msg: Array<any>) {
    if (LogService.DEBUG.LEVEL_5 || LogService.DEBUG.LEVEL_4) {
      // extra messages
      console.info(msg);
    }
  }

  // debug (standard output)
  public debug(...msg: Array<any>) {
    if (LogService.DEBUG.LEVEL_4 || LogService.DEBUG.LEVEL_3) {
      // console.debug does not work on {N} apps... use `log`
      console.log(msg);
    }
  }

  // error
  public error(...err: Array<any>) {
    if (
      LogService.DEBUG.LEVEL_4 ||
      LogService.DEBUG.LEVEL_3 ||
      LogService.DEBUG.LEVEL_2
    ) {
      console.error(err);
    }
  }

  // warn
  public warn(...warn: Array<any>) {
    if (
      LogService.DEBUG.LEVEL_4 ||
      LogService.DEBUG.LEVEL_3 ||
      LogService.DEBUG.LEVEL_1
    ) {
      console.warn(warn);
    }
  }
}
