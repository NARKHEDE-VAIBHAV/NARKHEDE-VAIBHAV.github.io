# 🐞 AWS Cognito Token Misuse → Account Takeover

**Severity:** 🔴 Critical  
**Affected Components:** AWS Cognito IDP, Access Token Handling, User Attribute Updates

---

## 📖 Description  

AWS Cognito issues **access tokens** to authenticated users. If an attacker intercepts or reuses a valid token, they can call Cognito-IDP APIs to read or modify user attributes (e.g., email), enabling **account takeover** without the victim’s credentials or MFA.  

---

## ⚡ Steps to Reproduce  

1️⃣ Create or log in to a test account on the target application using Cognito.  
2️⃣ Capture the **access token** from network requests (browser dev tools or proxy).  
3️⃣ Retrieve user information using AWS CLI:

```bash
aws cognito-idp get-user --region <region> --access-token <captured_token>
```

4️⃣ Modify the user’s email:
```
aws cognito-idp update-user-attributes \
  --region <region> \
  --user-attributes Name=email,Value=victimemail@gmail.com \
  --access-token <captured_token>
```

5️⃣ Refresh the victim’s session or disable JavaScript requests.

✅ Evidence: Successful execution of AWS CLI commands and authentication logs showing access with the stolen token.

---

## 🎯 Impact

🔓 Account Takeover: attacker can change victim’s email and lock them out

🧑‍💻 Data Exposure: attacker retrieves sensitive user attributes

🚫 Authentication Bypass: stolen token grants full access without password or MFA

📈 Severity: Critical complete compromise of affected user accounts


---

## 🛠️ Recommendations

🔒 Reduce access token TTL to a few minutes and require token refresh.

🔗 Bind tokens to device/session context (IP address, fingerprint).

✅ Require re-authentication for sensitive actions (email, password).

📩 Notify users of attribute changes and allow rollback.

🛑 Implement token revocation on logout or password reset.

🔎 Log and monitor API calls; add rate-limiting for sensitive operations.


---

## 📝 Summary

AWS Cognito access tokens, if intercepted, allow attackers to read and modify user attributes, leading to full account takeover.

Mitigation requires strict token management, session binding, re-authentication for critical actions, and real-time monitoring.
