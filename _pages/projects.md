---
layout: page
permalink: /projects/
title: Software
description: Research software and selected code artifacts.
nav: true
nav_order: 3
---

This page collects research software, experimental code, and applied modelling projects.

{% assign projects = site.projects | sort: "importance" %}

<div class="projects">
  <div class="row row-cols-1">
    {% for project in projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
</div>
