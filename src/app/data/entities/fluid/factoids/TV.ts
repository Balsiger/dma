import { signal } from '@angular/core';
import { Factoid } from './factoid';

const TV_WIDTH_PX = 1920;
const TV_HEIGHT_PX = 1080;
const TV_WIDTH_CM = 105;
const TV_HEIGHT_CM = 60;

export interface Data {
  px?: {
    width: number;
    height: number;
  };
  cm?: {
    width: number;
    height: number;
  };
}

export class TV implements Factoid<Data> {
  pxWidth = signal(0);
  pxHeight = signal(0);
  cmWidth = signal(0);
  cmHeight = signal(0);

  constructor(data: Data) {
    this.update(data);
  }

  toData(): Data {
    return {
      px: {
        width: this.pxWidth(),
        height: this.pxHeight(),
      },
      cm: {
        width: this.cmWidth(),
        height: this.cmHeight(),
      },
    };
  }

  static fromData(data: Data): TV {
    return new TV(data);
  }

  update(data: Data) {
    if (data.px || data.cm) {
      this.pxWidth.set(data.px?.width || TV_WIDTH_PX);
      this.pxHeight.set(data.px?.height || TV_HEIGHT_PX);
      this.cmWidth.set(data.cm?.width || TV_WIDTH_CM);
      this.cmHeight.set(data.cm?.height || TV_HEIGHT_CM);
    }
  }
}
