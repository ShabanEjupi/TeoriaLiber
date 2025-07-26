# Udhëzime për Deployment - Teoria e Lojërave

## 1. Përgatitja e Git Repository

### Hapat e Parë (Bëhen vetëm një herë)
```bash
# Inicializo git repository
git init

# Shto të gjitha skedarët
git add .

# Bëj commit-in e parë
git commit -m "Initial commit: Albanian Game Theory Book - 200 pages"

# Lidh me GitHub repository (zëvendëso me URL-në tënde)
git remote add origin https://github.com/yourusername/game-theory-albanian.git

# Push në GitHub
git push -u origin main
```

## 2. Deployment në Netlify

### Metoda 1: Përmes GitHub (E Rekomanduar)
1. Shko në [netlify.com](https://netlify.com)
2. Kliko "New site from Git"
3. Zgjidh GitHub dhe autentifikohu
4. Zgjidh repository-n "game-theory-albanian"
5. Konfiguro settings:
   - **Build command:** (lë bosh)
   - **Publish directory:** `/` (root folder)
   - **Branch:** `main`
6. Kliko "Deploy site"

### Metoda 2: Drag & Drop
1. Shko në netlify.com
2. Drag & drop dosjen e projektit në Netlify
3. Siti do të publikohet automatikisht

## 3. Workflow për Ndryshime të Reja

### Çdo herë që bën ndryshime:
```bash
# Kontrollo statusin
git status

# Shto ndryshimet
git add .

# Bëj commit me mesazh përshkrues
git commit -m "Update: Shtuar kapitull i ri për strategjitë e investimit"

# Push në GitHub
git push origin main
```

### Netlify do të deploy-ojë automatikisht!
- Pas çdo push në GitHub, Netlify do të rebuild-ojë sitin automatikisht
- Zakonisht merr 1-2 minuta
- Do të marrësh email konfirmimi

## 4. Domain i Personalizuar (Opsional)

### Për domain falas nga Netlify:
1. Shko në Site Settings
2. Kliko "Change site name"
3. Zgjidh emër si: `teoria-lojrave-shqip`
4. URL-ja do të jetë: `teoria-lojrave-shqip.netlify.app`

### Për domain të blërë:
1. Shko në Site Settings > Domain management
2. Kliko "Add custom domain"
3. Shtypë domain-in tënd (p.sh. teoriale-lojrave.com)
4. Ndiq udhëzimet për DNS configuration

## 5. Optimizimi i Performance

### Kompresimi i Images:
- Përdor [TinyPNG](https://tinypng.com) për të kompresuar imazhet
- Mbaj images nën 500KB

### SEO Optimization:
- Sigurohu që çdo faqe ka `<title>` unik
- Shto `meta description` në çdo faqe
- Përdor heading tags (H1, H2, H3) në mënyrë hierarkike

## 6. Backup dhe Siguria

### Backup automatik:
- GitHub i ruan të gjitha versionet e projektit
- Netlify i ruan deployment history
- Rekomandohet të kesh edë backup lokal

### Siguria:
```bash
# Krijo .gitignore file
echo "node_modules/
.env
*.log
.DS_Store" > .gitignore
```

## 7. Monitorimi i Performancës

### Analytics:
1. Shto Google Analytics në `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Netlify Analytics:
- Aktivizo Netlify Analytics nga dashboard-i
- Shikon traffic, page views, dhe user behavior

## 8. Troubleshooting

### Probleme të Zakonshme:

**Siti nuk updatet:**
```bash
# Kontrollo nëse ndryshimet janë commit-uar
git status
git log --oneline -5

# Force push nëse është e nevojshme
git push origin main --force
```

**Build failure:**
- Kontrollo Console në Netlify dashboard
- Sigurohu që të gjitha skedarët janë valid HTML/CSS/JS

**SSL Certificate:**
- Netlify jep SSL falas automatikisht
- Nëse ka probleme, shko në Site Settings > SSL/TLS

## 9. Shpejtësi e Zhvillimit

### Template për commit messages:
```
feat: shtuar kapitull i ri
fix: rregulluar problem me navigation
docs: përditësuar README
style: përmirësuar CSS për mobile
```

### Shortcut për deployment të shpejtë:
```bash
# Krijo script deploy.sh
echo '#!/bin/bash
git add .
echo "Commit message:"
read message
git commit -m "$message"
git push origin main
echo "Deployed to Netlify! Check your site in 2 minutes."' > deploy.sh

# Bëje executable
chmod +x deploy.sh

# Përdorje me:
./deploy.sh
```

## 10. Backup Strategy

### Rutinë e Përditshme:
1. **Commit daily changes:**
   ```bash
   git add . && git commit -m "Daily update: $(date)"
   ```

2. **Weekly backup to external drive:**
   - Copy i plotë i folder-it
   - Export i database-it (nëse përdor)

3. **Monthly review:**
   - Kontrollo analytics
   - Optimizo content
   - Update dependencies

---

**🎯 Quick Checklist për çdo deployment:**
- [ ] Test locally në browser
- [ ] Kontrollo mobile responsiveness  
- [ ] Shiko përmes spell-check
- [ ] Optimizo images
- [ ] Commit me mesazh përshkrues
- [ ] Push në GitHub
- [ ] Verify deployment në Netlify (2-3 min)
- [ ] Test live site
- [ ] Share në social media (nëse applicable)

**📱 Contact për probleme:**
- GitHub Issues: Krijoni issue në repository
- Netlify Support: support@netlify.com
- Community: Netlify Community Forum
