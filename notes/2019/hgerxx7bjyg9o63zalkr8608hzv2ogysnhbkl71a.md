`module_1.ts`

```
// Let Module `module_0` expose interface
// `StrValidator`. Expose it with name `StrVal`
// with a re-export statement.
export
  { StrValidator as StrVal }
  from './module_0';
```

`module_1.d.ts`

```
export { StrValidator as StrVal } from './module_0';
```