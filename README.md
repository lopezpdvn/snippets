# snippets

Code snippets in multiple languages.

- JavaScript
- TypeScript
- C#
- Python
- Java
- Haskell
- SQL
- C
- Windows Batch

By [Pedro Ivan Lopez](http://pedroivanlopez.com).

## Development

- Node.js recent version
- Python >= 3
- LINQPad >= 5
- JDK >= 11.
- GCC
- `sudo apt install ghc` (WSL)

### Visual Studio Code

#### Extensions

1. Debugger for Java
1. Java Extension Pack
1. Language Support for Java(TM) by Red Hat

### Java

_File_ > _Open Folder_ with Visual Studio Code, path of isolated directory of
(typically only 1) source code files `2020/<path>`.

Then just _Run_ > _Start Debugging_.

If it fails search for existing `launch.json` files and copy to your current
directory.

### Haskell

In WSL, just compile

```haskell
$ ghc name_of_file.hs
```

And run

```haskell
$ ./name_of_file
< awesome output >
...
```
