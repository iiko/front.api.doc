---
title: История изменений
layout: default
---
<table>
{% for p in site.posts %}
<tr>
<td style="white-space: nowrap; text-align: right; padding-right: 10px">{{ p.date | date_to_long_string }}</td>
<td><a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></td>
</tr>
<tr><td />
<td style="padding-bottom: 10px;">
{{ p.excerpt }}
</td>
</tr>
{% endfor %}
</table>