---
tags:
  - kernel
  - gentoolinux

createTime: 2025/6/17 20:13:06
---
## My Gentoo Linux Upgrade Guide
- This Guide include two part, part one is package update, second part is kernel upgrade.
- Part one is suit for any Gentoo Linux computer, but part two is customized version (We able to customize kernel configuration and compile it manually!) is unfortunately need **dracut** for initramfs generate and **systemboot** for bootloader.If you choose other alernatives, some command need to be change, but the general flow is same.
- This is temporary for my **PERSONAL REFRENCE ONLY**, if you are not familiar with Gentoo Linux, please read offical gentoo linux document first, this is for senior user to refrence and optmize they update flow.
- Here is 2 offical guide you must read if you want to manage your Gentoo Linux:
  1. [Portage Guide, about package management](https://wiki.gentoo.org/wiki/Portage)
  2. [https://wiki.gentoo.org/wiki/Kernel, about kernel upgrade](https://wiki.gentoo.org/wiki/Kernel)

## Part One Package Update
### sync with repository
1. If you want to update all package for Gentoo Linux, first for all, you need sync all repositorys with upstream.
there are two way to do this, first is fastest way --- download the compressed package information index by:
```bash
emerge-webrsync
```
This is the most efficient way.

2. Use old-school '--sync' command to sync with repository per package, this will cost lots of time if you install lots of package on your machine,but you get more control to this process.
Here is section of offical doc for it:
   --sync Updates repositories, for which auto-sync, sync-type and sync-uri  attributes  are
              set in repos.conf. A list of repos or aliases can be specified, in which case they
              will  be updated regardless of their auto-sync attribute.  See portage(5) for more
              information.  The PORTAGE_SYNC_STALE variable configures warnings that  are  shown
              when emerge --sync has not been executed recently.

```bash
emerge --sync
```

### update package
After sucessfull sync with repositorys, you able to update all packages!
This is a long-long process if you don't have a super computer.
So, with PC, i recommend to start update package before bedtime (Zzz) and let it run over the night(hope it don't start burning LOL)
This is the command i recommend:
```bash
emworld  (alias emworld=emerge -avuDN @world)
```
I use a alias shortcut for it, in columns, there is full command.
And command meaning:
  1. -a :  
              Before  performing  the  action, display what will take place (server info for --sync, --pretend output
              for merge, and so forth), then ask whether to proceed with the action or abort.  Using  --ask  is  more
              efficient  than  using --pretend and then executing the same command without --pretend, as dependencies
              will only need to be calculated once. 
              > [!warning]
              >WARNING: If the "Enter" key is pressed at  the  prompt  (with  noother  input),  it is interpreted as acceptance of the first choice.
              >
              Note that the input buffer is not cleared prior to the prompt, so an accidental press of the "Enter" key at any time prior to the  prompt
              will  be  interpreted as a choice!
  2. -v:
              Tell emerge to run in verbose mode.  Currently this flag causes emerge to print out GNU info errors, if
              any, and to show the USE flags that will be used for each package when pretending. The  following  sym‐
              bols are affixed to USE flags in order to indicate their status:

              Symbol   Location    Meaning
              ──────────────────────────────────────────────────────────────

              -        prefix      not enabled (either disabled or removed)
              *        suffix      transition to or from the enabled state
              %        suffix      newly added or removed
              ()       circumfix   forced, masked, or removed
              {}       circumfix   state is bound to FEATURES settings
  3. -u:  
              Updates packages to the best version available, which may not always be the highest version number  due
              to masking for testing and development. Package atoms specified on the command line are greedy, meaning
              that  unspecific  atoms  may match multiple versions of slotted packages.  This option also implies the
              --selective option.

  4. @world: excute behavior with all packages.

Run the command, and read the output by section.
- Fist section is ebuild caculation part, it will automatic compare old and new synced version of package, list out packages gonna *new/update/reinstall/uninstall*
```bash
[ebuild     U  ] sys-libs/glibc-2.41-r4:2.2::gentoo [2.40-r8:2.2::gentoo] USE="cet multiarch (multilib) ssp stack-realign (static-libs) -audit -caps -compile-locales (-custom-cflags) -doc -gd -hash-sysv-compat -headers-only -multilib-bootstrap -nscd -perl -profile (-selinux) -suid -systemd -systemtap -test (-vanilla)" 18,974 KiB
[ebuild     U  ] sys-libs/ncurses-6.5_p20250329:0/6::gentoo [6.5_p20250125:0/6::gentoo] USE="cxx stack-realign (tinfo) -ada -debug -doc -gpm -minimal -profile (-split-usr) -static-libs -test -trace -verify-sig" ABI_X86="32 (64) (-x32)" 373 KiB
...
```

- Second section is conflict warning part
```text

WARNING: One or more updates/rebuilds have been skipped due to a dependency conflict:

dev-libs/icu:0

  (dev-libs/icu-77.1:0/77::gentoo, ebuild scheduled for merge) USE="-debug -doc -examples -static-libs -test -verify-sig" ABI_X86="32 (64) (-x32)" conflicts with
    dev-libs/icu:0/76=[abi_x86_64(-)] required by (dev-libs/boost-1.85.0-r1:0/1.85.0.1::gentoo, installed) USE="bzip2 context icu nls stacktrace zlib -debug -doc -lzma -mpi -numpy -python -tools -zstd" ABI_X86="(64) -32 (-x32)" PYTHON_TARGETS="python3_12 -python3_10 -python3_11 -python3_13"
                ^^^^^^               

dev-libs/boost:0

  (dev-libs/boost-1.88.0-r1:0/1.88.0::gentoo, ebuild scheduled for merge) USE="bzip2 context icu nls stacktrace zlib -debug -doc -lzma -mpi -numpy -python -test -test-full -tools -zstd" ABI_X86="(64) -32 (-x32)" PYTHON_TARGETS="python3_13 -python3_11 -python3_12" conflicts with
    <dev-libs/boost-1.87:=[nls] required by (net-p2p/monero-0.18.3.4-r1:0/0::guru, ebuild scheduled for merge) USE="daemon readline tools wallet-cli wallet-rpc -hw-wallet" ABI_X86="(64)"

```

Read it all and make sure nothing gona break your system(crucial package and they dependencies won't conflit).

- Final part is rebuild list
```haskell
The following packages are causing rebuilds:

  (net-libs/miniupnpc-2.3.3-r1:0/21::gentoo, ebuild scheduled for merge) causes rebuilds for:
    (net-p2p/monero-0.18.3.4-r1:0/0::guru, ebuild scheduled for merge)
  (dev-cpp/abseil-cpp-20250127.1:0/2501.1.0::gentoo, ebuild scheduled for merge) causes rebuilds for:
    (media-libs/webrtc-audio-processing-1.3-r3:1/1::gentoo, ebuild scheduled for merge)
    (dev-libs/protobuf-30.2:0/30.2.0::gentoo, ebuild scheduled for merge)
    (dev-util/android-tools-35.0.2:0/0::gentoo, ebuild scheduled for merge)
    (dev-libs/re2-2024.07.02:0/11::gentoo, ebuild scheduled for merge)
```

It simply listed all package need rebulid for you, to get a rough estimate about how much time it to execute.

If everything is OK, type "yes" to comfirm update!
```text
Would you like to merge these packages? [Yes/No]
```


Wait a little bit of time, make sure emerge is doing things correct,then have a *good sleep!* If anything goes wrong, it will skip it, if no major error such as compiler or system level stuff, you can fix that easly.
  

## Part Two Kernel upgrade
I only install local compile kernel, this is safer and much customizable, make the OS more fast, flex and hacky.
### check avaiable kernel version:
```bash
equery meta gentoo-sources
```
You will see a list of all avaliable version of gentoo official kernel(source code version).

### install kernel source code

If you want to use stable kernel (above equery command text color for your architectrue is green), you can use this command to install:
```bash
emerge =sys-kernel/gentoo-sources-6.15.8
```
Or if you want to try newest, untested kernel, you can bravly choice version from masked stuff! ( above equery command text color four your architectrue is blue).
And install using this set of command:
```bash
emerge =sys-kernel/gentoo-sources-6.15.8 --autounmask --autounmask-write
```
```bash
dispatch-conf 
```
Let me expain,first "--autounmask" allow portage auto create a patch for to automatic unmask package you want to install.
Then you can use _dispatch-conf_ to apply the patch:
>info
>dispatch-conf  is  designed  to be run after merging new packages in order to see if there are updates to the configuration
       files.  If a new configuration file will overwrite an old one, dispatch-conf will prompt the user for a decision about  how
       to  resolve  the discrepancy.  Advantages of dispatch-conf include easy rollback (changes to config files are stored either
       using patches or rcs) and the ability to automatically update config files that the user has never modified or that  differ
       from the current version only in CVS cruft or white space.

When package is unmasked, you able to install by running above emerge command again:
```bash
emerge =sys-kernel/gentoo-sources-6.15.8
```

### config kernel
First we should confirm kernel source code is exist and reconized for Gentoo Linux
```bash
/u/src ❯❯❯ eselect kernel list
Available kernel symlink targets:
  [1]   linux-6.1.127-gentoo
  [2]   linux-6.1.129-gentoo
  [3]   linux-6.1.132-gentoo
  [4]   linux-6.12.1-gentoo
  [5]   linux-6.14.3-gentoo
  [6]   linux-6.15.0-gentoo *
  [7]   linux-6.15.8-gentoo
```
You can see i am currently on 6.15.0 version(* symbol) and we gonna manually upgrade to 6.15.8, with my customize configuration!
So i will select 6.15.8 kernel
```bash
eselect kernel set 7  
````
Then, Gentoo will change the softlink of "/usr/src/linux" to the kernel source-code we select. 
Second, we able to config the kernel!
Jump in to folder "/usr/src/linux"
```bash
cd /usr/src/linux
```
Fist you need a base config to start, you can just move the old kernel config here or use some script to generate.
1. Copy from Your old configuration
If you don't want to make any change, you can simply copy your old kernel config!
for exsample, as we saw above, i use linux-6.15 as previous kernel, so i need copy configuration form that old folder, just like this:
```bash
cp /usr/src/linux-6.15.0-gentoo/.config /usr/src/linux
```
2. Generate by script
If you just install the system or prefer to get a new configuration there is several script for this task.
- **defconfig** Most recommend, just a basic config
```bash
make defconfig
```
- **tinyconfig** Use in embedded system, or some experimental test 
```bash
make tinyconfig
```
And we is finally getting to the stage we can tweak something.
Choose a good kernel configuration tool, i recommend nconfig, or menuconfig is also fine.
```bash
make nconfig
```
Bingo, you able to select what ever kernel function you want to use!
You can read the offical linux kernel configuration manual by this link:
[gentoo kernel configuration guide](https://wiki.gentoo.org/wiki/Kernel/Gentoo_Kernel_Configuration_Guide)


### compile kernel
Good, we need compile kernel! this will take a while...
Use all of your computing power:
```bash
make -j(nproc)
```
Or manual input count of your threads avaliable.
```bash
make -j(HOW MANY THREADS YOU WANT TO USE, EVALUATE WITH MEMORY like 1 thread consume 200MB memory)
```

Don't forget install module! it is really easy to forget.
```bash
make modules_install
```

When kernel and all module is ready, it is time to install it. (it should auto trigger your bootloader or something to auto copy vmlinux and initramfs to your boot partition, if it can do that, recheck the install process about whatever your bootloader is)

```bash
make install
```

Fantastic! and finally if you using nvidia graphic card same as me, you should reinstall nvidia-drivers
```bash
emerge x11-drivers/nvidia-drivers 
```
Finally, we can reboot the  system, and check out your system is broke or not :)
If someting go wrong, we also should use old backup kernel to diagnostic and fix the problem.

##  End

Yes, the end.

