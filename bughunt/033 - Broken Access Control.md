# 🐞 Broken Access Control (Generic)

**Severity:** 🔴 Critical (unauthorized access / privilege escalation)  
**Affected Components:** Privileged endpoints, admin APIs, sensitive operations

---

## 📖 Description  
Missing or **incorrect authorization checks** allow low-privilege or unauthorized users to:  
- Access restricted endpoints  
- Perform privileged actions  
- Manipulate data or system functionality  

This represents a **critical access control weakness**.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify sensitive endpoints (admin APIs, privileged operations).  
2️⃣ Attempt actions as a **low-privilege or unauthenticated user**, using:  
- Direct URL access  
- API keys or tokens with limited permissions

3️⃣ Observe whether the action **succeeds without proper authorization**.  

**Evidence:**  
- Logs showing **unauthorized actions performed**  
- Code paths lacking role checks or missing RBAC/ABAC enforcement  
- Screenshots of privileged actions executed by unauthorized accounts

---

## 🎯 Impact  
- 🔓 **Privilege escalation:** attackers gain unauthorized capabilities  
- 🗄️ **Data manipulation or exfiltration:** unauthorized changes to system state  
- ⚡ **Critical security risk:** can lead to full compromise of sensitive operations  
- 📈 **Severity:** Critical immediate remediation required

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔒 Apply **server-side RBAC/ABAC checks** for every sensitive endpoint.  
- 🧪 Implement **unit and integration tests** to verify authorization enforcement.  
- 📝 **Audit all endpoints** for proper role/permission enforcement.  
- 🚫 Apply **least privilege principles**, granting only necessary access.  
- 🔄 Continuously **monitor and log unauthorized attempts** for review.

---

## 📝 Summary  
Broken access control allows **unauthorized users to perform privileged actions**, risking data integrity, privacy, and system security.  
Mitigation requires **comprehensive server-side authorization, testing, and endpoint hardening**.
