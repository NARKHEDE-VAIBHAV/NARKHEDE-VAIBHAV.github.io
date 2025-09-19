# 🐞 Intercom / Chat Misconfiguration

**Severity:** ⚠️ Medium → High (data leakage / impersonation risk)  
**Affected Components:** Third-party chat widgets (Intercom), client-side configuration, front-end JS

---

## 📖 Description  
Misconfigured chat widgets allow attackers to **manipulate the widget via browser console**, potentially:  
- Booting the widget with arbitrary identities  
- Accessing sensitive conversation data  
- Impersonating users or support agents  

This exposes **PII, internal identifiers, and chat history** to unauthorized users.

---

## ⚡ Steps to Reproduce  
1️⃣ Open the application in a browser.  
2️⃣ Open **DevTools / Console**.  
3️⃣ Attempt to boot Intercom with a different identity, for example:  
```
javascript
Intercom('boot', { email: 'support@target.com' })
```
4️⃣ Observe API responses and chat behavior note if sensitive data is returned.

5️⃣ Inspect the DOM for exposed identifiers or tokens.

Evidence:

Console commands returning unexpected chat history.

DOM elements revealing internal IDs or emails.

Screenshots showing impersonation or data leakage.

---

## 🎯 Impact

🔑 Data leakage: conversation history, PII, or internal support identifiers exposed.

🕵️ Impersonation risk: attacker may send messages as another user or support agent.

🛡️ Client-side vulnerability: trust in JS boot configuration can be abused.

📈 Severity: Medium → High depending on sensitivity of data.

🛠️ Recommendation (Mitigation & Remediation)

🔒 Server-issued tokens: require server-side token validation for booting chat widgets.

🧹 Restrict client-side boot parameters: prevent setting arbitrary identities from the console.

🚫 Avoid embedding sensitive info in widget config (emails, internal IDs, PII).

🧪 Test console exploits: simulate attempts to manipulate chat to verify protections.

📄 Document widget usage: ensure front-end code follows least privilege principles and sanitizes data exposure.

---

## 📝 Summary

Misconfigured chat widgets can be manipulated via browser console, exposing sensitive data and enabling impersonation.

Mitigation involves server-side token validation, restricted boot parameters, and removing PII from client config to secure chat services.
