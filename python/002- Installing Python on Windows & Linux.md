# ⚙️ Installing Python on Windows & Linux  

Python installation is simple and works across different operating systems.  
Follow the steps below to set it up on **Windows** and **Linux**.  

---

## 🪟 Installing Python on Windows  

1. 🔽 **Download Python**  
   - Go to [python.org/downloads](https://www.python.org/downloads/)  
   - Download the latest **Python Installer** for Windows.  

2. ▶️ **Run the Installer**  
   - Double-click the `.exe` file.  
   - ✅ Check **"Add Python to PATH"** (important).  
   - Click **Install Now**.  

3. 🔍 **Verify Installation**  
   - Open **Command Prompt** (`cmd`).  
   - Type:  
     ```bash
     python --version
     ```
   - You should see the installed Python version (e.g., `Python 3.12.0`).  

---

## 🐧 Installing Python on Linux  

Most Linux distros come with Python pre-installed.  
To check, run:  
```bash
python3 --version
```



If not installed or you need the latest version:
On Ubuntu/Debian:
```
sudo apt update
sudo apt install python3 python3-pip -y
```
On CentOS/Fedora/RHEL:
```
sudo dnf install python3 python3-pip -y
```
On Arch Linux:
```
sudo pacman -S python python-pip
```
---
## 📦 Installing Pip (Python Package Manager)

   - Pip is used to install external libraries.

   - Check if installed:
```
pip --version
```
If missing, install on Linux:
```
sudo apt install python3-pip -y
```
---
## ✅ Verify Python & Pip

On Windows, pip comes with Python installer (when "Add to PATH" is checked).


Run these commands to confirm everything is set up:
```
python --version
pip --version
```
You are ready to start coding in Python 🚀🐍
