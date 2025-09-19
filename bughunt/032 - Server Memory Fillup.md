# 🐞 Server Memory Fillup (Mass Upload)

**Severity:** 🔴 High (DoS / resource exhaustion)  
**Affected Components:** File upload endpoints, storage backend, server disk resources

---

## 📖 Description  
File upload endpoints **without restrictions** allow attackers to upload numerous files with **variable filenames**, consuming server storage.  
This can result in:  
- Disk space exhaustion  
- Application or service downtime  
- Denial of service for legitimate users  

---

## ⚡ Steps to Reproduce  
1️⃣ Identify the **file upload endpoint** in the application.  
2️⃣ Automate uploads using scripts or tools, changing filenames for each file.  
3️⃣ Monitor **disk usage** and server response behavior.  
4️⃣ Observe system slowdown, errors, or denial of service as storage fills up.

**Evidence:**  
- Disk usage metrics increasing rapidly  
- Server returning storage-related errors or 500 responses  
- Logs showing repeated upload activity

---

## 🎯 Impact  
- ⚡ **Denial of service:** legitimate users unable to upload or access resources  
- 🗄️ **Resource exhaustion:** server storage and memory consumed  
- 🛡️ **Service downtime** or application instability  
- 📈 **Severity:** High immediate mitigation recommended

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 📏 **Enforce file size limits** and **per-user storage quotas**.  
- ⏱️ Implement **upload throttling** to limit request rate.  
- 🔒 Require **authentication and authorization** for file uploads.  
- 🧹 Use **background cleanup jobs** to remove temporary or old files.  
- 🦠 Scan uploaded files for **malware** and invalid content.  
- 🧪 Test endpoint under high upload loads to ensure mitigation effectiveness.

---

## 📝 Summary  
Unrestricted mass file uploads can **fill server storage and cause DoS**.  
Mitigation involves **size limits, quotas, throttling, authentication, and cleanup mechanisms** to protect resources and availability.
