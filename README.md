# Swift Launch — Template Guide
## Template Ka Istemal Kaise Karein

---

## 📁 File Structure (Folder Mein Yeh Files Rakhni Hain)

```
ali/
│
├── global.css              ← ✅ Sab pages link karein (NAVBAR + FOOTER)
│
├── index.html              ← Home page
├── style.css               ← Home page ki CSS
├── home.js
│
├── About.html
├── About.css
├── About.js
│
├── E-commerce/
│   ├── E-commerce.html     ← global.css + E-commerce.css dono link karo
│   └── E-commerce.css      ← SIRF page ki unique CSS (Navbar/Footer CSS delete karo)
│
├── SEO/
│   ├── SEO.html
│   └── SEO.css             ← SIRF page ki unique CSS
│
... (baaki service pages same pattern)
```

---

## ✅ Naya Page Banana — 5 Simple Steps

### Step 1: HTML File
`service-template.html` copy karo → apne folder mein paste karo

### Step 2: Title Change Karo
```html
<title>E-Commerce Management — Swift Launch</title>
```

### Step 3: CSS Links Theek Karo
```html
<!-- global.css ka path sahi karo -->
<link rel="stylesheet" href="../global.css">

<!-- Apni page CSS link karo -->
<link rel="stylesheet" href="E-commerce.css">
```

### Step 4: Active Nav Link
Jis page pe ho uss link mein `class="active"` lagao:
```html
<a href="../services.html" class="active">Services</a>
```

### Step 5: Hero Heading
```html
<p>Services</p>
<h2>E-Commerce Management</h2>
```

---

## 🚫 Yeh Galtiyan Mat Karo

| ❌ Galat | ✅ Sahi |
|----------|---------|
| Har CSS file mein Navbar CSS likhna | Sirf global.css mein likhna |
| Har CSS file mein Footer CSS likhna | Sirf global.css mein likhna |
| Font Awesome ek page pe 4 baar import karna | Ek baar karna |
| Google Fonts ek page pe 2 baar import karna | Ek baar karna |

---

## 🎨 Colors (Jo Sab Jagah Use Karo)

```css
--blue-dark:  #01328E  ← Main color
--blue-light: #08A1DD  ← Accent/hover color
```

---

## ⚡ Website Speed Ke Tips

1. **global.css** ek baar load hogi — sab pages pe same CSS dobara load nahi hogi
2. **Images compress karo** — `/img/` folder mein bari images slow karti hain
3. **Font Awesome sirf ek baar import karo** (tumhari file mein 4 baar tha!)
4. **Google Fonts sirf ek baar** (tumhari file mein 2 baar tha!)

---

## 📌 Existing Pages Fix Karne Ka Tarika

Jab purani CSS file theek karni ho:
1. CSS file open karo
2. `/* ===== NAVBAR =====*/` se le ke responsive tak ka sara code **DELETE** karo
3. Footer CSS bhi **DELETE** karo  
4. HTML file mein `<link rel="stylesheet" href="../global.css">` **upar** add karo
5. Done! ✅
