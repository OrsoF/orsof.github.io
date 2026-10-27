---
layout: page
permalink: /projects/
title: Software
description: Python research libraries, constrained optimization benchmarks, and network orchestration prototypes.
nav: true
nav_order: 3
---

I build software for studying and solving sequential decision problems: reusable numerical tools, comparable experiments, and interfaces that check constraints before exporting a decision. The projects below link directly to public code, documentation, and related research.

<nav class="portfolio-actions" aria-label="Software sections">
  <a href="#featured-software">Featured software</a>
  <a href="#research-code">Research code &amp; environments</a>
  <a href="https://github.com/OrsoF">All public repositories</a>
</nav>

<section class="portfolio-section" aria-labelledby="featured-software">
  <h2 id="featured-software">Featured software</h2>
  {% assign featured_projects = site.data.software | where: 'featured', true %}
  {% for project in featured_projects %}
    {% include software-card.liquid project=project %}
  {% endfor %}
</section>

<section class="portfolio-section" aria-labelledby="research-code">
  <h2 id="research-code">Research code &amp; environments</h2>
  {% assign research_projects = site.data.software | where: 'featured', false %}
  {% for project in research_projects %}
    {% include software-card.liquid project=project %}
  {% endfor %}
</section>
