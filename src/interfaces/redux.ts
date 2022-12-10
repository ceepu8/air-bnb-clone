export interface builderInterface {
  addCase: (
    arg0: any,
    arg1: (state: any) => void,
  ) => {
    (): any;
    new (): any;
    addCase: {
      (arg0: any, arg1: (state: any, action: any) => void): {
        (): any;
        new (): any;
        addCase: { (arg0: any, arg1: (state: any, action: any) => void): void; new (): any };
      };
      new (): any;
    };
  };
}

export interface actionBaseInterface {
  REQUEST: any;
  BASE: string | number;
  SUCCESS: any;
  FAILURE: any;
}

export interface takeoutInterface {
  (arg0: any, arg1: any): void;
  (arg0: any, arg1: any): void;
  constructor: any;
  forEach: any;
}

export interface authStoreInterface {
  auth: {
    user: {};
    token: null;
    isLogged: boolean;
    provider: string;
    loading: { [x: number]: boolean };
    success: { [x: number]: boolean };
  };
}
