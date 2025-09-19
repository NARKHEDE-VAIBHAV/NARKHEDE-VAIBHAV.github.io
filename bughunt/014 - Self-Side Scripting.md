# 🐞  Subdomain / Self-Side Scripting (Wildcard Subdomain Issue)

**Severity:** ⚠️ Medium → High (cookie theft, host confusion, potential session hijack)  
**Affected Components:** DNS configuration, subdomain management, cookie scoping, host header validation

---

## 📖 Description  
Improper wildcard DNS or cookie scoping allows attacker-controlled subdomains (e.g., `attacker.example.com`, `localhost.example.com`) to exist under the target domain.  
Browsers may send cookies intended for the main domain to these subdomains, enabling **cookie theft, host confusion, and potential session hijack**.

---

## ⚡ Steps to Reproduce  
1️⃣ Check if the application uses **wildcard DNS** (e.g., `*.example.com`) and resolves uncreated hostnames.  
2️⃣ Attempt to access an arbitrary subdomain:  
```
https://attacker.example.com 
https://localhost.example.com
```

3️⃣ Inspect cookies set for `.example.com` verify if cookies from the main domain are sent to the arbitrary subdomain.  
4️⃣ Observe site behavior when visiting attacker-controlled subdomains.  

**Evidence:** Responses from arbitrary subdomains, cookies sent to unauthorized subdomains, Host header behavior.

---

## 🎯 Impact  
- 🔑 **Cookie theft / session hijack:** attacker can capture cookies intended for main domain.  
- 🧩 **Host confusion:** sensitive operations may be executed on attacker-controlled subdomains.  
- 🕵️ **Phishing / social engineering:** user may be tricked into interacting with malicious subdomains.  
- 📈 **Severity:** Medium → High depending on cookie sensitivity and authentication context.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🚫 Avoid **wildcard DNS** unless strictly necessary; if used, restrict to safe, internal-only subdomains.  
- 🔒 **Set cookie domains narrowly:** avoid `Domain=.example.com` unless required; prefer `Domain=www.example.com` or similar.  
- 🧪 **Validate Host header server-side:** reject requests with unexpected hostnames.  
- 🧹 Periodically audit DNS entries and cookie scopes to prevent unauthorized subdomain usage.  
- 🛡️ Educate developers on risks of subdomain wildcarding and proper cookie scoping.

---

## 📝 Summary  
Wildcard subdomains combined with broad cookie domains allow attackers to control subdomains that receive sensitive cookies.  
Mitigate by **limiting DNS wildcards**, **narrowing cookie domains**, and **validating host headers** to prevent session theft and host confusion attacks.
