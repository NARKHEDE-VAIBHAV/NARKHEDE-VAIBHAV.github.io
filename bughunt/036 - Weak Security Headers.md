# 🐞 Missing / Weak Security Headers

**Severity:** ⚠️ Medium (XSS, clickjacking, content sniffing risk)  
**Affected Components:** Web responses, content security, HTTP headers

---

## 📖 Description  
Absence of critical security headers increases exposure to:  
- **Cross-Site Scripting (XSS)**  
- **Clickjacking** via iframes  
- **Content sniffing** leading to MIME-type attacks  
- Leakage of sensitive referrer information  

Common missing headers include:  
- `Content-Security-Policy (CSP)`  
- `X-Frame-Options`  
- `X-Content-Type-Options`  
- `Referrer-Policy`

---

## ⚡ Steps to Reproduce  
1️⃣ Inspect HTTP headers of the target website:  
```bash
curl -I https://target.example.com
```

2️⃣ Note missing or weak security headers.
3️⃣ Optionally test impact using safe scripts or tools to confirm missing protections.

Evidence:

Screenshot or terminal output of response headers showing missing CSP, X-Frame-Options, etc.

---

## 🎯 Impact

🔓 XSS risk: unsafe scripts can execute in user browsers

📌 Clickjacking: attackers can embed site in hidden iframes

🧪 Content sniffing: browsers may misinterpret MIME types, leading to code execution

📈 Severity: Medium increases attack surface

🛠️ Recommendation (Mitigation & Remediation)

🛡️ Add and configure the following headers:

Content-Security-Policy (CSP) tailored to allowed sources

X-Frame-Options: DENY to prevent framing

X-Content-Type-Options: nosniff to prevent MIME sniffing

Referrer-Policy: strict-origin-when-cross-origin or similar

🧪 Test CSP and header configuration in different browsers to ensure functionality

🔄 Continuously audit HTTP responses for missing or misconfigured security headers

---

## 📝 Summary

Missing or weak security headers increase the risk of XSS, clickjacking, and content sniffing.

Mitigation requires proper header configuration, CSP tuning, and continuous validation to protect web users.
