//generic that takes an Array and return first element’s type

type First<T extends any[]> = T extends [] ? never : T[0];
