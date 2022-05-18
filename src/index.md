---
title: devtstar
layout: base.njk
---
### me
- [email](mailto:tony@sanjaya.info)
- [github](https://github.com/sanjayatony)
- [twitter](https://twitter.com/sanjayatony)

### logs
{% for post in collections.posts reversed %} - {{ post.data.date | asPostDate }} [{{ post.data.title }}]({{ post.url }}) 
{% endfor %}
