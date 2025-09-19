# 🐞 Server Path Hijacking (URL Reflection)

**Severity:** 🔴 High (unauthorized content access / information leakage)  
**Affected Components:** Router/path-to-resource mapping, static content resolution, user-controlled paths

---

## 📖 Description  
User-controlled path segments are **directly used to fetch files or resources** without proper validation.  
Attackers can craft **malicious paths** to access **unintended content**, causing **information leakage or unauthorized file access**.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify URL patterns that map user input to server paths, e.g.: /user/<username> .

2️⃣ Replace `<username>` with **attacker-controlled paths** pointing to sensitive files or directories.  
3️⃣ Observe server response for **unexpected content**, file types, or data leakage.  

**Evidence:**  
- Response returning content **not associated with the original username**.  
- File-type or content mismatch indicating server fetched unintended files.

---

## 🎯 Impact  
- 🔓 **Unauthorized access** to files or resources.  
- 🕵️ **Information leakage**: private files, configs, or user data exposed.  
- ⚡ **Potential for further exploitation** if critical system files are accessible.  
- 📈 **Severity:** High sensitive resource exposure possible.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔧 **Canonicalize and validate path segments** before resolving files.  
- 🚫 **Avoid direct filesystem mapping** from user-controlled input.  
- 🗝️ Use **ID-based resource keys** mapped server-side to resources instead of exposing raw paths.  
- 🧪 **Test endpoint paths** to ensure arbitrary file requests are rejected.  
- 🧾 **Log access attempts** to detect path tampering or abuse.

---

## 📝 Summary  
Server path hijacking occurs when **user-controlled paths map directly to filesystem resources**, enabling attackers to retrieve unintended content.  
Mitigation requires **path validation, canonicalization, and server-side resource mapping** to prevent unauthorized access.

