# 🐞  CRLF Injection

**Severity:** ⚠️ Medium → High (HTTP header injection / cache poisoning)  
**Affected Components:** Input fields used in HTTP headers, redirect locations, cookies, server responses

---

## 📖 Description  
Carriage Return / Line Feed (CRLF) sequences can be **injected into user-controlled input** that is reflected in HTTP headers.  
This allows attackers to:  
- Add arbitrary headers  
- Perform **HTTP response splitting**  
- Potentially manipulate caches, redirect flows, or set malicious cookies

---

## ⚡ Steps to Reproduce  
1️⃣ Identify an endpoint that **reflects user input into headers** or redirects.  
2️⃣ Send a malicious payload with CRLF sequences, e.g.:  

%0D%0ASet-Cookie:crlfinj=1
<script>alert(1)</script>

3️⃣ Observe server response for:  
- Injected headers  
- Split responses in downstream caches or proxies  
- Unexpected cookies or redirects  

**Evidence:**  
- Response headers containing attacker-injected entries  
- Proxy/cache logs showing split or malformed responses  

---

## 🎯 Impact  
- 🔑 **Header injection:** attacker can manipulate cookies, caching, or security headers.  
- 🔁 **HTTP response splitting:** may lead to XSS, cache poisoning, or redirect attacks.  
- 📈 **Severity:** Medium → High depending on context and sensitive header exposure.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- ✋ **Sanitize/reject CRLF characters** in inputs used for headers, redirects, or cookies.  
- 🔧 **Use framework helpers** for setting headers rather than raw string concatenation.  
- 🧪 **Test for CRLF injection** in all user-controllable header inputs.  
- 📝 **Audit caching layers and proxies** for evidence of injection exploitation.  

---

## 📝 Summary  
CRLF injection allows attackers to **manipulate headers or split responses**, risking XSS, cookie theft, and cache poisoning.  
Mitigation requires **input sanitization, safe header handling, and framework-based APIs** for setting headers securely.
