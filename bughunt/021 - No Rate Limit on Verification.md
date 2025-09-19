# 🐞 No Rate Limit on Verification / Brute Force




## 📖 Description  
Verification endpoints **do not enforce rate limits**, allowing attackers to **brute-force OTPs, tokens, or verification codes**.  
This can lead to **account takeover** or unauthorized access to protected functionality.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify the **OTP or verification endpoint** in the application.  
2️⃣ Automate requests using a script/tool (e.g., Burp Suite Intruder, Postman collection) to submit multiple OTPs or tokens.  
3️⃣ Observe that the server **accepts unlimited attempts** without throttling or locking.  
4️⃣ Optionally, verify if any guess eventually succeeds (only in a permitted testing environment).  

**Evidence:**  
- Repeated requests succeed or are processed without throttling.  
- Server logs show **high-frequency attempts** from the same IP/user.

---

## 🎯 Impact  
- 🔓 **OTP/Token brute-force:** attackers can guess verification codes.  
- 🕵️ **Account compromise:** unauthorized access to user accounts.  
- 🛡️ **Bypasses security controls** for multi-factor verification.  
- 📈 **Severity:** Highs critical for authentication security.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- ⏱️ **Per-user and per-IP rate limits** on OTP/verification endpoints.  
- 🔄 **Exponential backoff** for repeated failures.  
- 🛡️ **CAPTCHA enforcement** on suspicious flows or repeated failures.  
- 🔒 **Lock accounts** temporarily after a defined number of failed attempts.  
- 🧾 **Monitor and alert** for high-frequency verification attempts.  
- 🧪 **Test automated brute-force resistance** periodically to ensure mitigation effectiveness.

---

## 📝 Summary  
Verification endpoints currently lack rate-limiting, enabling **brute-force attacks on OTPs or tokens**.  
Mitigation involves **rate-limiting, exponential backoff, CAPTCHAs, account locking, and monitoring** to prevent account compromise.
