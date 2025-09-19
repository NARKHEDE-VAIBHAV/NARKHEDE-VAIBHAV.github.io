# 🐞 Session Not Expiring After Logout / Password Change

**Severity:** 🔴 Critical (session hijack / account takeover risk)  
**Affected Components:** Session management, cookie handling, token revocation, auth services

---

## 📖 Description  
Sessions (cookies/JWTs/refresh tokens) remain valid after a user logs out or changes their password. An attacker holding stolen/stale tokens can continue to access protected resources even after the user thought they’d terminated their session enabling account takeover and persistent unauthorized access.

---

## ⚡ Steps to Reproduce
1️⃣ Log in as a user and **capture session artifacts** (e.g., `sessionid` cookie, `Authorization: Bearer <jwt>`, refresh token).  
2️⃣ Perform a logout or change the account password via the application.  
3️⃣ In a new client (Incognito / different browser), **replay the captured token/cookie** in requests to protected endpoints.  
4️⃣ Observe that the requests **still succeed** and protected resources are accessible.  

**Evidence to collect:** HTTP requests showing old cookie/JWT used post-logout, server logs showing authenticated requests with a revoked/stale token, screenshots of accessed protected pages.

---

## 🎯 Impact  
- 🔓 **Session hijack / account takeover**  attacker retains access after user logs out or rotates credentials.  
- 🔁 **Persistent access** despite credential change, defeating password resets as a remediation step.  
- 🔐 Compromises confidentiality, integrity, and availability of user data and actions.  
- 📈 **Severity:** Critical  immediate remediation required.

---

## 🛠️ Recommendation (Mitigation & Remediation)
- 🔒 **Server-side token invalidation:** On logout or password change, mark session cookies/JWT IDs/refresh tokens as revoked in the server session store or token blacklist. Do **not** rely solely on client-side deletion.  
- 🔄 **Rotate session identifiers** on sensitive events (login, password change, privilege escalation). Issue a brand-new session ID and expire the old one.  
- ⏱️ **Use short-lived access tokens** + secure refresh tokens. Keep access tokens short and verify refresh token validity on use.  
- 🗂️ **Maintain a session store / revocation list** (in DB/Redis) that can be checked quickly on each request (or use token versioning / token IDs embedded in JWTs).  
- 🧾 **Invalidate refresh tokens** on logout/password change and revoke any active refresh tokens for the account.  
- 🍪 **Harden cookie settings:** `Secure`, `HttpOnly`, `SameSite=strict/lax` as appropriate, and set reasonable `Max-Age`.  
- 🔐 **Protect logout endpoint:** require POST + anti-CSRF tokens and check the current session before clearing it.  
- 🕵️ **Detect reuse of revoked tokens:** log and alert on usage of revoked/stale tokens; optionally force logout from all devices on suspicious activity.  
- ✉️ **Notify users** when sessions are terminated or on critical events; provide a "Sign out everywhere" option that revokes all sessions.  
- 🔁 **Test and validate:** add automated tests to verify session invalidation on logout and password change across token types and endpoints.

---

## 📝 Summary  
Current behavior allows stale session tokens to remain valid after logout or password change, enabling attackers to retain access. Fix by performing **server-side revocation**, **rotating session IDs**, using **short-lived tokens with managed refresh tokens**, and adding monitoring & user-facing controls (e.g., sign out everywhere). These measures will close the critical session persistence vector and restore effective account termination.
