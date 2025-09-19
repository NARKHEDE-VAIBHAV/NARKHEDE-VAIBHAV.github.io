# 🐞 Logical Bug: Joining Group Without Invite Link

## Description

A **logical bug** is a flaw in the system’s logic that allows unintended behavior.  
In this case, we discovered a bug in a **group/team joining mechanism**.

---

## Steps to Reproduce the Bug ⚡

1. **Send Invite Link**  
   - An admin sends an invite link to a user to join a group or team.  
   - Example: `test@gmail.com` receives the invite.

2. **Create Account Without Using Invite**  
   - Create a new account using the same email (`test@gmail.com`) **without clicking the invite link**.

3. **Check Group Membership**  
   - Log in with the new account.  
   - If the account is already part of the group/team **without using the invite link**, this indicates a **logical bug**.

---

## Impact 🚨

- Users can **bypass intended invite flow**.  
- Compromises **access control** for the group/team.  
- Could be **exploited for unauthorized access**.  

---

## Recommendation 🛠️

- Fix the **account creation and invite validation logic**.  
- Ensure **users can join groups only via a valid invite link**.  
- Add **server-side verification** to prevent automatic membership bypass.  

---

## Summary 📝

Logical bugs may **not crash the system** but **break intended behavior**, leading to **security or workflow issues**.  
This bug demonstrates the importance of **validating user actions and permissions** properly.
