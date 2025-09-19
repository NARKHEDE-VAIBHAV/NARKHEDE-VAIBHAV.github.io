# 🐞 HTML Injection in Email / Account Profile

## Description

HTML injection occurs when a web application **fails to properly sanitize user input**, allowing HTML tags to be stored and rendered in emails, account verification messages, or user profiles.  

This can potentially lead to **XSS attacks**, phishing, or layout breaking.

---

## Steps to Reproduce ⚡

1. **Create a New Account with HTML Payload**  
   - Fill registration forms with HTML tags in fields like:
     ```html
     <h1>Name</h1>
     <b>email@gmail.com</b>
     <strong>username</strong>
     ```
   - Submit the registration.

2. **Check Email Verification / Account Profile**  
   - Open the verification email sent to the user.
   - Log in and view the account profile.
   - If HTML tags are rendered instead of being escaped, the bug is confirmed.

3. **Optional: Bypass Restrictions**  
   - If special characters are blocked, use a **proxy tool like Burp Suite** to modify requests and inject payloads manually.

---

## Impact 🚨

- **XSS Vulnerability** → Attackers can execute scripts in user/browser context.  
- **Email Injection** → Emails may display malicious HTML or scripts.  
- **Data Manipulation** → Account information or layouts may be altered.  
- **Phishing Risk** → Malicious HTML can be used for phishing attacks.

---

## Recommendation 🛠️

- **Sanitize Inputs** → Escape HTML special characters before storing.  
- **Validate Emails & User Fields** → Only allow safe characters.  
- **Content Security Policy (CSP)** → Mitigate script execution in emails.  
- **Server-Side Checks** → Never rely only on client-side validation.

---

## Summary 📝

HTML injection in emails and profiles is a **critical logical vulnerability**.  
It allows attackers to manipulate **how content is rendered**, potentially leading to **XSS or phishing attacks**.  
Proper **input validation, output encoding, and server-side filtering** are essential.
