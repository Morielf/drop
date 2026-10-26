# DropShop

A starter dropshipping storefront (plain HTML/CSS/JS, no build step).

## Run
Open `index.html` in a browser, or serve it:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Structure
- `index.html` – home page with product grid
- `cart.html` – cart page
- `js/products.js` – your product catalogue (edit this)
- `js/app.js` – cart logic (saved in localStorage)
- `css/style.css` – styling
- `images/` – your own product images

## Next steps
1. Pick a brand name and niche; replace "DropShop" and the placeholder text.
2. Find suppliers (AliExpress, CJ Dropshipping, Spocket) and add real products.
3. Add real payments (Stripe Checkout or PayPal) and a backend/order flow.
4. Add shipping, returns, privacy and terms pages.
5. Deploy (Vercel, Netlify, or Cloudflare Pages).

Consider moving to Shopify or Next.js once you need orders, inventory and supplier automation.
