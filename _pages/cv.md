---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 6
description: Research experience, education, and software in reinforcement learning and applied mathematics.
---

[Download full PDF CV]({{ '/assets/pdf/cv.pdf' | relative_url }}){: .btn .btn-sm .z-depth-0}

## CV highlights

- Research collaboration with École polytechnique since Feb. 2026: adaptive reinforcement learning, state abstraction, and parameter-efficient LLM adaptation.
- PhD in Applied Mathematics / Reinforcement Learning, École polytechnique / Institut Polytechnique de Paris, Sep. 2022-Dec. 2025.
- Quantitative Researcher, Qube Research & Technologies, Paris, Oct. 2025-Feb. 2026.
- Publications at the TX4NETs workshop at IFIP Networking 2025, EWRL 2024, and ICAPS 2024.
- Python research software for service placement, dynamic programming, and reproducible MDP benchmarking.

## Research profile

Researcher in reinforcement learning and applied mathematics, working on reinforcement learning, dynamic programming, Markov Decision Processes, state abstraction, and hierarchical methods for scalable decision-making in high-dimensional environments. Current work extends adaptive refinement to model-free RL and parameter-efficient adaptation of large language models.

Applications include large-scale planning, resource allocation, network optimization, edge computing, service placement, server energy and performance optimization, market forecasting, and railway-delay propagation modelling.

## Experience

### Feb. 2026-present: Research Collaboration, École polytechnique

- Designed and implemented **AggQL**, a model-free reinforcement-learning method that learns and refines its internal state representation directly from interaction using confidence-controlled temporal-difference residual tests.
- Developed **Confidence-Adaptive Expert Disaggregation (CAED)**, a parameter-efficient LLM adaptation method that dynamically creates LoRA specialists based on statistically significant gradient disagreement. Derived an optimization bound quantifying the benefit of expert specialization.
- Developed **mdpforge**, a modular Python framework for reproducible benchmarking of finite MDP solvers, with matched accuracy and independent error checks.
- Built reproducible Python/Gym environments and benchmarking pipelines for exact, approximate, and learning-based decision-making algorithms.

### Oct. 2025-Feb. 2026: Quantitative Researcher, Qube Research & Technologies, Paris

Developed sequential and explainable decision-making methods for systematic equity trading. Worked on interpretable modelling of trading decisions and applied reinforcement-learning and statistical-learning methods to financial decision processes.

### 2022-2026: PhD Researcher in Reinforcement Learning, CMAP, École polytechnique

Developed abstraction-refinement and progressive state-space disaggregation methods for large Markov Decision Processes. Studied the links between approximate dynamic programming, projected Bellman operators, and abstract MDPs; integrated disaggregation into approximate value iteration, Q-value iteration, and policy iteration. Benchmarked methods on random MDPs, Four Rooms, Mountain Car, Sutton's racetrack, tandem queues, and hydro-valley management models.

### 2021-2025: Research Collaboration in Reinforcement Learning and Combinatorial Optimization, Orange Gardens / CMAP

Modelled latency-constrained edge service placement and routing under local-information, network-flow, and compute-capacity constraints for industrial 6G use cases, including Smart Warehouse and Augmented Reality. Designed a lightweight hybrid orchestration approach combining rule-based mechanisms with RL-based service placement.

Also developed methods to extract simplified, interpretable server dynamics under time-varying workloads and derive VM-management policies for energy optimization. This collaboration led to communications at ROADEF 2022 and the TX4NETs workshop at IFIP Networking 2025.

### Mar. 2022: Research Intern in Hierarchical Reinforcement Learning, Télécom SudParis

Explored server energy and performance optimization under uncertainty using hierarchical reinforcement learning, in collaboration with Energy4Climate.

### Jun. 2020-Sep. 2020: Machine Learning Intern, SNCF Réseau — DGEX Solutions

Developed Python machine-learning models to predict train-delay propagation and estimate delayed train passage times for passenger information and traffic regulation. Engineered features from historical circulation data, compared models with existing delay-forecasting baselines, and presented results to DGEX Solutions stakeholders.

### Sep. 2019-May 2020: Research Project in Market Forecasting, Lusis Trading Solutions

Developed CNN and LSTM models for CAC40, UK100, and commodity time series. Integrated financial news through sentiment analysis and Word2Vec features from Bloomberg and Reuters headlines. Analysed class imbalance, delayed predictions, gradient instability, and loss-function design for directional forecasting.

## Education

