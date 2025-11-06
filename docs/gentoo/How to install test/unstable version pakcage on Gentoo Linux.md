---
createTime: 2025/04/25 01:28:34
sticky: false
tags:
  - Firefox
  - Linux
  - Gentoo Linux
---
I want to install latest firefox becuase god damn twitch.tv requeried it, so i will demonstrate with firefox pakcage.
## Query package version
I often use gentoo [package web page](https://packages.gentoo.org/packages/www-client/firefox) to confirm it.
But you do use some command line to query too if your machine is unable to browser web:
1. eix: ```bash eix -e www-client/firefox```
2. equery(gentoo toolkit): ```bash equery list -po www-client/firefox```
3. pquery(portage-utils):  ```bash pquery -v -m www-client/firefox```

I just used equery command i prefer, this software is minimalism and super clean, l like it :)
```bash
~ ❯❯❯ equery list -po www-client/firefox
 * Searching for firefox in www-client ...
[I--] [??] www-client/firefox-128.7.0:esr
[-P-] [  ] www-client/firefox-128.14.0:esr
[-P-] [ ~] www-client/firefox-140.2.0:esr
[-P-] [ ~] www-client/firefox-142.0:rapid
[-P-] [ ~] www-client/firefox-142.0.1:rapid
```

### Unmask the package
Once you query out the proper verison you want to install, you can try to install it, if you want to install "rapid"(test/unstable) version of the software, you need fist unmask it.
So here is Procedure to unmask and install.

```bash
~ ❯❯❯ doas emerge --ask "=www-client/firefox-142.0.1" --autounmask --autounmask-write

 * IMPORTANT: 1 news items need reading for repository 'gentoo'.
 * Use eselect news read to view new items.


These are the packages that would be merged, in order:

Calculating dependencies... done!
Dependency resolution took 2.74 s (backtrack: 0/20).

[ebuild     U  ] llvm-core/clang-common-20.1.8 [19.1.7]
[ebuild     U  ] dev-libs/nspr-4.37 [4.36]
[ebuild     U ~] dev-libs/nss-3.115.1 [3.101.3] USE="-test-full%" 
[ebuild  NS    ] dev-lang/rust-bin-1.88.0 [1.81.0-r103, 1.82.0-r103, 1.83.0-r1, 1.84.1-r2] LLVM_SLOT="(20%*)" 
[ebuild     U  ] llvm-runtimes/openmp-20.1.8 [19.1.7] PYTHON_SINGLE_TARGET="python3_13* -python3_12* (-python3_14)" 
[ebuild  NS    ] llvm-core/llvm-20.1.8 [18.1.8-r6, 19.1.7] LLVM_TARGETS="(SPIRV*)" 
[ebuild  NS    ] llvm-core/llvm-toolchain-symlinks-20-r1 [18-r1, 19]
[ebuild     U  ] llvm-core/llvmgold-20 [19]
[ebuild  NS    ] llvm-core/clang-20.1.8 [18.1.8-r6, 19.1.7] LLVM_TARGETS="(SPIRV*)" PYTHON_SINGLE_TARGET="python3_13* -python3_12* (-python3_14)" 
[ebuild  NS    ] llvm-core/clang-toolchain-symlinks-20 [18, 19]
[ebuild  NS    ] llvm-runtimes/compiler-rt-20.1.8 [18.1.8-r2, 19.1.7]
[ebuild  NS    ] llvm-runtimes/compiler-rt-sanitizers-20.1.8 [18.1.8-r6, 19.1.7] USE="nsan%* rtsan%*" 
[ebuild  NS    ] llvm-runtimes/clang-runtime-20.1.8 [18.1.8, 19.1.7] USE="-default-compiler-rt% -default-libcxx% -default-lld% -llvm-libunwind% -polly%" 
[ebuild  NS    ] llvm-core/lld-20.1.8 [19.1.7] LLVM_TARGETS="(AArch64%*) (AMDGPU%*) (ARM%*) (AVR%*) (BPF%*) (Hexagon%*) (Lanai%*) (LoongArch%*) (MSP430%*) (Mips%*) (NVPTX%*) (PowerPC%*) (RISCV%*) (SPIRV%*) (Sparc%*) (SystemZ%*) (VE%*) (WebAssembly%*) (X86%*) (XCore%*) -ARC% -CSKY% -DirectX% -M68k% -Xtensa%" 
[ebuild  NS    ] llvm-core/lld-toolchain-symlinks-20 [19]
[ebuild  NS   ~] www-client/firefox-142.0.1 [128.7.0] USE="(-jpegxl) -system-pipewire% -test% (-valgrind)" LLVM_SLOT="20%* -19*" 
[uninstall     ] www-client/firefox-128.7.0 
[blocks b      ] www-client/firefox:rapid ("www-client/firefox:rapid" is soft blocking www-
```
and use dispatch-conf to confirm the changes.
```bash
doas dispatch-conf
```
```bash
+# required by =www-client/firefox-142.0.1 (argument)
+=www-client/firefox-142.0.1 ~amd64

>> (1 of 1) -- /etc/portage/package.accept_keywords/zz-autounmask
>> q quit, h help, n next, e edit-new, z zap-new, u use-new
   m merge, t toggle-merge, l look-merge: 

```
Press "u" on your tiny cute keyboard and we done.

### Now normal install it and everything not gonna warning and stop you
```bash
doas emerge --ask "=www-client/firefox-142.0.1"
```
I can secuess full install it! If you run in to and problem please leave some comment :)
