---
layout: about
title: Home
permalink: /
subtitle: Reinforcement learning, scalable optimization, and research software
description: Orso Forghieri — reinforcement learning, adaptive state abstraction, efficient LLM adaptation, and reusable Python research software.

profile:
  align: right
  image: portrait.jpg
  image_alt: Portrait of Orso Forghieri
  image_circular: false
  more_info: >
    <p>Research collaboration</p>
    <p>École polytechnique</p>
    <p>Institut Polytechnique de Paris</p>

selected_papers: false
social: true

announcements:
  enabled: false
latest_posts:
  enabled: false
---

I am Orso Forghieri, a researcher in reinforcement learning and applied mathematics. I study **state abstraction, dynamic programming, and scalable algorithms** for large sequential decision problems.

Since February 2026, I have been collaborating with École polytechnique on adaptive learning methods. My current work includes **AggQL**, a model-free RL method that refines its state representation using confidence-controlled temporal-difference residual tests, and **Confidence-Adaptive Expert Disaggregation (CAED)**, a method for adapting large language models by dynamically creating LoRA specialists from statistically significant gradient disagreement.

My applied work connects these methods to resource allocation and latency-constrained edge-network optimization. I develop reusable Python libraries, benchmark algorithms, and build prototypes that validate decisions before integration.

<nav class="portfolio-actions" aria-label="Portfolio links">
  <a href="{{ '/projects/' | relative_url }}">Explore software</a>
  <a href="{{ '/publications/' | relative_url }}">Publications</a>
  <a href="{{ '/cv/' | relative_url }}">CV &amp; background</a>
  <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Download CV</a>
</nav>

<section class="portfolio-section" aria-label="Research and engineering focus">
  <div class="portfolio-strengths">
    <div>
      <h2 class="h5">Research</h2>
      <p>Reinforcement learning, state abstraction, hierarchical methods, and scalable dynamic programming.</p>
    </div>
    <div>
      <h2 class="h5">Applied optimization</h2>
      <p>Resource allocation, service placement, and network routing under capacity and latency constraints.</p>
    </div>
    <div>
      <h2 class="h5">Software engineering</h2>
      <p>Modular Python tooling, reproducible benchmarks, automated tests, and validated integration interfaces.</p>
    </div>
  </div>
</section>

<section class="portfolio-section" aria-labelledby="selected-software">
  <h2 id="selected-software">Selected software</h2>
  <div class="software-grid">
    {% assign featured_projects = site.data.software | where: 'featured', true %}
    {% for project in featured_projects %}
      {% include software-card.liquid project=project compact=true %}
    {% endfor %}
  </div>
  <p class="mt-3"><a href="{{ '/projects/' | relative_url }}">Technical details, figures, and publication code</a></p>
</section>

<section class="portfolio-section" aria-labelledby="research-interests" markdown="1">
## Research interests {#research-interests}

State abstraction and Markov aggregation/disaggregation; approximate dynamic programming; hierarchical reinforcement learning; planning and stochastic optimization for large MDPs; adaptive representations and parameter-efficient LLM adaptation.
</section>

<section class="portfolio-section" aria-labelledby="academic-background" markdown="1">
## Academic background {#academic-background}

My PhD thesis, _Hierarchical Reinforcement Learning for Large Scale Problems_, was prepared at [École polytechnique](https://www.polytechnique.edu/) / Institut Polytechnique de Paris, within CMAP, under the supervision of [Erwan Le Pennec](https://www.cmap.polytechnique.fr/~lepennec/fr/), [Hind Castel-Taleb](https://samovar.telecom-sudparis.eu/index.php/en/samovar-faculty-and-students/), and [Emmanuel Hyon](https://www.lip6.fr/actualite/personnes-fiche.php?ident=P216).

I hold a Master's degree from École normale supérieure Paris-Saclay and an Engineering Diploma from École polytechnique. My applied experience includes quantitative research at Qube Research & Technologies and service-placement research with Orange Gardens / CMAP. See my [CV]({{ '/cv/' | relative_url }}) for experience and education, and [Teaching]({{ '/teaching/' | relative_url }}) for academic service.
</section>

<section class="portfolio-section" aria-labelledby="selected-publications" markdown="1">
## Selected publications {#selected-publications}

- [_Hierarchical Reinforcement Learning for Large Scale Problems_]({{ '/publications/' | relative_url }}#forghieri2025hierarchical) — PhD thesis, 2025.
- [_Faster Latency Constrained Service Placement in Edge Computing with Deep Reinforcement Learning_]({{ '/publications/' | relative_url }}#forghieri2025faster) — TX4NETs workshop at IFIP Networking, 2025.
- [_State Abstraction Discovery from Progressive Disaggregation Methods_]({{ '/publications/' | relative_url }}#forghieri2024state) — EWRL, 2024.
- [_Progressive State Space Disaggregation for Infinite Horizon Dynamic Programming_]({{ '/publications/' | relative_url }}#forghieri2024progressive) — ICAPS, 2024.

[All publications and manuscripts]({{ '/publications/' | relative_url }})
</section>

<section class="portfolio-section" aria-labelledby="contact" markdown="1">
## Contact {#contact}

I welcome research and engineering discussions on scalable decision-making, reinforcement learning, and constrained resource optimization. Contact me at [orso.forghieri@gmail.com](mailto:orso.forghieri@gmail.com) or via the profiles below.
</section>
