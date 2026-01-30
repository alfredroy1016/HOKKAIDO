# 🚀 HOKKAIDO - RENDER.COM DEPLOYMENT GUIDE

## ✅ READY TO DEPLOY TO RENDER!

Render is perfect for your Express + React setup. One service, one URL, simple deployment!

---

## 🎯 **DEPLOYMENT ARCHITECTURE**

```
Render Web Service
├── Express Backend (Port 10000)
│   ├── API Routes (/api/*)
│   └── Serves React Frontend (all other routes)
└── React Frontend (built to /frontend/dist)
```

**One service, one URL!** 🎉

---

## 📋 **WHAT'S BEEN CONFIGURED**

### ✅ **Backend Updates:**
- Express now serves static React build
- Handles React routing (SPA support)
- Production-ready configuration

### ✅ **Build Scripts:**
- Root `package.json` with build commands
- Frontend builds first
- Backend builds second
- Ready for Render!

### ✅ **API Configuration:**
- Frontend uses relative `/api/*` paths
- Works on same domain (no CORS issues!)

---

## 🚀 **DEPLOY TO RENDER - STEP BY STEP**

### **Step 1: Go to Render**
Visit: **https://render.com**

### **Step 2: Sign Up / Log In**
- Click "Get Started" or "Sign In"
- Choose "Continue with GitHub"
- Authorize Render to access your repositories

### **Step 3: Create New Web Service**
1. Click "New +" → "Web Service"
2. Connect your GitHub account (if not already)
3. Find and select **"HOKKAIDO"** repository
4. Click "Connect"

### **Step 4: Configure Service**

#### **Basic Settings:**
```
Name: hokkaido
Region: Singapore (closest to Bangalore)
Branch: main
Root Directory: (leave empty)
Runtime: Node
```

#### **Build & Deploy:**
```
Build Command:
npm run build

Start Command:
npm start
```

#### **Environment:**
```
NODE_ENV=production
PORT=10000
```

### **Step 5: Choose Plan**
- **Free Plan** ✅ (Perfect to start!)
  - Free forever
  - Auto-sleep after 15 min inactivity
  - Wakes up on request (takes ~30 seconds)

- **Starter Plan** ($7/month)
  - Always on
  - No sleep
  - Better for production

**Choose Free for now!**

### **Step 6: Deploy!**
Click **"Create Web Service"**

⏳ **Wait 5-10 minutes for first deployment...**

Render will:
1. Clone your repository
2. Install dependencies
3. Build frontend (`npm run build`)
4. Build backend
5. Start server
6. Assign you a URL!

✅ **Your site will be live!**

---

## 🌐 **YOUR LIVE URL**

After deployment:

```
https://hokkaido.onrender.com
```

Or custom:
```
https://hokkaido-[random].onrender.com
```

**All routes work:**
- `https://hokkaido.onrender.com/` → Valentine's Special
- `https://hokkaido.onrender.com/collections/love` → Love Collection
- `https://hokkaido.onrender.com/about` → About Page
- `https://hokkaido.onrender.com/api/products` → API

---

## 🔧 **RENDER DASHBOARD SETTINGS**

### **Environment Variables:**
```
NODE_ENV = production
PORT = 10000
```

### **Build Command:**
```bash
npm run build
```

This runs:
1. `cd frontend && npm install && npm run build`
2. `cd backend && npm install && npm run build`

### **Start Command:**
```bash
npm start
```

This runs:
```bash
cd backend && npm start
```

Which executes:
```bash
node dist/index.js
```

---

## ✅ **VERIFY DEPLOYMENT**

### **Test These URLs:**

1. **Home Page:**
   ```
   https://your-app.onrender.com/
   ```
   ✅ Should show Valentine's Special

2. **Collections:**
   ```
   https://your-app.onrender.com/collections/love
   ```
   ✅ Should show Love & Proposal products

3. **About:**
   ```
   https://your-app.onrender.com/about
   ```
   ✅ Should show brand story

4. **API:**
   ```
   https://your-app.onrender.com/api/products
   ```
   ✅ Should return JSON with 9 products

5. **WhatsApp Buttons:**
   ✅ Click any "Order Now" button
   ✅ Should open WhatsApp with pre-filled message

---

## 🐛 **TROUBLESHOOTING**

### **Issue: Build Failed**

**Check Build Logs:**
1. Go to Render Dashboard
2. Click your service
3. Click "Logs" tab
4. Look for errors

**Common Fixes:**
```bash
# Test build locally first
npm run build

# If it works locally, push again
git add .
git commit -m "Fix build"
git push origin main
```

### **Issue: App Crashes on Start**

**Check:**
1. Logs tab in Render Dashboard
2. Look for `Server is running on port 10000`
3. Check for TypeScript errors

**Fix:**
```bash
# Test locally
cd backend
npm run build
npm start
```

### **Issue: Images Not Loading**

**Check:**
1. Images are in `frontend/public/images/`
2. Paths use `/images/` (not `./images/`)
3. Images are committed to Git

### **Issue: API Returns 404**

**Check:**
1. API routes are `/api/products` and `/api/products/:slug`
2. Backend is running
3. Check Logs for errors

