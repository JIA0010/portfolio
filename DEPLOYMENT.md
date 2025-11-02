# GitHub Pages Deployment Instructions

## Option 1: Using GitHub Pages (Simple)

1. Create a new repository on GitHub named `[your-username].github.io`
2. Push your portfolio files to the repository:

```bash
cd /Users/yoshimurahiro/Desktop/個人開発アプリ/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/[your-username]/[your-username].github.io.git
git push -u origin main
```

3. Your site will be live at: `https://[your-username].github.io/`

## Option 2: Using a Project Repository

1. Create a new repository on GitHub (e.g., `portfolio`)
2. Push your files:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/[your-username]/portfolio.git
git push -u origin main
```

3. Go to repository Settings → Pages
4. Under "Source", select the `main` branch
5. Your site will be live at: `https://[your-username].github.io/portfolio/`

## Before Publishing Checklist

- [ ] Replace all `[Your Name]` placeholders with your actual name
- [ ] Update all `[your-username]` with your GitHub username
- [ ] Replace `your.email@example.com` with your actual email
- [ ] Add SaboLock screenshot to `assets/` folder
- [ ] Update education dates and details
- [ ] Test all links (GitHub, LinkedIn, Email)
- [ ] Test on mobile devices
- [ ] Check all sections for typos

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update: [description of changes]"
git push
```

Changes will be live in a few minutes!
