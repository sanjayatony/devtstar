---
title: vegapunk
layout: base.njk
---
<div class="index">

- me
	- [email](mailto:tony@sanjaya.info)
	- [github](https://github.com/sanjayatony)
	- [twitter](https://twitter.com/sanjayatony)
- thoughts
{% for post in collections.posts %}
	- {{ post.data.date | asPostDate }} [{{ post.data.title }}]({{ post.url }})
{%- endfor %}

</div>