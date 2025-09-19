# 🐞 Open Redirect

---

## 📖 Description  
The application accepts **user-supplied redirect URLs** (e.g., `?next=`, `?redirect=`, `return=`) without validation.  
Attackers can abuse this to redirect victims to malicious websites (🎭 phishing), tricking them into entering credentials or downloading malware.  

---

## ⚡ Steps to Reproduce  
1️⃣ Identify redirect parameters in login, logout, SSO, or link-handling endpoints.  
   Example: https://target.example.com/login?next=https://evil.com
   
2️⃣ Submit request → application redirects to attacker-controlled domain.  
3️⃣ Test edge cases:  
- `//evil.com`  
- `//attacker.example@evil.com`  
- URL-encoded payloads (`%2f%2fevil.com`).  

---

## 🎯 Impact  
- 🎭 **Phishing attacks:** attacker can make a trusted domain (target.example.com) send users to malicious sites.  
- 🔗 **Credential theft:** users believe they are logging into the real app but land on an attacker’s fake login page.  
- 🚨 Escalates in severity if used in **password reset / SSO flows**.  
- 📈 **Severity:** Medium → High depending on context.  

---

## 🛠️ Recommendation  
- ✅ Restrict redirects to **relative paths only** (e.g., `/dashboard`).  
- 📋 Maintain a **whitelist of allowed domains** for legitimate external redirects.  
- 🧹 Normalize and validate redirect targets before execution.  
- 🔒 For SSO/third-party auth, use **state/nonce tokens** to prevent tampering.  
- 🚫 Block dangerous patterns like `//`, `@`, or encoded external URLs.  

---

## 📝 Summary  
The app is vulnerable to **Open Redirect**, enabling attackers to abuse trusted URLs for **phishing and credential theft**.  
Mitigate by **whitelisting safe redirect targets**, enforcing **relative paths**, and hardening **SSO flows** with state tokens.  
