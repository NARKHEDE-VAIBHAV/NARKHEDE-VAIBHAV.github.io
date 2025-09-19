# 🐞  Web Cache Deception

**Severity:** 🔴 High (data leakage / sensitive content exposure)  
**Affected Components:** Caching layers: CDN, reverse proxy, browser cache, user-specific endpoints

---

## 📖 Description  
Personalized or sensitive content can be **cached under attacker-controlled URLs** or paths that appear static (e.g., `.css`, `.js`).  
This may cause **private user data** to be served to other users via shared caches, reverse proxies, or CDN layers.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify user-specific content (e.g., `/profile/<user>`).  
2️⃣ Request the content using a **static-looking extension**:  
```
/profile/<user>.css?data=<sensitive_info>
```
3️⃣ Check if the cached response is served to **other users**.  
4️⃣ Inspect cache headers: missing `Cache-Control: private` or `no-store` may indicate vulnerability.

**Evidence:**  
- Cache responses containing another user’s private data.  
- Headers showing public caching of dynamic content.

---

## 🎯 Impact  
- 🔓 **Data leakage:** personal information served to unauthorized users.  
- ⚡ **Sensitive info exposure:** may include profiles, tokens, or session data.  
- 🛡️ **Trust compromise:** cached content may bypass application-level access controls.  
- 📈 **Severity:** High user privacy and security are directly affected.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔒 **Set Cache-Control:** `private` or `no-store` for all user-specific responses.  
- 🚫 Avoid serving **dynamic pages as static** based on file extensions.  
- 🔄 Use **Vary headers** correctly to segment cache keys by user/session attributes.  
- 🧪 **Test caching layers** to ensure private data cannot be served across users.  
- 📝 **Audit CDN and reverse proxy rules** to prevent caching of sensitive endpoints.

---

## 📝 Summary  
Web cache deception occurs when **user-specific data is cached under static-like paths**, potentially exposing sensitive information to other users.  
Mitigation requires **proper cache headers, careful content extension handling, and cache segmentation** to protect private data.
