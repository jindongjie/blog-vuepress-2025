---
tags:
  - portage
  - upgrade
  - kernel
  - gentoolinux
---
## My Gentoo Linux Upgrade Guide
- This Guide include two part, part one is package update, second part is kernel upgrade.
- Part one is suit for any Gentoo Linux machine, but part two is customize version (We will customize kernel parameter and compile it by us manually!) is unfotanly need dracut for initramfs generate and systemboot for bootloader.If not, well, some command need to be chagne, but the general flow is same.
- This is temperary for my PERSONAL REFRENCE ONLY, if you are newbee with Gentoo please read offical gentoo linux documentation first, this is for experianced user to refrence and optmize they update process.

## Part One Package Update
### sync with repository
If you want to update all package for Gentoo Linux, first for all, you need sync all repository with upstream.
there are two way to do this, first is fastest way --- download entire ebuild repository by using command
```bash
emerge-webrsync
```
this is the way i recommand, just like other Linux distrobution, fast and easy.

Second, use old-school '--sync' subcommand to sync with repository per package, this will cost lots of time if you install lots of package on your machine,but you get more control to this process.
here is section of offical doc for it:
   --sync Updates repositories, for which auto-sync, sync-type and sync-uri  attributes  are
              set in repos.conf. A list of repos or aliases can be specified, in which case they
              will  be updated regardless of their auto-sync attribute.  See portage(5) for more
              information.  The PORTAGE_SYNC_STALE variable configures warnings that  are  shown
              when emerge --sync has not been executed recently.

```bash
emerge --sync
```

### update package
After secusessful sync with repository, you able to update all packages!
This is a long-long process if you don't have a super computer.So, with PC, i recommand to start update package before bedtime (zzz)
This is the command i recommand
```bash
emworld  (alias emworld=doas emerge -avuDN @world)
```
I use a alias shortcut for it, in columns, there is full command.
And commad meaning:
  1. -a :   --ask [ y | n ], -a
              Before  performing  the  action, display what will take place (server info for --sync, --pretend output
              for merge, and so forth), then ask whether to proceed with the action or abort.  Using  --ask  is  more
              efficient  than  using --pretend and then executing the same command without --pretend, as dependencies
              will only need to be calculated once. WARNING: If the "Enter" key is pressed at  the  prompt  (with  no
              other  input),  it is interpreted as acceptance of the first choice.  Note that the input buffer is not
              cleared prior to the prompt, so an accidental press of the "Enter" key at any time prior to the  prompt
              will  be  interpreted as a choice!  Use the --ask-enter-invalid option if you want a single "Enter" key
              press to be interpreted as invalid input.
  2. -v: --verbose [ y | n ], -v
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
  3. -u:  --update, -u
              Updates packages to the best version available, which may not always be the highest version number  due
              to masking for testing and development. Package atoms specified on the command line are greedy, meaning
              that  unspecific  atoms  may match multiple versions of slotted packages.  This option also implies the
              --selective option.

  4. @world: excute behavior with all packages.

Run the command, and read the output by section.
Fist section is ebuild caculation part, it will automatic compare old and new synced version of package, list out packages is new/update/reinstall/uninstall
```bash
[ebuild     U  ] sys-libs/glibc-2.41-r4:2.2::gentoo [2.40-r8:2.2::gentoo] USE="cet multiarch (multilib) ssp stack-realign (static-libs) -audit -caps -compile-locales (-custom-cflags) -doc -gd -hash-sysv-compat -headers-only -multilib-bootstrap -nscd -perl -profile (-selinux) -suid -systemd -systemtap -test (-vanilla)" 18,974 KiB
[ebuild     U  ] sys-libs/ncurses-6.5_p20250329:0/6::gentoo [6.5_p20250125:0/6::gentoo] USE="cxx stack-realign (tinfo) -ada -debug -doc -gpm -minimal -profile (-split-usr) -static-libs -test -trace -verify-sig" ABI_X86="32 (64) (-x32)" 373 KiB
...
```

Second section is conflict warning part
```bash

WARNING: One or more updates/rebuilds have been skipped due to a dependency conflict:

dev-libs/icu:0

  (dev-libs/icu-77.1:0/77::gentoo, ebuild scheduled for merge) USE="-debug -doc -examples -static-libs -test -verify-sig" ABI_X86="32 (64) (-x32)" conflicts with
    dev-libs/icu:0/76=[abi_x86_64(-)] required by (dev-libs/boost-1.85.0-r1:0/1.85.0.1::gentoo, installed) USE="bzip2 context icu nls stacktrace zlib -debug -doc -lzma -mpi -numpy -python -tools -zstd" ABI_X86="(64) -32 (-x32)" PYTHON_TARGETS="python3_12 -python3_10 -python3_11 -python3_13"
                ^^^^^^               

dev-libs/boost:0

  (dev-libs/boost-1.88.0-r1:0/1.88.0::gentoo, ebuild scheduled for merge) USE="bzip2 context icu nls stacktrace zlib -debug -doc -lzma -mpi -numpy -python -test -test-full -tools -zstd" ABI_X86="(64) -32 (-x32)" PYTHON_TARGETS="python3_13 -python3_11 -python3_12" conflicts with
    <dev-libs/boost-1.87:=[nls] required by (net-p2p/monero-0.18.3.4-r1:0/0::guru, ebuild scheduled for merge) USE="daemon readline tools wallet-cli wallet-rpc -hw-wallet" ABI_X86="(64)"

```

Read it all and makesure nothing gona breake your system.

Thrid part is rebuld list
```bash
The following packages are causing rebuilds:

  (net-libs/miniupnpc-2.3.3-r1:0/21::gentoo, ebuild scheduled for merge) causes rebuilds for:
    (net-p2p/monero-0.18.3.4-r1:0/0::guru, ebuild scheduled for merge)
  (dev-cpp/abseil-cpp-20250127.1:0/2501.1.0::gentoo, ebuild scheduled for merge) causes rebuilds for:
    (media-libs/webrtc-audio-processing-1.3-r3:1/1::gentoo, ebuild scheduled for merge)
    (dev-libs/protobuf-30.2:0/30.2.0::gentoo, ebuild scheduled for merge)
    (dev-util/android-tools-35.0.2:0/0::gentoo, ebuild scheduled for merge)
    (dev-libs/re2-2024.07.02:0/11::gentoo, ebuild scheduled for merge)
```

It simply list all package need rebulid for you to get a fuzzy concept about this update will take how much time.

If everything is OK, type "yes" to comfirm update!
```bash
Would you like to merge these packages? [Yes/No]
```


Wait a little bit of time, make sure emerge is doing things correct,then have a good sleep! If anything goes wrong, it will skip it, if no major pacakge error, you can fix that easly.
  

## Part Two Kernel upgrade



## End
