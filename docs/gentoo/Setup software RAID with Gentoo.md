# Setting Up RAID 5 on Gentoo Linux with mdadm(AI WARNING)

This guide explains how to configure a software RAID 5 array on Gentoo Linux using `mdadm`.

---

## 1. Install mdadm

```bash
emerge --ask sys-fs/mdadm
```

---

## 2. Prepare Your Disks

Identify the drives, e.g., `/dev/sdb`, `/dev/sdc`, `/dev/sdd`.

**(Optional but recommended)** Clear old RAID superblocks:

```bash
mdadm --zero-superblock /dev/sdb /dev/sdc /dev/sdd
```

Partition each disk (recommended; use `fdisk`, `gdisk`, or `parted`). Mark partitions as type `fd` (Linux RAID autodetect) if using `fdisk`.

---

## 3. Create the RAID 5 Array

Example with 3 disks/partitions:

```bash
mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1
```

- `--level=5`: RAID 5
- `--raid-devices=3`: Number of drives (min 3)
- Replace `/dev/sdX1` with your actual partition names.

---

## 4. Monitor Array Creation

Check progress:

```bash
watch cat /proc/mdstat
```

Wait for the sync to complete before storing important data.

---

## 5. Create a Filesystem

Example for ext4:

```bash
mkfs.ext4 /dev/md0
```

---

## 6. Mount the Array

```bash
mkdir /mnt/raid
mount /dev/md0 /mnt/raid
```

---

## 7. Configure Array Auto-Assembly at Boot

### a. Save array details:

```bash
mdadm --detail --scan >> /etc/mdadm.conf
```

### b. Enable mdadm at boot

#### OpenRC (Gentoo default):

```bash
rc-update add mdadm boot
```

#### Systemd (if in use):

```bash
systemctl enable mdadm
```

### c. Add to `/etc/fstab` for automatic mounting:

```
/dev/md0    /mnt/raid    ext4    defaults    0 0
```

---

## 8. Verify Everything

```bash
cat /proc/mdstat
mdadm --detail /dev/md0
```

---

## References

- [Gentoo Wiki: RAID](https://wiki.gentoo.org/wiki/RAID)
- [Gentoo Wiki: mdadm](https://wiki.gentoo.org/wiki/Mdadm)
- [mdadm man page](https://man7.org/linux/man-pages/man8/mdadm.8.html)
