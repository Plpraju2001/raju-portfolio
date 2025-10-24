# Raju's Portfolio

My personal portfolio website built with Next.js, featuring projects, blog posts, and professional information.

🌐 **Live Site**: [lakshmipathirajup.com](https://lakshmipathirajup.com)

## Quick Update Workflow

To update your portfolio with new content:

### Option 1: PowerShell (Recommended)
```powershell
.\update-portfolio.ps1
```

### Option 2: Batch File
```cmd
update-portfolio.bat
```

### Option 3: Manual Git Commands
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## What Happens When You Update

1. ✅ Changes are added to git
2. ✅ Changes are committed with your message
3. ✅ Changes are pushed to GitHub
4. ✅ GitHub Actions automatically builds and deploys
5. ✅ Your site updates at lakshmipathirajup.com in ~2-3 minutes

## Adding New Content

### New Blog Post
1. Create new file in `src/app/blog/`
2. Run update script
3. Site updates automatically

### New Project
1. Add project details to `src/app/projects/`
2. Run update script
3. Site updates automatically

### Portfolio Updates
1. Edit `src/app/page.tsx` or other components
2. Run update script
3. Site updates automatically

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site locally.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- GitHub Pages
- Custom Domain: lakshmipathirajup.com