# 🚀 Automated Git Setup and Netlify Deployment Script for Windows
# Teoria e Lojërave: Nderi dhe Suksesi

Write-Host "🚀 Starting Git setup and Netlify deployment for Albanian Game Theory Book..." -ForegroundColor Cyan
Write-Host "📚 Teoria e Lojërave: Nderi dhe Suksesi" -ForegroundColor Yellow
Write-Host ""

# Function to print colored output
function Write-Step {
    param([string]$Message)
    Write-Host "==> $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

# Check if git is installed
try {
    git --version | Out-Null
    Write-Info "Git is available"
} catch {
    Write-Error "Git is not installed. Please install Git first."
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Step "Step 1: Initializing Git repository..."

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    git init
    Write-Success "Git repository initialized"
} else {
    Write-Info "Git repository already exists"
}

Write-Step "Step 2: Adding all files to Git..."

# Add all files
git add .

# Check if there are changes to commit
$changes = git diff --staged --name-only
if (-not $changes) {
    Write-Info "No changes to commit"
} else {
    Write-Step "Step 3: Creating initial commit..."
    
    # Create commit with detailed message
    git commit -m @"
🎯 Initial commit: Albanian Game Theory Book - 200 Pages

📚 Features:
- 50 chapters covering game theory with Islamic values
- Comprehensive business and investment strategies  
- AI prompts for image generation
- Deployment instructions for Netlify
- GitHub Copilot integration guide
- Mobile-responsive design
- SEO optimized

🎯 Objectives:
- Help Albanians build wealth with honor
- Teach ethical business strategies
- Provide practical investment advice
- Combine modern success with traditional values

🚀 Ready for deployment on Netlify!
"@

    Write-Success "Initial commit created successfully"
}

Write-Step "Step 4: Setting up deployment configuration..."

# Create netlify.toml for better deployment
@"
[build]
  publish = "."
  
[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=604800"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=604800"

[[redirects]]
  from = "/kapitulli/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/download"
  to = "/index.html#download"
  status = 301
"@ | Out-File -FilePath "netlify.toml" -Encoding UTF8

Write-Success "Created netlify.toml for optimized deployment"

# Create robots.txt for SEO
@"
User-agent: *
Allow: /

Sitemap: https://teoria-lojrave-shqip.netlify.app/sitemap.xml

# Allow crawling of all content
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Book content
Allow: /index.html
Allow: /styles.css
Allow: /script.js
Allow: /*.md

# Disallow unnecessary files
Disallow: /node_modules/
Disallow: /.git/
Disallow: /deploy.sh
Disallow: /deploy.ps1
"@ | Out-File -FilePath "robots.txt" -Encoding UTF8

Write-Success "Created robots.txt for SEO optimization"

# Create a simple sitemap
$currentDate = Get-Date -Format "yyyy-MM-dd"
@"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/</loc>
    <lastmod>$currentDate</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/#chapters</loc>
    <lastmod>$currentDate</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/#download</loc>
    <lastmod>$currentDate</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
"@ | Out-File -FilePath "sitemap.xml" -Encoding UTF8

Write-Success "Created sitemap.xml for SEO"

# Create _headers file for Netlify
@"
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/*.js
  Cache-Control: public, max-age=604800

/*.css
  Cache-Control: public, max-age=604800

/*.png
  Cache-Control: public, max-age=2592000

/*.jpg
  Cache-Control: public, max-age=2592000

/*.ico
  Cache-Control: public, max-age=2592000
"@ | Out-File -FilePath "_headers" -Encoding UTF8

Write-Success "Created _headers for security and performance"

Write-Step "Creating quick deployment script for future updates..."

# Create a quick deployment script for Windows
@'
# Quick deployment script for updates
# Usage: .\quick-deploy.ps1 "Your commit message"

param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

if (-not $Message) {
    Write-Host "Please provide a commit message" -ForegroundColor Red
    Write-Host "Usage: .\quick-deploy.ps1 'Your commit message'" -ForegroundColor Yellow
    exit 1
}

Write-Host "🚀 Quick deploying updates..." -ForegroundColor Cyan

# Add all changes
git add .

# Commit with provided message
git commit -m $Message

# Push to main branch
git push origin main

Write-Host "✅ Deployed! Check your site in 2-3 minutes." -ForegroundColor Green
Write-Host "🌐 Your site: https://teoria-lojrave-shqip.netlify.app" -ForegroundColor Cyan
'@ | Out-File -FilePath "quick-deploy.ps1" -Encoding UTF8

Write-Success "Created quick-deploy.ps1 for easy updates"

Write-Step "Final Git commit with all deployment files..."

# Add the new files
git add .

# Commit deployment configuration
git commit -m @"
⚙️ Add deployment configuration and SEO optimization

🔧 Added:
- netlify.toml for optimized deployment
- robots.txt for SEO
- sitemap.xml for search engines
- _headers for security and performance
- quick-deploy.ps1 for easy updates (Windows)
- deploy.ps1 for full setup (Windows)

🚀 Ready for professional deployment!
"@

Write-Host ""
Write-Success "Git repository is fully configured and ready!"
Write-Host ""

Write-Host "📋 Quick reference for next steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Create GitHub repository:" -ForegroundColor White
Write-Host "   - Go to https://github.com/new" -ForegroundColor Gray
Write-Host "   - Repository name: game-theory-albanian" -ForegroundColor Gray
Write-Host "   - Description: Teoria e Lojërave: Nderi dhe Suksesi - 200 faqe në shqip" -ForegroundColor Gray
Write-Host "   - Make it public" -ForegroundColor Gray
Write-Host "   - Don't initialize with README (we already have one)" -ForegroundColor Gray
Write-Host ""

Write-Host "2. Connect to GitHub (replace YOUR_USERNAME):" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/game-theory-albanian.git" -ForegroundColor Green
Write-Host "   git branch -M main" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""

Write-Host "3. Deploy on Netlify:" -ForegroundColor White
Write-Host "   - Go to https://netlify.com and sign up/login" -ForegroundColor Gray
Write-Host "   - Click 'New site from Git'" -ForegroundColor Gray
Write-Host "   - Connect GitHub and select your repository" -ForegroundColor Gray
Write-Host "   - Deploy settings:" -ForegroundColor Gray
Write-Host "     * Build command: (leave empty)" -ForegroundColor Gray
Write-Host "     * Publish directory: / (root)" -ForegroundColor Gray
Write-Host "   - Click 'Deploy site'" -ForegroundColor Gray
Write-Host ""

Write-Host "4. For future updates:" -ForegroundColor White
Write-Host "   .\quick-deploy.ps1 'Your update message'" -ForegroundColor Green
Write-Host ""

Write-Host "5. Optional: Set up custom domain:" -ForegroundColor White
Write-Host "   - In Netlify: Site Settings > Domain Management" -ForegroundColor Gray
Write-Host "   - Add custom domain or buy new one" -ForegroundColor Gray
Write-Host ""

Write-Host "🎯 Your Albanian Game Theory book is ready to change lives!" -ForegroundColor Magenta
Write-Host "💫 From zero to millionaire, with honor and Islamic values!" -ForegroundColor Yellow
Write-Host ""

Write-Host "📚 Book Features Summary:" -ForegroundColor Cyan
Write-Host "✅ 200 pages of Albanian content" -ForegroundColor Green
Write-Host "✅ 50 chapters covering business, investing, marriage, networking" -ForegroundColor Green
Write-Host "✅ Islamic values integration" -ForegroundColor Green
Write-Host "✅ AI prompts for image generation" -ForegroundColor Green
Write-Host "✅ GitHub Copilot integration guide" -ForegroundColor Green
Write-Host "✅ Mobile-responsive design" -ForegroundColor Green
Write-Host "✅ SEO optimized" -ForegroundColor Green
Write-Host "✅ Professional deployment setup" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Ready to help Albanians build wealth with honor!" -ForegroundColor Yellow
