---
tags:
  - helix 
  - markdown
  - gentoolinux
  
permalink: /article/ITiSWAHTitISISS/
---

## Two Dependencies, That's it
Today i finaly try to continue my blog, with markdown format and helix editor.
So, i need get full markdown support in Helix.
I run the Helix 'Health' test, then it tell me it need two langurage server:
```zsh
~ ❯❯❯ zx --health markdown
Configured language servers:
  ✓ marksman: /usr/bin/marksman
  ✓ markdown-oxide: /usr/bin/markdown-oxide
Configured debug adapter: None
Configured formatter: None
Highlight queries: ✓
Textobject queries: ✘
Indent queries: ✘
```
Heem,seem like we just simply need install those stuff.
## marksman
```zsh
~ ❯❯❯ doas emerge dev-util/marksman 

 * IMPORTANT: 1 news items need reading for repository 'gentoo'.
 * Use eselect news read to view new items.

 * Last emerge --sync was 54d 2h 25m 27s ago.
Calculating dependencies... done!
Dependency resolution took 0.91 s (backtrack: 0/20).


>>> Verifying ebuild manifests

>>> Running pre-merge checks for dev-util/marksman-2024.10.07
```

Fortunatly, this language server is already inside Gentoo Linux package repository, so we just need simply install it!
It should work without any configuration.
```zsh
~ ❯❯❯ marksman                                                                                                                                                                                ✘ 130
[21:37:13 INF] <LSP Entry> Starting Marksman LSP server: {}
```
We can recheck Helix health again, it should find marksman under excuteable **$PATH**.
```zsh
~ ❯❯❯ echo $PATH                                                                                                                                                                              ✘ 130
/home/ar0m/.local/bin /home/ar0m/.local/share/pnpm /usr/local/sbin /usr/local/bin /usr/bin /opt/bin /usr/lib/llvm/19/bin /usr/lib/llvm/18/bin /etc/eselect/wine/bin /opt/cuda/bin
```

## markdown-oxide
Unfortuantly, this language server is not inside Gentoo Linux package repository,
but lucky, it is a single file excutable program, we can simply download it from it github release section!
[markdown-oxide github repository](https://github.com/Feel-ix-343/markdown-oxide)

Or if you prefer SourceForge
[markdown-oxide SOURCEFORGE](https://sourceforge.net/projects/markdown-oxide.mirror/)

After you download correct program suit able for your computer architectrue and OS, you should copy it to the **$PATH** i mention above.
Finally,Check Helix health again, it should perfectly work!
