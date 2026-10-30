# Nikhil S Poojary — Portfolio Website

A cyber-minimalist, high-performance portfolio website built with semantic HTML5, CSS3, and modern vanilla JavaScript.

## Features Included
- **Particle HUD Canvas Background:** Interactive particle mesh network.
- **Embedded CLI HUD Console:** Command terminal drawer supporting `help`, `projects`, `skills`, `contact`, `github`, `linkedin`, and `resume`.
- **ATS-Grade Resume Modal:** In-browser A4 printable resume sheet with one-click PDF printing (`window.print`) and machine-readable JSON ATS export.
- **Verified Flagship Projects:** Complete coverage of **Agro-Fertility** (3-persona system, 3NF schema, Section 31 CGST invoicing) and **Food Court**.
- **Social & Contact Fixes:**
  - GitHub: [nikhilspoojary2-sudo](https://github.com/nikhilspoojary2-sudo) (opens in new tab)
  - LinkedIn: [Nikhil S Poojary Profile](https://www.linkedin.com/in/nikhil-s-poojary-16463431a?utm_source=share_via&utm_content=profile&utm_medium=member_android) (opens in new tab)
  - Direct `mailto:nikhilspoojary2@gmail.com` link configured across hero, contact cards, footer, and CLI.

---

## How to Deploy to GitHub Pages Today (Under 3 Minutes)

### Method 1: Upload via GitHub Web Interface (Easiest)
1. Go to [GitHub](https://github.com) and create a new repository (e.g., `nikhil-portfolio` or `nikhilspoojary2-sudo.github.io`). Make sure it is set to **Public**.
2. Unzip this package.
3. On the repository page on GitHub, click **Add file** -> **Upload files**.
4. Drag and drop all the files from inside `my-portfolio/` (`index.html`, `style.css`, `script.js`, `README.md`) directly into the repository root.
5. Click **Commit changes**.
6. Go to repository **Settings** -> **Pages** (under the "Code and automation" menu on the left).
7. Under **Build and deployment** > **Branch**:
   - Select `main` branch.
   - Folder: `/ (root)`.
   - Click **Save**.
8. Wait ~60 seconds. Your live URL will appear at the top: `https://nikhilspoojary2-sudo.github.io/nikhil-portfolio/`!

### Method 2: Git Command Line
```bash
cd my-portfolio
git init
git add .
git commit -m "Initial portfolio release with working socials, mailto, and Agro-Fertility"
git branch -M main
git remote add origin https://github.com/nikhilspoojary2-sudo/<YOUR-REPO-NAME>.git
git push -u origin main
```
Then enable GitHub Pages under repository **Settings** -> **Pages**.
