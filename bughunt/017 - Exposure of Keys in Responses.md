# 🐞 Exposure of Activation/Reset Keys in Responses

**Severity:** 🔴 High (token leakage → account compromise risk)  
**Affected Components:** API responses, logs, client-side debug outputs, account activation & password reset flows

---

## 📖 Description  
Activation or password reset tokens/keys are **accidentally included in HTTP responses or client-side logs**, making them accessible to attackers who intercept traffic or inspect browser console/network responses.  
This exposure can allow **unauthorized account activation, password reset, or takeover**.

---

## ⚡ Steps to Reproduce  
1️⃣ Trigger an **account activation** or **password reset** flow.  
2️⃣ Intercept HTTP responses using tools like **Burp Suite** or browser **DevTools network tab**.  
3️⃣ Inspect response **bodies and headers** for presence of activation/reset tokens.  
4️⃣ Optionally, inspect **console logs** for any client-side exposure.  

**Evidence:**  
- Token appearing plaintext in response body or headers.  
- Screenshots of DevTools network panel showing the token.  

---

## 🎯 Impact  
- 🔑 **Account compromise:** attacker can use exposed token to reset passwords or activate accounts.  
- 🕵️ **Token replay:** tokens valid for multiple operations can be abused repeatedly.  
- 📈 **Severity:** High immediate remediation recommended.  

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🚫 **Do not return tokens in API responses**; deliver them **only via secure channels**, e.g., email links with HTTPS.  
- 🧹 **Avoid logging tokens** in client-accessible logs (console, browser storage). Sanitize logs server-side and client-side.  
- 🔒 **Hash tokens** server-side; compare hashes on token submission instead of storing plaintext.  
- 🧪 **Automate checks** to ensure tokens are never exposed in responses or logs.  
- ⏱️ **Set short token lifetimes** and enforce single-use to reduce impact if accidentally exposed.

---

## 📝 Summary  
Activation and password reset tokens are exposed in HTTP responses or client logs, creating a **high-risk account takeover vector**.  
Mitigation requires **secure delivery, hashed storage, log sanitization, and single-use expiration** to prevent unauthorized use.
