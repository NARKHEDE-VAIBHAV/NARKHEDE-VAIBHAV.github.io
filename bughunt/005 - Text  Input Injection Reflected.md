# 🐞 Text / Input Injection (Reflected)

---

## 📖 Description  
Unsanitized user input is reflected back in server responses (URL paths, query parameters, headers, error pages, etc.).  
This allows attackers to manipulate how content is displayed, trick users (🎭 phishing), or escalate into Cross-Site Scripting (💥 XSS).

---

## ⚡ Steps to Reproduce  
1️⃣ Identify an endpoint that reflects input (e.g., search, error, path-based pages).  
2️⃣ Send a request with a unique token: https://target.example.com/search?q=tomato123 .
3️⃣ Check the response body confirm `tomato123` is reflected.  
4️⃣ Replace token with harmless HTML:  <b>REFLECT_TEST</b> - If it renders as bold → reflection is unsafe.  
5️⃣ (🔒 With permission) test safe XSS payloads in a controlled environment to confirm exploitability.

---

## 🎯 Impact  
- 🕵️ Attacker can craft **phishing pages** that appear genuine.  
- 🧭 Enables **reconnaissance for XSS** attacks.  
- 💳 Potential **account takeover, session hijacking, data theft** if escalated.  
- 📈 **Severity:** Low → Medium (becomes High if active HTML/JS is executed).

---

## 🛠️ Recommendation  
- ✨ **Escape output by context** (HTML, attributes, JavaScript, URLs).  
- 🏗️ Use **templating engines** with built-in escaping (e.g., Jinja2, Handlebars, Twig).  
- ✅ **Validate & whitelist** input values server-side.  
- 🚫 Avoid reflecting raw input in **emails, verification pages, and critical UI**.  
- 🛡️ Add **Content Security Policy (CSP)** for defense-in-depth.  
- 🤖 Add **automated tests** to detect and block regressions.

---

## 📝 Summary  
Reflected input is shown unescaped in responses, making the app vulnerable to deception (🎭 phishing) and XSS (💥).  
Mitigate by encoding outputs, validating inputs, and using safe frameworks. Strengthen with CSP and regression testing.  
