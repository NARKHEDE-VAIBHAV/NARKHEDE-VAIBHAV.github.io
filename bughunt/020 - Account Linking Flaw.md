# 🐞 Auto-Verify / Account Linking Flaw

**Severity:** 🔴 High (account compromise / verification bypass)  
**Affected Components:** Account verification lifecycle, token binding, registration & email verification flow

---

## 📖 Description  
The verification process **improperly reuses tokens**, allowing a previous verification token to validate a **new account**.  
This can result in **automatic verification of unauthorized accounts**, bypassing intended security controls.

---

## ⚡ Steps to Reproduce  
1️⃣ Create an initial account and capture its **verification token**.  
2️⃣ Create another account using the **same email or registration flow**.  
3️⃣ Submit the **old token** for verification of the new account.  
4️⃣ Observe if the new account becomes **verified without proper token issuance**.

**Evidence:** token reused successfully, server logs showing multiple accounts validated with the same token.

---

## 🎯 Impact  
- 🔓 **Unauthorized account verification:** attackers can auto-verify accounts.  
- 🔄 **Account takeover / confusion:** multiple accounts may be linked incorrectly.  
- 🛡️ **Bypasses security controls** for registration and verification.  
- 📈 **Severity:** High critical authentication/verification flaw.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔒 **Bind tokens to a specific account ID and timestamp** to prevent cross-account reuse.  
- 🚫 **Invalidate tokens immediately after use**.  
- 🔄 **Rotate token storage** and ensure old tokens cannot be replayed.  
- 🧪 **Automated tests:** validate that tokens are single-use and cannot verify multiple accounts.  
- 📝 **Audit verification logs** to detect any token reuse attempts.

---

## 📝 Summary  
The system allows **verification tokens to be reused across accounts**, enabling unauthorized auto-verification.  
Mitigation requires **one-time, account-specific tokens, immediate invalidation after use**, and robust verification logic.
