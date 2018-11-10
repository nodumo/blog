---
layout: post
title: Why Funtional Programming
date: 2016-12-03 02:41
author: admin
comments: true
categories: [Blog,Jekyll]
tags: [Blog,Jekyll,jekyll-bootstrap-blog]
---

## Why functional Programming?

Functional Programming? What for?

<!-- more -->

The `jekyll-bootstrap-blog` is a theme for Jekyll to build a personal blog. See <https://github.com/NickanorOdumo/jekyll-bootstrap-blog>


### Page excluded from top bar nav

By default, created pages will show on the top bar nav. If you want page excluded from top bar nav, you just add`excludedFromNav: true` in the page as below. For example, we want hide the `labs` page:

```
---
layout: page
title: Labs
permalink: /labs/
excludedFromNav:true
---
```

![](/images/post/20161203/20161203-excluded-from-nav-03.png)

Now, as you see ,the `labs` page was excluded from top bar nav:

![](/images/post/20161203/20161203-excluded-from-nav-01.png)

But, you can still visit it derictly by page's url:

![](/images/post/20161203/20161203-excluded-from-nav-02.png)



## Demo

You can see the theme running on [my blog](https://NickanorOdumo.com/).
