---
title: 'Блог веб студии'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Более новые сообщения'
paginationNextText: 'Старые сообщения'
paginationAnchor: '#post-list'
---

Последние статьи со всей студии, демонстрирующие наш дизайн мышления, стратегии и опыта.