- Sep. 2022-Dec. 2025: **PhD in Applied Mathematics / Reinforcement Learning**, École polytechnique, Institut Polytechnique de Paris.
  Thesis: _Hierarchical Reinforcement Learning for Large Scale Problems_. Supervision: Erwan Le Pennec, Hind Castel-Taleb, Emmanuel Hyon. Laboratory: Centre de Mathématiques Appliquées, École Polytechnique.
- Sep. 2021-Aug. 2022: **MSc MVA — Mathematics, Vision, Learning**, ENS Paris-Saclay.
  Thesis: _Hierarchical Reinforcement Learning for Optimizing Large Systems_, supervised by Erwan Le Pennec, CMAP. Selected coursework: time series analysis, deep learning, reinforcement learning, and object recognition.
- Sep. 2018-Aug. 2021: **Diplôme d'ingénieur**, École polytechnique.
  Thesis: _Mobility in Epidemiological SEIR Model and Application to the COVID-19 Propagation from Italy to France_, supervised by Stéphane Gaubert, CMAP. Research projects in market forecasting with Guillaume Hollard / Lusis Solutions and network optimization with Eric Gourdin / Orange Gardens.
- Sep. 2015-Sep. 2018: **Classe préparatoire MPSI-MP**, Lycée Louis-le-Grand, Paris.
  TIPE: _Location of a Photographer using Projective Geometry Methods_, supervised by Jean-Pierre Roundneff. Admission to École polytechnique.

## Selected publications and manuscripts

- [_Confidence-Adaptive State Abstraction for Model-Free Q-Learning_](https://openreview.net/forum?id=VMzlMuVooX), submitted to AISTATS 2027.
- [_Value-Aware State Disaggregation for Continuous-State MDPs_](https://openreview.net/forum?id=u9uSfBTbzz), submitted to AISTATS 2027.
- _Hierarchical Reinforcement Learning for Large Scale Problems_, PhD thesis, Institut Polytechnique de Paris, 2025.
- _Faster Latency Constrained Service Placement in Edge Computing with Deep Reinforcement Learning_, TX4NETs workshop at IFIP Networking, 2025.
- _State Abstraction Discovery from Progressive Disaggregation Methods_, European Workshop on Reinforcement Learning, 2024.
- _Progressive State Space Disaggregation for Infinite Horizon Dynamic Programming_, International Conference on Automated Planning and Scheduling, 2024.
- _Approximate Dynamic Programming and State Abstraction Discovery_, manuscript under peer review.
- _Disaggregation Techniques for Faster Markov Decision Process Solving and State Abstraction Discovery_, experimental code associated with a submitted manuscript.

See [Publications]({{ '/publications/' | relative_url }}) for bibliographic records, and [Talks]({{ '/talks/' | relative_url }}) for presentations and slides.

## Selected software

<ul>
  {% assign featured_projects = site.data.software | where: 'featured', true %}
  {% for project in featured_projects %}
    <li><a href="{{ project.github }}">{{ project.name | escape }}</a>: {{ project.summary | escape }}</li>
  {% endfor %}
</ul>

[state_space_disaggregation](https://github.com/OrsoF/state_space_disaggregation) provides the experimental code for the ICAPS 2024 paper. See [Software]({{ '/projects/' | relative_url }}) for technical details, figures, and research environments.

## Teaching and academic service

Teaching assistant in statistics, probability, rare-event simulation, and operational research at École polytechnique and Université Paris Nanterre (2023-2024). PhD student representative on the CMAP Laboratory Life Committee (2024-2025), reviewer for ROADEF 2025, and alpha tester for the Marmote MDP solver. Also contributed to X-HEC admissions interviews and mathematics outreach at IHES.

See [Teaching]({{ '/teaching/' | relative_url }}) for courses, dates, and academic service.

## Technical skills

- Machine learning: Reinforcement Learning, Deep RL, Hierarchical RL, Approximate Dynamic Programming, State Abstraction, Markov Decision Processes, Planning.
- Optimization: Combinatorial Optimization, Integer Linear Programming, Network Optimization, Resource Allocation, Dynamic Programming.
- Programming: Python, NumPy, SciPy, JAX, PyTorch, TensorFlow, Pandas, Gym/Gymnasium, Git, R, Java, C++.
- Scientific computing: sparse matrices, benchmarking, numerical experiments, stochastic simulation, LaTeX, GitHub.

## Languages

- French: native.
- English: fluent.
- German: written.

## Academic profiles

- [GitHub](https://github.com/OrsoF)
- [LinkedIn](https://fr.linkedin.com/in/orso-forghieri)
- [Google Scholar](https://scholar.google.com/citations?hl=fr&user=6Vzx6MUAAAAJ)
- [DBLP](https://dblp.org/pid/376/8414.html)
