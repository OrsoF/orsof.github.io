# CV synchronization — 27 October 2026

The current website content is aligned with `C:\Users\orsof\github\CV\cv_full.tex`, including the two AISTATS 2027 submissions added to that source during this update. This section supersedes the CV alignment and current-affiliation questions in the earlier review below.

- Homepage: current research collaboration with École polytechnique since February 2026; AggQL and Confidence-Adaptive Expert Disaggregation (CAED); research interests and site metadata now include parameter-efficient LLM adaptation.
- HTML CV: QRT ends in February 2026; Orange Gardens / CMAP runs through 2025; MVA thesis supervision is Erwan Le Pennec. Added the current collaboration, Télécom SudParis, SNCF Réseau, Lusis, preparatory studies, languages, and summaries linking to teaching and talks. Experience and skill descriptions follow the supplied CV.
- Publications: added _Confidence-Adaptive State Abstraction for Model-Free Q-Learning_ and _Value-Aware State Disaggregation for Continuous-State MDPs_ as manuscripts **submitted to AISTATS 2027**, with the supplied OpenReview links. They are not labelled accepted proceedings papers. The 2026 year groups these current submissions; the conference is in 2027.
- Software: canonical repository names, links, and project anchors are now `service-placement-benchmarks` and `service-placement-deployable`. The latter's summary describes its documented PPO workflow. The historical source link for the adapted integration figure is pinned to the originally audited commit under the canonical repository name.
- Teaching: completed the 2023 instructor names and removed unsupported dates from the Marmote alpha-testing entry.
- Downloadable PDF: replaced the older two-page CV with the latest complete four-page CV. Compiled a temporary copy of the supplied TeX source with layout-only changes: a page break before research/work experience, wrapping skill entries using `cvitem`, corrected École accents, and corrected seconds typography. The original CV source was not edited. The temporary source and page renders are in this chat's visualization workspace as `cv-site.tex` and `cv-fixed-page-*.png`.

Validation:

- Targeted Prettier formatting and YAML/front-matter parsing; LiquidJS rendering of the actual content/shared software include; compilation of the full site SCSS.
- Approximation preview covers 11 pages, eight bibliography records, and internal page/asset links and anchors. Bibliography preview rendering substitutes for Jekyll-Scholar and therefore does not validate that plugin.
- All 13 repository, documentation, and figure-source URLs in the software data returned HTTP 200. Automated web access could not inspect the supplied OpenReview submission pages; their links and status come from the CV.
- Browser inspection of the homepage, CV, and Software page, including 390 px mobile layouts and the homepage's dark theme. No horizontal overflow observed; the portrait loaded. Preview wrapper navigation and figure/social rendering are simplified; this is not a full Jekyll build.
- PDF compiled successfully with MiKTeX in two passes, with no overfull/underfull-box warnings; all four pages rendered and visually inspected. Current research, manuscripts, software links, dates, and education are present.
- `docker compose up --build` could not run because Docker is unavailable. A full Jekyll production build remains necessary before publishing.
- No commit, push, or deployment performed. Existing portfolio changes were retained.

---

# Earlier portfolio review — 14 October 2026

## Changes and project selection

The existing al-folio/Jekyll framework, navigation URLs, publication records, and PDF CV are retained. The homepage introduces research, applied optimization, and software engineering, then features three software projects before academic background and selected publications. The Software page adds consistent descriptions of problems, methods, implemented capabilities, engineering, and scope.

The homepage, Software page, CV project list, and three existing project detail pages use `_data/software.yml`. `_includes/software-card.liquid` renders compact or detailed cards. Its captured HTML is emitted without newlines to prevent Markdown from interpreting formatted template output as code. Portfolio styles are scoped, use existing light/dark theme colors, and add no frontend dependencies or runtime GitHub requests.

