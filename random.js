var posts=["posts/Alist-meihua/","posts/Github-package/","posts/RainLoop-install/","posts/Typecho-install/","posts/Vercel-Freenom/","posts/WinPE-Login/","posts/Windows-meihua/","posts/WindowsPE-build/","posts/about-baidupan/","posts/cloudflare-fenliu/","posts/custom-mail/","posts/dnspod/","posts/github-picgo/","posts/one-diary/","posts/profreehost-free/","posts/random-joke/","posts/recommend/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};