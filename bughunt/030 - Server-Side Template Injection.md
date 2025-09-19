# 🐞 Server-Side Template Injection (SSTI)

**Severity:** 🔴 Critical (remote code execution / sensitive data exposure)  
**Affected Components:** Template engines, input-to-template rendering, dynamic content rendering

---

## 📖 Description  
User input is **directly rendered by the template engine** without proper sanitization, allowing attackers to inject template expressions.  
This can lead to:  
- Arbitrary code execution on the server  
- Sensitive data exposure from the application or environment  
- Application compromise  

---

## ⚡ Steps to Reproduce  
1️⃣ Identify input fields that are rendered in server-side templates.  
2️⃣ Submit **template expressions** specific to the template engine, e.g.:  

- **Jinja2:** `{{7*7}}`  
- **Velocity:** `${7*7}`

3️⃣ Observe server response: if the input is evaluated, the response contains the result (e.g., `49`).  
4️⃣ Optionally, review logs for template errors or stack traces indicating injection points.

**Example Payloads:**  
{77}}, ${{77}}, ${7*7}

**Evidence:**  
- Response contains evaluated expression  
- Logs or stack traces revealing template engine execution  

---

## 🎯 Impact  
- 🔓 **Remote code execution (RCE)** potential  
- 🗃️ **Sensitive data exposure** (environment variables, secrets)  
- ⚡ **Full application compromise** if exploited  
- 📈 **Severity:** Critical immediate remediation required

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🚫 **Do not render user input directly** in templates.  
- 🔒 Use **strict sandboxed rendering** or escape template markers to prevent evaluation.  
- 🔄 **Update template engines** to latest versions and apply safe APIs.  
- 🧪 **Test endpoints** with known payloads to ensure template expressions are not executed.  
- 🧾 **Audit logs** for any suspicious template execution patterns.

---

## 📝 Summary  
SSTI arises when **user input is evaluated by the template engine**, potentially leading to RCE or data leakage.  
Mitigation requires **sandboxing, escaping inputs, using safe template APIs, and keeping engines updated**.
