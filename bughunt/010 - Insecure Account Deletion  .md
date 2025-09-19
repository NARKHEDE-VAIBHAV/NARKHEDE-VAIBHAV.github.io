# 🐞 Insecure Account Deletion  

**Severity:** 🔴 High (can lead to full account abuse)  
**Affected Components:** Account deletion endpoints, user management UI/API  

---

## 📝 Description  
The application allows **account deletion without verifying user identity** (no password or OTP prompt).  
This enables attackers to delete user accounts via **CSRF, session hijacking, or replay attacks**.  

---

## 🔬 Detailed Steps to Reproduce (PoC)  
1. Log in as a valid user.  
2. Trigger account deletion via the profile or API endpoint.  
3. Observe that **no password re-entry or OTP confirmation** is required.  
4. Attempt:  
   - **CSRF attack**: Forge a deletion request from another domain.  
   - **Replay attack**: Reuse a previously captured deletion request.  

---

## 📑 Detection / Evidence  
- Captured **HTTP request/response** showing deletion without re-authentication.  
- **Server logs** proving deletion initiated without secondary identity check.  

---

## 🎯 Impact  
⚠️ **Unauthorized account deletion** → loss of user data.  
⚠️ **Denial of service** → attacker can mass-delete accounts.  
⚠️ **User trust damage** → irreversible harm to platform integrity.  

---

## 🛠️ Mitigation & Remediation  
🔐 **Require re-authentication** for destructive actions (password, OTP, or MFA).  
📩 **Email confirmation + soft-delete** → give users a recovery window.  
📝 **Log & monitor** all deletion events, trigger alerts for unusual patterns.  
🚫 **Protect against CSRF/XSRF** → use anti-CSRF tokens & SameSite cookies.  

---