### **Issue: Free Plan Sleeping**

**Expected Behavior:**
- Free plans sleep after 15 min inactivity
- First request takes ~30 seconds to wake up
- Subsequent requests are fast

**Solution:**
- Upgrade to Starter plan ($7/month) for always-on
- Or accept the sleep behavior (fine for testing!)

---

## 🎨 **CUSTOM DOMAIN** (Optional)

### **Add Your Own Domain:**

1. Go to Render Dashboard → Your Service
2. Click "Settings" → "Custom Domains"
3. Click "Add Custom Domain"
4. Enter your domain (e.g., `hokkaido.com`)
5. Add DNS records (Render provides instructions)
6. Wait for DNS propagation (5-60 minutes)

**Recommended Domains:**
- `hokkaido.in`
- `hokkaidobouquets.com`
- `hokkaido.co.in`

---

## 📊 **MONITORING**

### **Render Dashboard Shows:**
- ✅ Deployment status
- ✅ Build logs
- ✅ Runtime logs
- ✅ CPU/Memory usage
- ✅ Request metrics

### **Check Logs:**
```
Dashboard → Your Service → Logs
```

You'll see:
```
Server is running on port 10000
```

---

## 🔄 **AUTOMATIC DEPLOYMENTS**

**Good news!** Every time you push to GitHub:
```bash
git push origin main
```

Render will **automatically**:
1. Detect the push
2. Build your app
3. Deploy to production
4. Update your live URL

**No manual deployment needed!** 🎉

---

## 💰 **PRICING**

### **Free Plan:**
- ✅ 750 hours/month (enough for one service)
- ✅ Auto-sleep after 15 min inactivity
- ✅ 512 MB RAM
- ✅ Shared CPU
- ✅ Perfect for testing!

### **Starter Plan ($7/month):**
- ✅ Always on (no sleep!)
- ✅ 512 MB RAM
- ✅ Shared CPU
- ✅ Better for production

### **Standard Plan ($25/month):**
- ✅ 2 GB RAM
- ✅ Dedicated CPU
- ✅ For high traffic

**Start with FREE, upgrade when needed!** 💚

---

## 📱 **SHARE YOUR SITE**

Once deployed, share:

### **Instagram Bio:**
```
💝 Valentine's Special - 25% OFF
🌹 Premium Luxury Bouquets
🔗 hokkaido.onrender.com
📱 +91 9995071211
```

### **WhatsApp Status:**
```
🌸 HOKKAIDO is LIVE!

💝 Valentine's Packages - 25% OFF
🎁 From ₹4,499

Visit: hokkaido.onrender.com
Order: +91 9995071211
```

---

## 🎯 **POST-DEPLOYMENT CHECKLIST**

- [ ] Site loads correctly
- [ ] Valentine's packages visible
- [ ] All images loading
- [ ] WhatsApp buttons work
- [ ] Collections pages work
- [ ] Custom bouquet form works
- [ ] About page loads
- [ ] Mobile responsive
- [ ] API endpoints return data
- [ ] React routing works (refresh on any page)

---

## 🔧 **ADVANCED: ENVIRONMENT VARIABLES**

If you need to add env vars later:

**Render Dashboard:**
1. Go to your service
2. Click "Environment"
3. Add variables:
   ```
   DATABASE_URL=your-database-url
   WHATSAPP_API_KEY=your-key
   ```

---

## 📈 **SCALING**

### **When to Upgrade:**

**Free → Starter ($7/month):**
- Getting consistent traffic
- Don't want sleep delays
- Professional use

**Starter → Standard ($25/month):**
- High traffic (1000+ visitors/day)
- Need more RAM
- Performance issues

---

## 🎉 **YOU'RE READY!**

**Everything is configured!**

**Next Steps:**
1. ✅ Go to https://render.com
2. ✅ Sign in with GitHub
3. ✅ Create new Web Service
4. ✅ Connect HOKKAIDO repository
5. ✅ Use these settings:
   - Build: `npm run build`
   - Start: `npm start`
   - Environment: `NODE_ENV=production`
6. ✅ Click Deploy!

---

## 🌐 **DEPLOYMENT COMMANDS SUMMARY**

```bash
# Already done ✅
git add .
git commit -m "Configure for Render deployment"
git push origin main

# Now:
# → Go to https://render.com
# → Create Web Service
# → Connect HOKKAIDO repo
# → Deploy!
```

---

## 📞 **SUPPORT**

**Render Docs:**
- https://render.com/docs
- https://render.com/docs/deploy-node-express-app

**HOKKAIDO Support:**
- Check `README.md` for project details
- Check logs in Render Dashboard
- Test locally first: `npm run build && npm start`

---

**READY TO GO LIVE ON RENDER!** 🚀💝🌹

Visit **https://render.com** and create your Web Service!

---

## 🎊 **WHAT YOU'LL GET**

After deployment:
- ✅ Live website on Render
- ✅ One URL for everything
- ✅ API + Frontend together
- ✅ Auto-deploy on Git push
- ✅ Free hosting (with sleep)
- ✅ HTTPS enabled
- ✅ Global CDN

**LET'S DEPLOY!** 🚀
