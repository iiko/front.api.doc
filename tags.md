---
title: Облако тэгов
layout: default
---
<ul>

{% capture temptags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtemptags = temptags | split:' ' | sort | reverse %}
{% for tagitems in sortedtemptags %}
  {% capture tagname %}{{ tagitems }}{% endcapture %}
  <li><a href="{{ site.baseurl }}/tag/{{ tagname }}">{{ tagname }}</a> <br></li>
{% endfor %}

</ul>