# 🐞  CSV Injection (Formula Injection)

**Severity:** ⚠️ Medium → High (can escalate to user-level code execution depending on client)  
**Affected Components:** Export features, reporting endpoints, admin dashboards, CSV/Excel generation APIs

---

## 📖 Description  
CSV/Excel exports include attacker-controlled cell values that begin with `=`, `+`, `-`, or `@`. Spreadsheet applications (Excel, LibreOffice, Google Sheets in some cases) may interpret these as formulas. Malicious formulas can be used for data exfiltration, phishing (formula-based links), or in some environments and configurations to trigger local commands or remote payloads when the file is opened.

---

## ⚡ Steps to Reproduce  
1️⃣ Identify an exportable field that accepts user input (profile name, comment, filename, report column).  
2️⃣ Insert a value beginning with a formula indicator, e.g.:  
   - `=1+1`  
   - `+SUM(1,2)`  
   - `-HYPERLINK("http://attacker.example/p","Click")`  
   *(Use benign formulas when testing.)*

3️⃣ Trigger the CSV export / download from the application.  
4️⃣ Open the exported CSV in a spreadsheet application and observe the cell interpreted as a formula.  
5️⃣ Capture evidence: screenshot of the spreadsheet rendering, raw CSV content showing the leading `=`/`+`/`-`/`@`.  

> ⚠️ Only test on systems you own or have explicit permission to test. Avoid using payloads that attempt to execute system-level commands.

---

## 🎯 Impact  
- 🧾 **Data manipulation / deceptive content** - attacker-controlled formulas can display misleading values or auto-fetch remote resources.  
- 🔗 **Phishing / social engineering** - formulas can create clickable links or alter displayed text to trick users.  
- 📤 **Data exfiltration** - spreadsheet functions (e.g., `WEBSERVICE`, `IMPORTDATA`) may leak cell data to attacker-controlled endpoints in some clients/configurations.  
- 🔥 **Severity:** Medium → High depending on client capabilities, user privileges, and as-opened spreadsheet settings.

---

## 🛠️ Recommendation (Mitigation & Remediation)  
- 🧼 **Neutralize leading formula characters** before export: if a cell starts with `=`, `+`, `-`, or `@`, prefix it with a safe character so the spreadsheet treats it as text (example: prepend a single quote `'` or a tab).  
- 🧾 **Quote fields strictly** per RFC 4180 and ensure your CSV library retains quotes on download.  
- 🧩 **Offer alternative formats** (e.g., export as `.txt` or provide a ZIP containing the CSV) for high-risk data.  
- 🔒 **Sanitize user inputs** and enforce validation rules on fields that will be exported.  
- 🧪 **Add automated tests** to detect unescaped leading characters in export pipelines.  
- 🛡️ **Document and educate** downstream users/admins about safe spreadsheet settings (e.g., disable automatic external data fetch where possible).  

---

## 📝 Summary  
CSV/Excel exports can be abused when attacker-controlled values begin with formula characters (`=`, `+`, `-`, `@`). This can lead to data manipulation, phishing, or data exfiltration depending on the spreadsheet client. Neutralize leading characters on export, enforce strict quoting, add tests, and consider alternative export formats to eliminate the attack vector.
