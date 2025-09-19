# 🐞 EXIF Data Not Stripped from Uploaded Images

## Description

EXIF (Exchangeable Image File Format) metadata contains details about images such as:

- Camera model, settings, GPS location, timestamps, and more.  
- Sensitive information can be exposed if **not removed** during image upload.  

This bug occurs when the **server does not strip EXIF data** from uploaded images.

---

## Steps to Reproduce ⚡

1. **Upload Image with Metadata**  
   - Take an image with EXIF metadata (e.g., a photo with GPS location).  
   - Upload it to the server.  
   - Example: `jimpl.com` upload page.

2. **Download the Image**  
   - Download the same image from the server.

3. **Check Metadata**  
   - Inspect the downloaded image using tools like:
     - ExifTool (`exiftool downloaded_image.jpg`)
     - Online EXIF viewers  
   - If the metadata still exists, the bug is confirmed.

---

## Impact 🚨

- **Privacy Risk** → Users’ location, device info, or personal data can be exposed.  
- **Data Leakage** → Sensitive information can be harvested by attackers.  
- **Regulatory Issues** → May violate privacy or data protection regulations.

---

## Recommendation 🛠️

- Strip EXIF metadata on the **server-side** before storing or sharing images.  
- Use libraries or built-in functions for image processing:
  - **PHP** → `imagejpeg($image, $path, 100);`  
  - **Python (Pillow)** → `image.save(output_path)` without EXIF  
  - **Node.js** → `sharp(input).withMetadata({})`

---

## Summary 📝

Always **sanitize uploaded images** to remove sensitive EXIF metadata.  
Failing to do so can **expose user information** unintentionally.  
This bug highlights the need for **proper server-side processing and privacy checks**.
