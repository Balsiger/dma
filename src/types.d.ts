import '@angular/core';

// TODO: Remove this and use fire/analytics instead of the angular version.
declare module '@angular/core' {
  export interface ComponentFactoryResolver {
    [key: string]: any;
  }
}