| Featured project                                                              | Selection rationale                                                                                                                                                     | Public source snapshot                     |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [mec-placement-benchmarks](https://github.com/OrsoF/mec-placement-benchmarks) | Constrained optimization, a shared feasibility contract, reproducible comparisons, and cross-platform engineering checks.                                               | `4bb9e76ddcecf0e3d6ec8e2fe036126ed4de2b91` |
| [mdpforge](https://github.com/OrsoF/mdpforge)                                 | Reusable numerical interfaces, sparse MDPs, solver comparison at a common accuracy target, and experiment provenance.                                                   | `4fe36ae575eb2d12a99863ee17e629285f200a94` |
| [mec-deployable](https://github.com/OrsoF/mec-deployable)                     | Input/output contracts, independent constraint checking, baseline fallback, and integration through JSON, CLI, HTTP, and Docker. Explicitly a synthetic-data prototype. | `ee793785f1cc274755e1c6c5b77cbafb76c91eb6` |

Complementary projects:

- [state_space_disaggregation](https://github.com/OrsoF/state_space_disaggregation), snapshot `ca7c70935902f51b82c963606b0f07a6c3c126e4`: direct connection to ICAPS 2024 research. Historical experiment code with a long-running campaign, rather than a tested reusable library.
- [nonogram-gymnasium](https://github.com/OrsoF/nonogram-gymnasium), snapshot `04309308902d59e7d67d722642137fe3812509a4`: Gymnasium environment design, deterministic generation, example agents, and CI quality checks.
- [Adaptive-Expert-Refinement](https://github.com/OrsoF/Adaptive-Expert-Refinement) was also inspected: a small PyTorch mixture-of-experts capacity-growth experiment with routing/growth tests and synthetic smoke instructions. It was not featured because the constrained decision-making and numerical tooling projects provide stronger evidence for this portfolio's focus. No demonstrated advantage is inferred from the experiment's hypothesis.

## Evidence reviewed

Only fresh clones of public default branches were used for project claims; similarly named local working repositories were not used. Documentation, implementation, test source, examples, workflows where present, and saved figures were inspected. The projects' test suites and expensive benchmark campaigns were not executed for this website change.

- **mec-placement-benchmarks:** `src/mecbench/api.py`, domain validation and solver architecture, `tests/integration/test_public_api.py`, unit/integration/regression test inventory, `.github/workflows/ci.yml`, quickstart and benchmark notebook, documentation, saved benchmark CSV/protocol, and placement/routing figure. Tests cover repeatability, solver status semantics, optional dependencies, and validation. CI includes Windows/Linux profiles and Docker checks.
- **mdpforge:** `src/mdpforge/core/benchmark.py`, precision checks and result/experiment handling, solver catalogue and sparse-model documentation; `tests/test_benchmark.py`, `test_precision.py`, `test_experiment.py`, and related test inventory; benchmark/gallery notebooks and accuracy figure. The independent residual check computes a value-error bound relative to the requested precision. There is no `.github/workflows/ci.yml` in the audited clone, despite the README badge; the website therefore does not claim CI for this project.
- **mec-deployable:** `src/network_ppo/inference.py`, constraints and JSON contracts, `tests/test_core.py`, test inventory, baseline benchmark and training/evaluation examples, `.github/workflows/ci.yml`, Dockerfile, and integration diagram. Optional policy artifacts are loaded locally, and automatic selection compares feasible candidates. No learned-policy performance or production operation is claimed. Specific PPO/MPC extensions are not promoted on the site.
- **state_space_disaggregation:** README, `main.py`, experiment/partition utilities, `solvers/value_successive_slicing.py`, and model/solver inventory. The repository identifies itself as code for the ICAPS paper. It is not substituted for the missing later manuscript artifact.
- **nonogram-gymnasium:** README, `gym_nonogram/env.py`, `tests/test_env.py`, CI workflow, example inventory, and generated board/demo assets. The implemented API is Gymnasium; old generic Gym wording was corrected.

All three featured visuals are public repository artifacts. The two PNGs are copied unchanged. The integration SVG is translated into English and its labels generalized to reflect the implemented baseline/optional-policy engine. Source figure links and captions are shown on the page. No synthetic performance results were generated for this task.

## Validation and limits

- Changed YAML and page front matter parsed successfully.
- Full `assets/css/main.scss` compilation passed with Dart Sass, including the new partial.
- Changed pages and shared includes rendered with LiquidJS and Markdown for a **local approximation preview**, not Jekyll. The approximation uses existing published vendor styles/scripts and navigation; unchanged public pages supply the publications, teaching, and talks views. Jekyll-specific plugins, production minification, PurgeCSS, image generation, and newly added bibliography code buttons still require the real build.
- Browser inspection covered desktop (1280 px) and mobile (390 px), light and dark theme colors, homepage and Software layouts, project navigation, loaded figures, mobile navigation, and the adapted integration SVG. No horizontal overflow was observed at the inspected widths. Figures have descriptive alt text, dimensions, lazy loading, and full-size links. Cards use semantic articles, headings, and definition lists; links have visible focus styling.
- Sampled project-link contrast: light purple on white **5.83:1**; dark cyan on the card background **4.62:1**. Dark body text on cards **12.59:1**. These checks are basic accessibility checks, not an exhaustive accessibility audit.
- **101 internal preview links/anchors checked with no errors**, including existing project paths, publication anchors, and PDF paths. Publication anchors were also checked against bibliography keys and the unchanged bibliography template.
- All **13 project, documentation, and source-figure URLs returned HTTP 200**. The published CV, local IFIP paper, and ICAPS PDF returned HTTP 200. The replacement SAMOVAR institutional directory for Hind Castel-Taleb returned HTTP 200; her previous personal page timed out.
- The EWRL OpenReview PDF returned **403 / browser verification** during automated checking. Its existing URL remains unchanged; verify it in a normal browser before publication.
- Changed supported files pass Prettier. Repository-wide `npx prettier . --check` found **163 pre-existing formatting issues** in unrelated files; they were left untouched. SVG XML parses successfully; Prettier has no inferred SVG parser here.
- `git diff --check` passed. The personal-site `url` and empty `baseurl` remain consistent. Homepage/Software descriptions were updated, and the social preview image URL was made absolute.
- **Full Jekyll build is pending.** `docker compose up --build` could not run: Docker and Ruby/Bundler are not installed or available, and WSL has no installed distribution. No system-wide runtime installation was attempted. Run the documented Docker build and inspect the real site before publishing.
- No new industrial data, internal code, or proprietary results were added. Newly written project claims and visuals are drawn from public repositories; the existing published CV remains unchanged.
- No commit, push, or deployment was performed.

## Manual factual review

1. **PhD chronology:** the existing PDF and CV page give education as September 2022–December 2025 and PhD research experience as 2022–2026. The thesis bibliography says 2025. Confirm whether these are distinct valid periods or whether a date needs correction; none were guessed or changed.
2. **Current position/affiliation:** no authoritative current appointment was established. The homepage now labels CMAP as the place of PhD research, instead of presenting an unverified current affiliation. Confirm your preferred current professional title.
3. **Manuscript status:** the 2025 manuscript entries retain the existing status text. Confirm whether the peer-review status and bibliographic records need updating.
4. **Missing code artifacts:** `OrsoF/JMLR2025` and `OrsoF/market_forecast` were absent from the public repository list. Broken links were removed; their existing project URLs remain available with honest availability notes. Supply a specific public replacement if one exists. The ICAPS code is linked only as related research, not as the later manuscript's artifact.
5. **mdpforge results provenance:** the README refers to `artifacts/results/readme_benchmark.csv`, which is absent from the audited public tree. The saved accuracy figure is presented as an illustration with its source link; no numeric speedup or overall solver ranking is asserted. Restore the raw data/manifest if you want visitors to reproduce that exact saved figure.
6. **CV alignment:** the unchanged PDF still contains the former profile wording and the shorter IFIP venue label. The HTML CV now uses neutral researcher wording, the TX4NETs workshop venue, and actual linked software projects. Update the PDF from its authoritative CV source once the factual points above are settled.

## Modified files

- `_pages/about.md`
- `_pages/projects.md`
- `_pages/cv.md`
- `_data/software.yml` (new)
- `_includes/software-card.liquid` (new)
- `_sass/_portfolio.scss` (new)
- `_layouts/about.liquid`
- `assets/css/main.scss`
- `_config.yml`
- `_bibliography/papers.bib`
- `_projects/edge-service-placement.md`
- `_projects/state-space-disaggregation.md`
- `_projects/nonogram-gymnasium.md`
- `_projects/jmlr2025-disaggregation-code.md`
- `_projects/market-forecast.md`
- `assets/img/software/mec-placement-routing.png` (new, public source copy)
- `assets/img/software/mdpforge-accuracy.png` (new, public source copy)
- `assets/img/software/mec-integration.svg` (new, adapted public source)
- `.github/PORTFOLIO_REVIEW.md` (this report)

## Optional GitHub improvements

- Add a concise description and topics to `mec-placement-benchmarks`; its public About description is empty.
- Replace the `mec-deployable` About description, currently just the repository name, with its synthetic-data decision-engine scope and integration boundary.
- Restore mdpforge's missing source CSV/manifests and either add the CI workflow or remove its broken README badge.
- Keep the three selected repositories pinned. A profile README could introduce the research/optimization/software focus in two sentences and link to each project, its runnable example, and the portfolio. Avoid unmeasured performance or production claims.
