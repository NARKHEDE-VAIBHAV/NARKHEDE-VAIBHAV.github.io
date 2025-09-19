# 🐞 Recaptcha Bypass (Parameter Removal)

**Severity:** 🔴 High (automation abuse / account takeover risk)  
**Affected Components:** Login, signup, OTP, and other endpoints protected by captcha

---

## 📖 Description  
If captcha parameters (e.g., `captcha_token`) are **optional or not properly validated server-side**, attackers can **remove or nullify the token** and bypass the captcha.  
This enables **automation, brute-force attacks, or scripted abuse** of protected endpoints.

---

## ⚡ Steps to Reproduce  
1️⃣ Capture a request to an endpoint protected by captcha (login/signup/OTP).  
2️⃣ Remove or set the `captcha_token` parameter to null.  
3️⃣ Replay the modified request.  
4️⃣ Observe whether the server **accepts the request without validating the captcha**.  

**Evidence:**  
- Successful execution of requests **without a captcha token**.  
- Logs showing missing or skipped server-side validation.

---

## 🎯 Impact  
- 🤖 **Automation abuse:** bots can bypass captcha protections.  
- 🔓 **Brute-force / credential stuffing** possible on authentication endpoints.  
- 🛡️ **Security controls weakened** for suspicious or high-volume flows.  
- 📈 **Severity:** High immediate remediation recommended.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔒 **Validate captcha tokens server-side** with the vendor API, verifying TTL and signature.  
- ✅ **Make captcha mandatory** for all sensitive flows, or trigger after suspicious activity thresholds.  
- 🧪 **Test endpoints** to ensure requests without captcha are rejected.  
- 🧾 **Audit logs** to detect bypass attempts.  

---

## 📝 Summary  
Captcha protections can be bypassed if parameters are **optional or unvalidated server-side**.  
Mitigation requires **strict server-side verification, mandatory enforcement, and monitoring** to prevent automated abuse.
