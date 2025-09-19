# 🐞 Email Change Still Allows Old Email Login

**Severity:** 🔴 High (authentication bypass / account confusion)  
**Affected Components:** Account identifier mapping, login logic, email change workflow

---

## 📖 Description  
After a user changes their primary email, the old email address continues to function as a valid login identifier.  
This allows attackers or unauthorized users to **access accounts via legacy credentials**, bypassing expected security controls.

---

## ⚡ Steps to Reproduce  
1️⃣ Create a new account with email: `old@example.com`.  
2️⃣ Log in and **change the account email** to `new@example.com`.  
3️⃣ Attempt login using the old email `old@example.com`.  
4️⃣ Observe that authentication **still succeeds** without verification.  

**Evidence:** successful login with old email, authentication logs showing both old and new email access.

---

## 🎯 Impact  
- 🔓 **Authentication bypass:** old email can be used to access account.  
- 🧑‍💻 **Account takeover risk:** attacker knowing the legacy email can log in.  
- 🔄 **Account confusion:** users may not realize both emails remain active.  
- 📈 **Severity:** High compromises account security and identity integrity.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔄 **Revoke old email associations** immediately upon email change.  
- 📩 **Require verification** of the new email before allowing login.  
- 🚫 **Block old email logins** until new email is confirmed and old email credentials are invalidated.  
- 🧾 **Audit and log** email change events; notify users when a change occurs.  
- 🔒 Implement server-side checks to ensure **login identifiers map only to active, verified emails**.

---

## 📝 Summary  
The old email remains valid for login even after changing the account email, creating a **security risk for unauthorized access**.  
Mitigate by **revoking legacy credentials**, enforcing **email verification**, and preventing login via old email until proper cleanup is completed.
