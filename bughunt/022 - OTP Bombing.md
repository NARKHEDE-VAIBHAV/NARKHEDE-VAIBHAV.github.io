# 🐞 Email / OTP Bombing

**Severity:** ⚠️ Medium (availability impact / user disruption)  
**Affected Components:** Mail/send endpoints, OTP/resend APIs, notification services

---

## 📖 Description  
Attackers can **trigger repeated sending of OTPs or emails** to a target mailbox, leading to:  
- Inbox flooding  
- Mail server resource exhaustion  
- User confusion or annoyance  

This is often referred to as **email/OTP bombing** and can degrade system availability and user experience.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify the **OTP or email resend endpoint**.  
2️⃣ Rapidly submit requests for the **same recipient email address**.  
3️⃣ Observe the target mailbox receiving multiple emails.  
4️⃣ Optionally, monitor mail server logs or bounce messages for rate-limit violations.  

**Evidence:**  
- High-volume delivery attempts logged.  
- Mail server rate-limit triggers or bounce notifications.  
- Screenshots showing multiple OTP emails received in short intervals.

---

## 🎯 Impact  
- 📩 **Inbox flooding / user annoyance** → negative user experience.  
- ⚡ **Server resource abuse** → potential mail service disruption.  
- 🔐 **Security impact:** may assist attackers in other phishing/social engineering attacks.  
- 📈 **Severity:** Medium → High depending on frequency and volume.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- ⏱️ **Rate-limit email/OTP sends** per recipient and per IP address.  
- 🔄 **Implement cooldown intervals** for resend requests (e.g., 30–60 seconds).  
- 🛡️ **Monitor for abuse patterns** and temporarily block suspicious IPs/users.  
- 🧾 **Audit logs** for unusual request spikes.  
- 🧪 **Test system** under high-frequency requests to ensure mitigations prevent mass emailing.

---

## 📝 Summary  
OTP/email endpoints currently allow **rapid repeated requests**, enabling mailbox flooding and potential mail server resource abuse.  
Mitigation requires **rate-limiting, cooldowns, abuse detection, and monitoring** to protect users and infrastructure.
