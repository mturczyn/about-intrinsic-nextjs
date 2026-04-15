# 🧪 Current setup (no www)

- Domain: michalturczyn.pl
- DNS in nazwa.pl:
- A record → michalturczyn.pl → 76.76.21.21
- Connected to Vercel project
- Only root domain works
- www.michalturczyn.pl → not configured (will fail)

In addition, HTTPS enablement lies on Vercel side, it issues SSL certificates, enabling HTTPS traffic.

## SEO and google index

Page seems to be correctly indexed in Google. To be tracked.

## Implementation steps

1. Buy or otherwise get the domain from some domain provider.
2. Go to the hosting, explore how to define custom domain. Usually provider has it's own domain and project runs on some subdomain (_.vercel.com, _.azurewebsites.com).
   We need to add our custom domain (usually with A and CNAME records).
3. Add new domain in Google Search Console
4. (For this project) Add new domain in reCAPTCHA at Google, for the reCAPTCHA protected pages to work correctly.

# Adding domain with www redirect (option in Vercel)

Consider adding www support + redirect:

- despite different suggestion regarding CNAME DNS record from Vercel, it was enough to add record
  type: CNAME
  name: www
  vale: cname.vercel-dns.com
- In Vercel:
  Add www.michalturczyn.pl
  Set one as primary domain
  Enable redirect (www → root or root → www)

## SEO

So far, requested reindexing of michalturczyn.pl and www.michalturczyn.pl.

In google search console now there are errors regarding those addresses:

- https://www.michalturczyn.pl/ - there's error from google "redirect error"
- https://michalturczyn.pl/ - no problem, but Google has marked original Vercel domain as canonical one

However, currently (2 weeks after www redirection changes), "https://michalturczyn.pl/" appears in google search results correctly (however, the day before it was not appearing).

In order to investigate issues with redirects, `curl` command line utility can be used with flags `-I` and `-L`:

- `-L`, `--location` - Follow redirects
- `-I`, `--head` - Show document info only

That revealed many redirects:

- from non `www` to `www`
- from base URL `https://.../` to `https://.../pl/` (adding language to path)
- from `https://.../pl/` to `https://.../pl` (removing trailing slash)

So despite of URL including `www` or not, there were many redirects anyway.

After that, instead of fighting redirects, decision was to simply index "final desitnations" directly in google. So following URLs were requested to be indexed:

- `https://.../pl`
- `https://.../en`
