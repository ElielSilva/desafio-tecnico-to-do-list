declare module 'koi' {
  export function k<T = any>(schema: any): {
    validate: (value: T) => { error?: Error; value: T }
    string: () => any
    number: () => any
    boolean: () => any
    array: () => any
    object: (schema: Record<string, any>) => any
    min: (value: number) => any
    max: (value: number) => any
    email: () => any
    optional: () => any
  }
}
