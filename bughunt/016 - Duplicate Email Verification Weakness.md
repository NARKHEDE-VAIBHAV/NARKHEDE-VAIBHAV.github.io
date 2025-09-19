# 🐞 Duplicate / Plus-Address Email Verification Weakness

**Severity:** ⚠️ Medium (account duplication / verification confusion)  
**Affected Components:** User registration, email normalization, account uniqueness checks

---

## 📖 Description  
The system treats emails like `user@gmail.com` and `user+tag@gmail.com` as distinct, allowing multiple accounts to map to the **same underlying mailbox**.  
This can cause **verification confusion, duplicate accounts, and potential abuse**, especially when plus-addressing is supported by the email provider.

---

## ⚡ Steps to Reproduce  
1️⃣ Register a new account with: `test@gmail.com`.  
2️⃣ Register a second account with: `test+new@gmail.com`.  
3️⃣ Observe if both registrations succeed and create separate accounts.  
4️⃣ Check email delivery for verification tokens note if **conflicting tokens** go to the same inbox.

**Evidence:** multiple accounts associated with the same mailbox, duplicate verification emails received, logs showing conflicting token assignments.

---

## 🎯 Impact  
- 🔄 **Duplicate accounts** → user confusion, abuse potential.  
- 📨 **Verification conflicts** → tokens may overwrite or collide in the same inbox.  
- 🔐 **Authentication / recovery risk** → one mailbox controls multiple accounts.  
- 📈 **Severity:** Medium depends on business rules and account uniqueness requirements.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🔹 **Normalize email addresses** according to provider rules (e.g., ignore `+tag` for Gmail).  
- ✅ **Enforce uniqueness checks** on normalized emails during registration.  
- 📄 **Document behavior** for end users clarify whether plus-addressing is supported.  
- 🧪 **Audit existing accounts** for duplicates caused by plus-addressing.  
- 🔒 Ensure **verification and password recovery** flows respect normalized addresses.

---

## 📝 Summary  
The system allows plus-address variations to create **duplicate accounts** mapped to the same mailbox.  
Mitigation involves **normalizing emails, enforcing uniqueness**, and documenting handling of plus-addressing to prevent confusion and potential abuse.
