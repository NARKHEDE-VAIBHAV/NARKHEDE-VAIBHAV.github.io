# 🐧 Linux Commands - Complete Guide for Beginners & Intermediate Users

This guide covers **essential Linux commands** for navigating, managing, and interacting with Linux systems. Each command includes **what it does, example usage, and its intended users**. Perfect for beginners, developers, sysadmins, and OSINT analysts.

---

## 🔹 System Information

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `uname` | Shows system information | `uname -a` | Sysadmins, devs |
| `uname -r` | Displays kernel version | `uname -r` | Troubleshooting, compatibility |
| `date` | Shows current date/time | `date` | All users |
| `whoami` | Shows current logged-in user | `whoami` | Multi-user environments |
| `cat /etc/os-release` | Shows OS and distro info | `cat /etc/os-release` | All users |
| `uptime` | Shows system uptime & load | `uptime` | Sysadmins |
| `hostname` | Shows or sets system hostname | `hostname` | Sysadmins |

---

## 🔹 Terminal Utilities

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `clear` | Clears terminal screen | `clear` | All users |
| `history` | Shows past commands | `history` | All users |
| `man command` | Shows manual for a command | `man ls` | Beginners, devs |
| `echo` | Prints text to terminal | `echo "Hello"` | All users |
| `alias` | Creates shortcuts for commands | `alias ll='ls -l'` | Power users |

---

## 🔹 File & Directory Management

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `ls` | Lists files/folders | `ls -l` | All users |
| `cd` | Changes directory | `cd /home/user` | All users |
| `pwd` | Prints current directory | `pwd` | All users |
| `touch filename` | Creates empty file | `touch file.txt` | Beginners, devs |
| `nano filename` | Opens terminal text editor | `nano file.txt` | Beginners, devs |
| `cat filename` | Views file content | `cat file.txt` | All users |
| `cp source dest` | Copies files/directories | `cp file.txt backup.txt` | All users |
| `mv source dest` | Moves/renames files | `mv old.txt new.txt` | All users |
| `rm filename` | Deletes a file | `rm file.txt` | All users |
| `mkdir dirname` | Creates directory | `mkdir projects` | All users |
| `rmdir dirname` | Deletes empty directory | `rmdir oldfolder` | All users |
| `tree` | Shows directory tree | `tree` | All users |

---

## 🔹 File Permissions & Ownership

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `chmod` | Changes file permissions | `chmod 755 script.sh` | Sysadmins, devs |
| `chown` | Changes file owner | `chown user:group file.txt` | Sysadmins |
| `ls -l` | Shows permissions & owner | `ls -l` | All users |

---

## 🔹 Process Management

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `ps` | Lists running processes | `ps aux` | Sysadmins |
| `top` | Live system process monitor | `top` | Sysadmins |
| `htop` | Interactive process viewer | `htop` | Sysadmins |
| `kill PID` | Kill a process | `kill 1234` | Sysadmins |
| `killall process` | Kill all instances | `killall firefox` | Sysadmins |

---

## 🔹 Networking

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `ifconfig` / `ip addr` | Shows network interfaces | `ip addr` | Sysadmins, devs |
| `ping` | Checks connectivity | `ping google.com` | All users |
| `traceroute` | Tracks route to host | `traceroute google.com` | Sysadmins |
| `netstat` | Shows network connections | `netstat -tulnp` | Sysadmins |
| `curl` | Fetches URLs | `curl https://example.com` | Devs, analysts |
| `wget` | Downloads files from web | `wget https://example.com/file` | Devs, analysts |

---

## 🔹 Searching & Finding

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `grep` | Searches text in files | `grep "error" log.txt` | All users |
| `find` | Finds files/folders | `find /home -name "*.txt"` | All users |
| `locate` | Fast file search | `locate file.txt` | All users |
| `which` | Shows path of command | `which python3` | All users |

---

## 🔹 Archiving & Compression

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `tar` | Archive/compress files | `tar -czvf backup.tar.gz folder/` | All users |
| `gzip` | Compress files | `gzip file.txt` | All users |
| `gunzip` | Decompress | `gunzip file.txt.gz` | All users |
| `zip` | Create zip archive | `zip archive.zip file.txt` | All users |
| `unzip` | Extract zip archive | `unzip archive.zip` | All users |

---

## 🔹 Miscellaneous

| Command | What it does | Example | Users |
|---------|--------------|---------|-------|
| `df -h` | Disk usage overview | `df -h` | All users |
| `du -sh folder` | Folder size | `du -sh projects/` | All users |
| `free -h` | Memory usage | `free -h` | All users |
| `uptime` | System uptime | `uptime` | All users |
| `who` | Who is logged in | `who` | Sysadmins |

---
