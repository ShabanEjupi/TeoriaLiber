#!/bin/bash

# 🚀 Automated Git Setup and Netlify Deployment Script
# Teoria e Lojërave: Nderi dhe Suksesi

echo "🚀 Starting Git setup and Netlify deployment for Albanian Game Theory Book..."
echo "📚 Teoria e Lojërave: Nderi dhe Suksesi"
echo ""

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}==>${NC} ${YELLOW}$1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

print_step "Step 1: Initializing Git repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    git init
    print_success "Git repository initialized"
else
    print_info "Git repository already exists"
fi

print_step "Step 2: Adding all files to Git..."

# Add all files
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    print_info "No changes to commit"
else
    print_step "Step 3: Creating initial commit..."
    
    # Create commit with detailed message
    git commit -m "🎯 Initial commit: Albanian Game Theory Book - 200 Pages

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

🚀 Ready for deployment on Netlify!"

    print_success "Initial commit created successfully"
fi

print_step "Step 4: Setting up GitHub repository..."

echo ""
echo "📝 Next steps to complete deployment:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: game-theory-albanian"
echo "   - Description: Teoria e Lojërave: Nderi dhe Suksesi - 200 faqe në shqip"
echo "   - Make it public"
echo "   - Don't initialize with README (we already have one)"
echo ""

echo "2. After creating the repository, run these commands:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/game-theory-albanian.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""

echo "3. Deploy on Netlify:"
echo "   - Go to https://netlify.com"
echo "   - Click 'New site from Git'"
echo "   - Connect GitHub and select your repository"
echo "   - Deploy settings:"
echo "     * Build command: (leave empty)"
echo "     * Publish directory: / (root)"
echo "   - Click 'Deploy site'"
echo ""

echo "4. Optional: Set up custom domain:"
echo "   - In Netlify: Site Settings > Domain Management"
echo "   - Add custom domain: teoria-lojrave-shqip.netlify.app"
echo "   - Or buy custom domain: teoriale-lojrave.com"
echo ""

print_step "Creating deployment helper files..."

# Create netlify.toml for better deployment
cat > netlify.toml << EOF
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
EOF

print_success "Created netlify.toml for optimized deployment"

# Create robots.txt for SEO
cat > robots.txt << EOF
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
EOF

print_success "Created robots.txt for SEO optimization"

# Create a simple sitemap
cat > sitemap.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/#chapters</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://teoria-lojrave-shqip.netlify.app/#download</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
EOF

print_success "Created sitemap.xml for SEO"

# Create _headers file for Netlify
cat > _headers << EOF
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
EOF

print_success "Created _headers for security and performance"

print_step "Creating quick deployment script for future updates..."

# Create a quick deployment script
cat > quick-deploy.sh << 'EOF'
#!/bin/bash

# Quick deployment script for updates
# Usage: ./quick-deploy.sh "Your commit message"

if [ -z "$1" ]; then
    echo "Please provide a commit message"
    echo "Usage: ./quick-deploy.sh 'Your commit message'"
    exit 1
fi

echo "🚀 Quick deploying updates..."

# Add all changes
git add .

# Commit with provided message
git commit -m "$1"

# Push to main branch
git push origin main

echo "✅ Deployed! Check your site in 2-3 minutes."
echo "🌐 Your site: https://teoria-lojrave-shqip.netlify.app"
EOF

chmod +x quick-deploy.sh
print_success "Created quick-deploy.sh for easy updates"

print_step "Final Git commit with all deployment files..."

# Add the new files
git add .

# Commit deployment configuration
git commit -m "⚙️ Add deployment configuration and SEO optimization

🔧 Added:
- netlify.toml for optimized deployment
- robots.txt for SEO
- sitemap.xml for search engines
- _headers for security and performance
- quick-deploy.sh for easy updates

🚀 Ready for professional deployment!"

echo ""
print_success "Git repository is fully configured and ready!"
echo ""
echo "📋 Quick reference for next steps:"
echo ""
echo "1. Create GitHub repo: https://github.com/new"
echo "2. git remote add origin YOUR_REPO_URL"
echo "3. git push -u origin main"
echo "4. Deploy on Netlify: https://netlify.com"
echo "5. Use ./quick-deploy.sh 'message' for future updates"
echo ""
echo "🎯 Your Albanian Game Theory book is ready to change lives!"
echo "💫 From zero to millionaire, with honor and Islamic values!"
echo ""
EOF
