# 🐞  Critical File Exposure (Dir Bruteforce)

---

## 📖 Description  
Sensitive files and directories (e.g., `.git/`, `.env`, backups, config files, admin panels) are publicly accessible.  
Attackers can exploit this to **leak source code, secrets, and credentials**, enabling deeper compromise of the system.  

---

## ⚡ Steps to Reproduce  
1️⃣ Run directory brute-force scan against the target:  
```bash
dirsearch -u https://target.example.com -w /path/to/wordlist.txt
```
2️⃣ Inspect responses with 200, 403, or 500 status codes.
3️⃣ Attempt fetching known sensitive files:
```
curl -I https://target.example.com/.git/HEAD
curl -s https://target.example.com/.git/config
curl -s https://target.example.com/.env
```
4️⃣ Review response bodies for leaked code, credentials, or secrets.

---

## 🎯 Impact
🗝️ Source code disclosure → reverse engineering & vulnerability discovery.

🔑 Credential leaks (API keys, DB passwords, SSH keys).

🚪 Admin endpoints exposed → unauthorized access.

📈 Severity: High (direct path to system compromise).

🛠️ Recommendation

🚫 Do not deploy .git/, .env, or config files to production environments.

🔒 Configure web server to deny access to sensitive paths:
.git, .env, .ssh, /config, /backup, etc.

📦 Use secure secret storage (e.g., Vault, AWS Secrets Manager) instead of files.

🔄 Rotate all secrets/keys if exposure has occurred.

🔍 Continuously scan production for accidental file exposure.

---

## 📝 Summary
Directory brute forcing exposed critical files like .git/ and .env.

This can leak source code, credentials, and sensitive configs, leading to full system compromise.

Mitigate by blocking access to sensitive files, storing secrets securely, and rotating credentials.
