# 🐞 CSRF (Cross-Site Request Forgery)

**Severity:** 🔴 High (unauthorized state changes / session abuse)  
**Affected Components:** State-changing endpoints, session cookies, authenticated user actions

---

## 📖 Description  
Lack of **CSRF protections** allows attackers to trick authenticated users into executing unwanted actions on the application.  
Attackers can leverage a user’s active session to perform **state-changing operations** like:  
- Changing account settings  
- Performing transactions  
- Deleting data  

---

## ⚡ Steps to Reproduce  
1️⃣ Create a malicious HTML page or form that triggers a POST request to a victim site endpoint.  
2️⃣ Ensure the victim is **authenticated** on the target application.  
3️⃣ When the victim visits the malicious page, the request executes **without their consent**, confirming CSRF vulnerability.  

**Evidence:**  
- State-changing action occurs without user interaction or consent  
- Logs showing action triggered by unexpected source  

---

## 🎯 Impact  
- 🔓 **Unauthorized actions** executed under victim’s identity  
- 🗄️ **Data modification, deletion, or leakage** possible  
- ⚡ **Session abuse**: attacker exploits user session  
- 📈 **Severity:** High critical for endpoints modifying state

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔑 Use **CSRF tokens** for all forms and validate them server-side.  
- 🍪 Set **SameSite=Strict or Lax** for session cookies to prevent cross-site sending.  
- 🔍 Verify **Origin** and **Referer headers** for sensitive operations.  
- 🧪 Test endpoints for CSRF by attempting cross-site requests without valid tokens.  
- 📝 Audit all state-changing endpoints to ensure CSRF protection is enforced.

---

## 📝 Summary  
CSRF allows attackers to **perform actions using authenticated sessions** without user consent.  
Mitigation requires **CSRF tokens, secure cookie settings, and request validation** to protect state-changing operations.
