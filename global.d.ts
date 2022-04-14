/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import "axios";
import "react-router";

declare global {
  var RUNTIME_ENV: "server" | "client";

  namespace NodeJS {
    interface Global {
      RUNTIME_ENV: "server" | "client";
    }
  }

  interface Window {
    initMap: VoidFunction;
    __INITIAL_STATE__: Record<string, any>;
    __LIST_SCROLL__: number;
  }

  type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };

  type SagaWorker = (...args: any[]) => void;

  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
    ? A
    : never;

  type ActionType<T extends (...args: any) => any> = (
    ...args: Parameters<T>
  ) => void;
}

declare module "axios" {
  interface AxiosRequestConfig {
    stubData?: Array<Record<string, any>> | Record<string, any>;
    stubDelay?: number;
  }
}
