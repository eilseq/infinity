export namespace pages {
  export type Page = string;
  export const universes_path: Page = "/";
  export const about_path: Page = "/about";
  export const imprint_path: Page = "/imprint";
}

export namespace rest {
  export interface Universe {
    id: number;
    maxSize: number;
    name: string;
  }

  export function isUniverse(arg: any): arg is Universe {
    return (arg as Universe).id !== undefined;
  }

  export interface Star {
    id: number;
    name: string;
    universeId: number;
    color: string;
  }

  export function isStar(arg: any): arg is Star {
    return (arg as Star).id !== undefined;
  }
}
