export type Page = string;

export namespace pages {
  export const universe_id: Page = "universe";
  export const about_id: Page = "about";
  export const imprint_id: Page = "imprint";
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
