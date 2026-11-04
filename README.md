# Garima Raj — Personal Portfolio & Interactive Story

Welcome to my personal portfolio codebase! This is a complete, interactive, high-performance portfolio featuring:
- **Interactive Story Reel:** 8 cinematic chapters with real memories, photos, and video milestones.
- **Project Showcase:** Detailed case studies for StockSikh, Predicto, Popular Tweets Dashboard, RetailSphere, Her Voice, and more.
- **Mew Mascot:** Flying companion navigating across the portfolio.
- **Resume Integration:** Direct link to latest resume on Google Drive.

---

## How to Run Locally

### Option 1: Double-Click (Easiest on Windows)
Simply double-click `start_server.bat` in this folder. It will start the server and open `http://localhost:3000` in your browser.

### Option 2: Python Command
```bash
python server.py
```
Then open `http://localhost:3000`.

### Option 3: Node / npm
```bash
npx serve .
```

---

## How to Push to GitHub

1. **Open Terminal / Command Prompt** in this folder:
   ```bash
   cd "C:\Users\Garima\Desktop\garima-portfolio"
   ```

2. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Garima Raj portfolio"
   ```

3. **Link to your GitHub Repository**:
   Create a new repository on your GitHub (e.g. `garima-portfolio` or `portfolio`), then run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Garimaraj15/<your-repo-name>.git
   git push -u origin main
   ```

---

## How to Deploy

### Deploy to Vercel (Recommended — Free & 1-Minute Setup):
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New Project"** -> select your `garima-portfolio` repository.
3. Keep default settings (Framework: *Other* — static files will be automatically detected).
4. Click **Deploy**!
5. Your site will be live instantly with free SSL (e.g. `garima-raj.vercel.app`).
   *(SPA routing configuration is already included in `vercel.json`!)*

### Deploy to Netlify:
1. Go to [netlify.com](https://netlify.com) and log in.
2. Either drag-and-drop this entire `garima-portfolio` folder into the Netlify Drop zone, OR link your GitHub repository.
3. Click **Deploy**!
   *(SPA routing is already handled by `_redirects` and `netlify.toml`!)*

---

(c) 2026 Garima Raj. Built with heart and grit.
