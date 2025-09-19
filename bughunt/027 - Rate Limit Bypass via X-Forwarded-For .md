# 🐞 Rate Limit Bypass via X-Forwarded-For

**Severity:** ⚠️ Medium → High (rate-limiting bypass / DoS risk)  
**Affected Components:** Rate-limiter logic, proxy trust configuration, authentication/verification endpoints

---

## 📖 Description  
If the application **trusts unvalidated `X-Forwarded-For` headers** to identify client IPs, attackers can **spoof IP addresses** to evade throttling or bypass rate limits.  
This allows **unlimited requests** from a single client by cycling IPs in the header.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify endpoints with **rate-limiting** based on IP.  
2️⃣ Send requests with **custom `X-Forwarded-For` headers** using different fake IP addresses.  
3️⃣ Observe if the **rate-limit resets** or requests continue to succeed.  

**Evidence:**  
- Logs showing **rapid requests with varying X-Forwarded-For values**.  
- Rate-limit counters inconsistent with actual client IP.  
- Successful bypass of throttling rules.

---

## 🎯 Impact  
- 🔓 **Rate-limit bypass:** attackers can perform brute-force, spam, or DoS attacks.  
- ⚡ **Resource abuse:** server resources consumed beyond expected limits.  
- 🛡️ **Authentication/verification endpoints** may be attacked without restriction.  
- 📈 **Severity:** Medium → High depending on endpoint sensitivity.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔒 **Trust `X-Forwarded-For` only from known, trusted proxies**.  
- 🧾 Use **server-side determined remote IP** (e.g., `X-Real-IP`) validated against upstream proxies.  
- 🔄 **Combine IP-based and account-based rate limits** to prevent single-point bypass.  
- 🧪 Test endpoints to ensure **spoofed headers cannot bypass throttling**.  
- 📄 Audit logging to detect suspicious patterns from spoofed headers.

---

## 📝 Summary  
Relying on untrusted `X-Forwarded-For` headers allows **attackers to bypass rate-limits**.  
Mitigation requires **trusted proxy validation, server-determined IPs, and layered throttling** to maintain endpoint protection.
