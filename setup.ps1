# Simple Git Setup for Albanian Game Theory Book
# Teoria e Lojërave: Nderi dhe Suksesi

Write-Host "🚀 Setting up Git for Albanian Game Theory Book..." -ForegroundColor Cyan
Write-Host ""

# Initialize git if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
}

# Create netlify.toml
Write-Host "Creating deployment files..." -ForegroundColor Yellow
Set-Content -Path "netlify.toml" -Value @"
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"

[[redirects]]
  from = "/kapitulli/*"
  to = "/index.html"
  status = 200
"@

# Create robots.txt
Set-Content -Path "robots.txt" -Value @"
User-agent: *
Allow: /

Sitemap: https://teoria-lojrave-shqip.netlify.app/sitemap.xml

# Book content
Allow: /index.html
Allow: /styles.css
Allow: /script.js
"@

# Create sitemap.xml
$date = Get-Date -Format "yyyy-MM-dd"
Set-Content -Path "sitemap.xml" -Value @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/</loc>
    <lastmod>$date</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
"@

Write-Host "✅ Deployment files created" -ForegroundColor Green

# Add and commit files
Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .

Write-Host "Creating commit..." -ForegroundColor Yellow
git commit -m "Albanian Game Theory Book - Complete Setup. Features: 200-page book in Albanian, Game theory with Islamic values, Business and investment strategies, Mobile-responsive design, SEO optimized. Ready for Netlify deployment!"

Write-Host "✅ All files committed to Git" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create GitHub repository:" -ForegroundColor White
Write-Host "   https://github.com/new" -ForegroundColor Blue
Write-Host ""
Write-Host "2. Connect and push:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/game-theory-albanian.git" -ForegroundColor Green
Write-Host "   git branch -M main" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "3. Deploy on Netlify:" -ForegroundColor White
Write-Host "   https://netlify.com" -ForegroundColor Blue
Write-Host "   - New site from Git" -ForegroundColor Gray
Write-Host "   - Select your GitHub repo" -ForegroundColor Gray
Write-Host "   - Deploy!" -ForegroundColor Gray
Write-Host ""
Write-Host "🎯 Your book will help Albanians build wealth with honor!" -ForegroundColor Yellow
