# 🐞 Forgot Password Link Reuse (Not Expiring)

**Severity:** 🔴 High (account recovery compromise → account takeover)  
**Affected Components:** Password reset flow, token issuance & validation

---

## 📖 Description  
Password reset tokens/links remain valid after being used once or for an excessive duration. This allows an attacker who has captured the reset link (via email compromise, phishing, or logs) to **reuse the token** to reset the account’s password again even after the legitimate user has already performed a reset.

---

## ⚡ Steps to Reproduce
1️⃣ Request a password reset for a valid account and **capture the reset token/link** from the email.  
2️⃣ Use the link to perform a successful password reset and set a new password.  
3️⃣ Reuse the same link/token again either immediately or after some delay.  
4️⃣ Observe that the token **still works** and allows another reset attempt.  

**Evidence to collect:** screenshots of multiple successful resets with the same token, HTTP request/response showing reused token still accepted, logs confirming multiple resets with identical token.

---

## 🎯 Impact  
- 🔓 **Account takeover:** attacker with access to old reset link can repeatedly hijack the account.  
- ⏳ **Extended risk window:** long-lived or multi-use reset links give attackers time to exploit.  
- 🧑‍💻 **Bypasses password recovery controls:** makes password resets unreliable for securing accounts.  
- 📈 **Severity:** High critical security control bypass.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🧼 **Single-use tokens:** mark token as consumed in the DB immediately upon successful reset.  
- 🔒 **Server-side storage (hashed):** store reset tokens hashed with a strong algorithm (e.g., HMAC or bcrypt) and validate against user input.  
- ⏱️ **Short TTL:** set strict expiration (e.g., 15–60 minutes max) for reset tokens.  
- 🔁 **Rotate tokens:** invalidate all previous tokens when issuing a new one for the same account.  
- ✉️ **User notifications:** send email/SMS alert when a reset is requested and when it is successfully completed.  
- 🛡️ **Audit & logging:** log all reset attempts and investigate suspicious multiple reset requests.  
- 🧪 **Automated testing:** include test cases verifying that tokens cannot be reused and expire correctly.  

---

## 📝 Summary  
Password reset tokens are reusable or long-lived, leaving accounts vulnerable to takeover. To secure the password recovery process, enforce **single-use, short-lived tokens**, hash & store them securely server-side, invalidate on use or reissue, and notify users on reset activity.
