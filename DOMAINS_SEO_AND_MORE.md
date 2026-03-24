# 🧪 Current setup (no www)

- Domain: michalturczyn.pl
- DNS in nazwa.pl:
- A record → michalturczyn.pl → 76.76.21.21
- Connected to Vercel project
- Only root domain works
- www.michalturczyn.pl → not configured (will fail)

In addition, HTTPS enablement lies on Vercel side, it issues SSQL certificates, enabling HTTPS traffic.

### SEO

Page seems to be correctly indexed in Google. To be tracked.

## Steps to achieve

1. Buy or otherwise get the domain from some domain provider.
2. Go to the hosting, explore how to define custom domain. Usually provider has it's own domain and project runs on some subdomain (_.vercel.com, _.azurewebsites.com).
   We need to add our custom domain (usually with A and CNAME records).
3. Add new domain in Google Search Console
4. (For this project) Add new domain in reCAPTCHA at Google, for the reCAPTCHA protected pages to work correctly.

# 🔜 Next step (when you return)

Consider adding www support + redirect:

- In DNS (nazwa.pl):
  CNAME: www → cname.vercel-dns.com
- In Vercel:
  Add www.michalturczyn.pl
  Set one as primary domain
  Enable redirect (www → root or root → www)

## 💡 Goal of next step

Both versions work:
michalturczyn.pl
www.michalturczyn.pl

Then we must set one as canonical (better SEO, no duplicates)
