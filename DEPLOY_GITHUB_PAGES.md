# Deploy to GitHub Pages with shaobo-xu.com

This repo is ready for GitHub Pages deployment.

Site app:

```text
portfolio-site
```

Build command:

```text
npm run build
```

Build output:

```text
portfolio-site/dist
```

Custom domain:

```text
shaobo-xu.com
```

The custom domain file is already included at:

```text
portfolio-site/public/CNAME
```

## 1. Push this repo to GitHub

Create a new GitHub repository, then run these commands from:

```text
C:\Users\xusha\Documents\新版个人站
```

```bash
git add .
git commit -m "Deploy portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_NAME/YOUR_REPO.git
git push -u origin main
```

## 2. Enable GitHub Pages

In the GitHub repository:

```text
Settings -> Pages -> Build and deployment
```

Set:

```text
Source: GitHub Actions
```

The workflow file is already configured at:

```text
.github/workflows/deploy-pages.yml
```

After pushing to `main`, check:

```text
Actions -> Deploy portfolio to GitHub Pages
```

## 3. Set the custom domain in GitHub

In the GitHub repository:

```text
Settings -> Pages -> Custom domain
```

Enter:

```text
shaobo-xu.com
```

Save it.

## 4. Configure NameSilo DNS

In NameSilo DNS Manager for `shaobo-xu.com`, the root domain should point to GitHub Pages:

```text
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

For `www.shaobo-xu.com`, add this after you know your GitHub username:

```text
Type: CNAME
Host: www
Value: YOUR_GITHUB_NAME.github.io
```

## 5. HTTPS

After DNS resolves, return to:

```text
Settings -> Pages
```

Enable:

```text
Enforce HTTPS
```

