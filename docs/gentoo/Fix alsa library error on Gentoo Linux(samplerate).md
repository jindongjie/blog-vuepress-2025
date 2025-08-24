
Recently, i found some unknown bug when i want to play music with rust library `rodio`.
Music is playing smooth, but the error message print on screen will total screw [my project](https://github.com/jindongjie/Portal_StillAlive_Rust).
```bash
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/dlmisc.c:339:(snd_dlobj_cache_get0) Cannot open shared library libasound_module_rate_samplerate_best.so (/usr/lib64/alsa-lib/libasound_module_rate_samplerate_best.so: cannot open shared object file: No such file or directory)
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/dlmisc.c:339:(snd_dlobj_cache_get0) Cannot open shared library libasound_module_rate_samplerate_best.so (/usr/lib64/alsa-lib/libasound_module_rate_samplerate_best.so: cannot open shared object file: No such file or directory)
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/dlmisc.c:339:(snd_dlobj_cache_get0) Cannot open shared library libasound_module_rate_samplerate_best.so (/usr/lib64/alsa-lib/libasound_module_rate_samplerate_best.so: cannot open shared object file: No such file or directory)
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/dlmisc.c:339:(snd_dlobj_cache_get0) Cannot open shared library libasound_module_rate_samplerate_best.so (/usr/lib64/alsa-lib/libasound_module_rate_samplerate_best.so: cannot open shared object file: No such file or directory)
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/dlmisc.c:339:(snd_dlobj_cache_get0) Cannot open shared library libasound_module_rate_samplerate_best.so (/usr/lib64/alsa-lib/libasound_module_rate_samplerate_best.so: cannot open shared object file: No such file or directory)
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/dlmisc.c:339:(snd_dlobj_cache_get0) Cannot open shared library libasound_module_rate_samplerate_best.so (/usr/lib64/alsa-lib/libasound_module_rate_samplerate_best.so: cannot open shared object file: No such file or directory)
ALSA lib /var/tmp/portage/media-libs/alsa-lib-1.2.13-r3/work/alsa-lib-1.2.13/src/pcm/pcm_rate.c:1581:(snd_pcm_rate_open) Cannot find rate converter
````

I think it is related to my alsa(Advance Linux Sound Architectrue)[description](https://www.alsa-project.org/wiki/Main_Page) library is uninstall.
So i search for information about this library _xxxx_samperate_best.so_
I found some acient post exactly in count this problem, but sadly no any solution :( [Gentoo Form Post Link](https://forums.gentoo.org/viewtopic-p-7158386.html).

So i ask for AI, then it recommand me to do so:

```bash
echo "media-plugins/alsa-plugins samplerate" | doas tee -a /etc/portage/package.use/alsa
emerge --ask media-plugins/alsa-plugins
```
Unable to work.
But it inspire me to check the alsa compile flag relate to "samplerate"!
[alsa-plugin repository page](https://packages.gentoo.org/packages/media-plugins/alsa-plugins)
Yes! I try it, and it work perfectly!

**simple solution**

```bash
echo "media-plugins/alsa-plugins libsamplerate" | doas tee -a /etc/portage/package.use/alsa
emerge --ask media-plugins/alsa-plugins
```


