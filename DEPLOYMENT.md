# GitHub Pages Deployment Instructions

## Option 1: Using GitHub Pages (Simple)

1. Create a new repository on GitHub named `JIA0010.github.io`
2. Push your portfolio files to the repository:

```bash
cd /Users/yoshimurahiro/Desktop/個人開発アプリ/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/JIA0010/JIA0010.github.io.git
git push -u origin main
```

3. Your site will be live at: `https://JIA0010.github.io/`

## Option 2: Using a Project Repository

1. Create a new repository on GitHub (e.g., `portfolio`)
2. Push your files:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/JIA0010/portfolio.git
git push -u origin main
```

3. Go to repository Settings → Pages
4. Under "Source", select the `main` branch
5. Your site will be live at: `https://JIA0010.github.io/portfolio/`

## Before Publishing Checklist

- [ ] Add SaboLock screenshot to `assets/` folder
- [ ] Update education dates and details
- [ ] Test all links (GitHub, LinkedIn)
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
