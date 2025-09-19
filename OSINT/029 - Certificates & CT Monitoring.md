# 🔐 Certificates & CT Monitoring 

**Intro:**  
Certificate Transparency (CT) and SSL certificate monitoring are vital for **tracking domain ownership, detecting phishing, and identifying exposed infrastructure**. OSINT analysts use these tools to uncover relationships between domains, monitor certificate issuance, and detect anomalies.

---

## 🔗 Resources & Quick Guide

- 📜 **[crt.sh](https://crt.sh/)**  
  *What:* Search Certificate Transparency logs.  
  *Why use it:* Identify all SSL certificates issued for a domain and track historical changes.

- 🔍 **[Censys Certificates](https://search.censys.io/certificates)**  
  *What:* Certificate and x509 attribute pivots.  
  *Why use it:* Explore certificate details and linked infrastructure for investigative research.

- ⚡ **[CertStream](https://certstream.calidog.io/)**  
  *What:* Real-time CT feed via WebSocket.  
  *Why use it:* Monitor new certificate issuance live to detect suspicious domains quickly.

- 📊 **[Rapid7 Open Data](https://opendata.rapid7.com/)**  
  *What:* Sonar datasets covering DNS, HTTP, and SSL.  
  *Why use it:* Analyze global SSL deployment and track exposed services.

- 🖼️ **[Favicons/mmh3](https://github.com/devincao/favicons-hash)**  
  *What:* Hash favicons to cluster infrastructure.  
  *Why use it:* Pair with Shodan or Censys searches to discover related assets.

- ✅ **[Cert Spotter](https://sslmate.com/certspotter)** [Freemium]  
  *What:* CT monitoring and alerts.  
  *Why use it:* Receive notifications for new certificates associated with your target domains.

- 🛠️ **[Let's Debug](https://letsdebug.net/)** [Free]  
  *What:* Diagnose certificate issuance issues.  
  *Why use it:* Check SSL/TLS deployment and detect misconfigurations or invalid certificates.
