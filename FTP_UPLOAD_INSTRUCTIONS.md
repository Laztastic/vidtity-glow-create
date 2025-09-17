# FTP Upload Instructions for Hostinger

## Files Ready for Upload
Your production-ready website files are now in the `build/` folder:

```
build/
├── index.html          (Main HTML file)
├── .htaccess          (URL routing configuration)
└── assets/
    ├── index.css      (All styles compiled)
    ├── index.js       (All JavaScript functionality)
    └── hero-bg.jpg    (Hero background image)
```

## Step-by-Step FTP Upload to Hostinger

### 1. Get Your FTP Credentials
- Log into your Hostinger control panel (hPanel)
- Go to **Files** > **File Manager** or **FTP Accounts**
- Create/get your FTP credentials:
  - **FTP Host**: Usually `ftp.yourdomain.com` or provided by Hostinger
  - **Username**: Your FTP username
  - **Password**: Your FTP password
  - **Port**: 21 (standard) or 22 (SFTP)

### 2. Choose an FTP Client
**Recommended FTP clients:**
- **FileZilla** (Free, cross-platform)
- **WinSCP** (Windows)
- **Cyberduck** (Mac/Windows)
- **Built-in File Manager** (in Hostinger hPanel)

### 3. Upload Files

#### Option A: Using FileZilla
1. Download and install FileZilla
2. Connect using your FTP credentials
3. Navigate to your domain's **public_html** folder
4. Upload ALL files from the `build/` folder to `public_html/`
   - `index.html` → goes to `public_html/index.html`
   - `.htaccess` → goes to `public_html/.htaccess`
   - `assets/` folder → goes to `public_html/assets/`

#### Option B: Using Hostinger File Manager
1. Log into Hostinger hPanel
2. Go to **Files** > **File Manager**
3. Open **public_html** folder
4. Upload all files from `build/` folder
5. Extract if uploaded as ZIP

### 4. File Structure on Server
After upload, your server should have:
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index.css
    ├── index.js
    └── hero-bg.jpg
```

### 5. Test Your Website
- Visit `https://yourdomain.com`
- Check that all sections load properly
- Test navigation links
- Verify mobile responsiveness

## Important Notes

### ✅ What's Included
- Complete static website with all functionality
- SEO optimized HTML
- Responsive design for all devices
- Working contact form (client-side validation)
- Smooth scrolling navigation
- All original styling and animations

### ⚠️ Limitations
- Contact form shows alert (no server-side processing)
- No backend functionality
- Static content only

### 🔧 Customization
To modify content:
1. Edit the `build/assets/index.js` file
2. Change text, colors, or layout in the HTML template
3. Re-upload the modified file

### 📧 Contact Form Setup
To make the contact form functional:
1. Use Hostinger's **contact form** feature
2. Or integrate with services like Formspree, Netlify Forms
3. Or add server-side PHP processing

## Troubleshooting

### Website Not Loading
- Check file permissions (should be 755 for folders, 644 for files)
- Ensure `.htaccess` file is uploaded
- Clear browser cache

### Broken Images/Styles
- Verify `assets/` folder uploaded completely
- Check file paths are correct
- Ensure all files maintain their structure

### 404 Errors on Navigation
- Confirm `.htaccess` file is in `public_html/`
- Check Apache mod_rewrite is enabled (usually default on Hostinger)

---

**Your website is now ready for professional hosting! 🚀**