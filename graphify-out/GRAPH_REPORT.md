# Graph Report - lms  (2026-11-04)

## Corpus Check
- Corpus is ~21,256 words - fits in a single context window. You may not need a graph.

## Summary
- 457 nodes · 787 edges · 40 communities (26 shown, 14 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.86)
- Token cost: 379,213 input · 0 output

## Community Hubs (Navigation)
- Site Content, Brand & Login
- Pages & UI Components
- Web Dependencies
- NestJS API App
- Website Copy (Docs)
- Playwright CLI Skill
- API TS Config
- Root Workspace Package
- Web TS Config
- Turbo Pipeline
- API Scripts
- API Runtime Dependencies
- API Dev Tooling
- Shared Types Package
- API Package Metadata
- Shared Types TS Config
- API Jest Config
- Oxlint Config
- API Build TS Config
- Nest CLI Config
- Root Layout & Fonts
- Agent Guidance Docs
- School Crest Symbols
- Campus Photo
- pnpm Workspace
- Shared Domain Types
- Next Config
- NestJS Mau
- NestJS Schematics
- Oxlint
- Prettier
- Supertest
- ts-loader
- ts-node
- TypeScript (API)
- PostCSS Config
- Apple Touch Icon
- Site Favicon
- Logo Source Scan
- Leftover Vercel Logo

## God Nodes (most connected - your core abstractions)
1. `Icon()` - 29 edges
2. `Reveal()` - 25 edges
3. `compilerOptions` - 20 edges
4. `next` - 19 edges
5. `SectionHeading()` - 19 edges
6. `scripts` - 16 edges
7. `compilerOptions` - 16 edges
8. `playwright-cli Skill` - 15 edges
9. `PageHero()` - 11 edges
10. `Home page (/)` - 11 edges

## Surprising Connections (you probably didn't know these)
- `Home Hero` --references--> `Hero()`  [INFERRED]
  docs/website-content.md → apps/web/src/components/ui/Hero.tsx
- `Our programmes` --references--> `Programmes()`  [INFERRED]
  docs/website-content.md → apps/web/src/components/ui/Programmes.tsx
- `Why Child Time` --references--> `About()`  [INFERRED]
  docs/website-content.md → apps/web/src/components/ui/About.tsx
- `Admissions 2026/2027 steps` --references--> `Admissions()`  [INFERRED]
  docs/website-content.md → apps/web/src/components/ui/Admissions.tsx
- `Contact section` --references--> `Contact()`  [INFERRED]
  docs/website-content.md → apps/web/src/components/ui/Contact.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Evidence capture: tracing, video, PR attachments** — _claude_skills_playwright_cli_references_tracing_tracing, _claude_skills_playwright_cli_references_video_recording_video_recording, _claude_skills_playwright_cli_references_pr_attachments_pr_attachments [INFERRED 0.85]
- **Creche-to-JHS programme journey** — docs_website_content_creche_nursery, docs_website_content_kindergarten, docs_website_content_primary_school, docs_website_content_junior_high_school [EXTRACTED 1.00]
- **Child Time website pages** — docs_website_content_home_page, docs_website_content_about_page, docs_website_content_programmes_page, docs_website_content_admissions_page, docs_website_content_contact_page [EXTRACTED 1.00]

## Communities (40 total, 14 thin omitted)

### Community 0 - "Site Content, Brand & Login"
Cohesion: 0.06
Nodes (47): Child Time School Logo (childtime-logo.png), Royal Blue and Flame Orange Brand Palette, Motto: Knowledge Is Golden, Motto: Knowledge Is Golden, Child Time Preparatory Pri. & J.H.S., Blue Shield Crest with Open Book and Torch, LoginPage(), metadata (+39 more)

### Community 1 - "Pages & UI Components"
Cohesion: 0.17
Nodes (29): AboutPage(), metadata, AdmissionsPage(), metadata, ContactPage(), MAP_QUERY, metadata, Home() (+21 more)

### Community 2 - "Web Dependencies"
Cohesion: 0.08
Nodes (30): dependencies, @lms/types@workspace:*, next@16.3.8, react@19.2.8, react-dom@19.2.8, devDependencies, babel-plugin-react-compiler@1.0.0, tailwindcss@^4 (+22 more)

### Community 3 - "NestJS API App"
Cohesion: 0.11
Nodes (14): @nestjs/testing@^12.0.1, NestJS Mau deployment, NestJS Observe (ObserveModule.forRoot), NestJS TypeScript Starter (API), API pnpm scripts (start, start:dev, test, test:e2e, test:cov), AppController, AppModule, ObserveInstrument (+6 more)

### Community 4 - "Website Copy (Docs)"
Cohesion: 0.12
Nodes (27): About page (/about), Admission requirements, Admissions page (/admissions), Admissions 2026/2027 steps, BECE, Beyond the classroom, Call to action, Contact page (/contact) (+19 more)

### Community 5 - "Playwright CLI Skill"
Cohesion: 0.13
Nodes (21): Inspecting Element Attributes (eval), Running & Debugging Playwright Tests (--debug=cli), Attaching Screenshots/Videos to PRs (gh --attach), Request Mocking (route), Running Custom Playwright Code (run-code), Attach to running browser (channel/CDP/extension), Browser Session Management, Authentication state reuse (+13 more)

### Community 6 - "API TS Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowSyntheticDefaultImports, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, incremental, isolatedModules (+12 more)

### Community 7 - "Root Workspace Package"
Cohesion: 0.10
Nodes (20): devDependencies, turbo@^2.11.7, devEngines, packageManager, name, packageManager, name, onFail (+12 more)

### Community 8 - "Web TS Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "Turbo Pipeline"
Cohesion: 0.11
Nodes (17): dependsOn, inputs, outputs, cache, dependsOn, persistent, dependsOn, $schema (+9 more)

### Community 10 - "API Scripts"
Cohesion: 0.12
Nodes (16): scripts, build, deploy, dev, format, lint, start, start:debug (+8 more)

### Community 11 - "API Runtime Dependencies"
Cohesion: 0.14
Nodes (14): dependencies, @lms/types@workspace:*, @nestjs/common@^12.0.1, @nestjs/core@^12.0.1, @nestjs/observe@^0.3.0, @nestjs/platform-express@^12.0.1, reflect-metadata@^0.2.2, rxjs@^7.8.1 (+6 more)

### Community 12 - "API Dev Tooling"
Cohesion: 0.15
Nodes (13): devDependencies, @nestjs/cli@^12.0.0, source-map-support@^0.5.21, tsconfig-paths@^4.2.0, @types/express@^5.0.0, @types/jest@^30.0.0, @types/node@^24.0.0, @types/node (+5 more)

### Community 13 - "Shared Types Package"
Cohesion: 0.17
Nodes (12): devDependencies, typescript@^5, exports, typescript, name, private, scripts, build (+4 more)

### Community 14 - "API Package Metadata"
Cohesion: 0.18
Nodes (10): author, description, oxlint-tsgolint@^7.0.2001, @types/supertest@^7.0.0, license, name, private, version (+2 more)

### Community 15 - "Shared Types TS Config"
Cohesion: 0.18
Nodes (10): compilerOptions, declaration, module, moduleResolution, outDir, rootDir, skipLibCheck, strict (+2 more)

### Community 16 - "API Jest Config"
Cohesion: 0.25
Nodes (6): config, { config: tsconfig }, jest@^30.0.0, ts-jest@^29.4.0, jest, ts-jest

### Community 17 - "Oxlint Config"
Cohesion: 0.29
Nodes (6): env, node, rules, typescript/no-explicit-any, typescript/no-floating-promises, $schema

### Community 18 - "API Build TS Config"
Cohesion: 0.29
Nodes (6): compilerOptions, rootDir, exclude, extends, include, ./tsconfig.json

### Community 19 - "Nest CLI Config"
Cohesion: 0.33
Nodes (5): collection, compilerOptions, deleteOutDir, $schema, sourceRoot

### Community 20 - "Root Layout & Fonts"
Cohesion: 0.33
Nodes (3): fraunces, jakarta, metadata

### Community 21 - "Agent Guidance Docs"
Cohesion: 0.40
Nodes (3): agentGuidance turbo.json opt-out, turbo package bundled docs, CLAUDE.md includes AGENTS.md

### Community 22 - "School Crest Symbols"
Cohesion: 0.50
Nodes (5): Child Time School Crest (shield emblem), Flaming Torch (enlightenment symbol), Motto: Knowledge Is Golden, Navy Blue Shield Outline, Open Book (knowledge symbol)

### Community 23 - "Campus Photo"
Cohesion: 0.40
Nodes (5): school-view.jpg (Campus Photo), Blue and Cream School Colours, Three-storey Classroom Block, Paved Courtyard Assembly Area, Pupils in Yellow and Blue Uniforms

### Community 24 - "pnpm Workspace"
Cohesion: 0.40
Nodes (4): allowBuilds, @parcel/watcher, unrs-resolver, packages

### Community 25 - "Shared Domain Types"
Cohesion: 0.50
Nodes (3): Course, User, UserRole

## Knowledge Gaps
- **29 isolated node(s):** `./tsconfig.json`, `Interactive annotate dashboard (show --annotate)`, `WebMCP tools`, `Attach to running browser (channel/CDP/extension)`, `Seed test` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 185 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Pages & UI Components` to `Site Content, Brand & Login`, `Next Config`, `Web Dependencies`, `Root Layout & Fonts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **What connects `./tsconfig.json`, `Interactive annotate dashboard (show --annotate)`, `WebMCP tools` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site Content, Brand & Login` be split into smaller, more focused modules?**
  _Cohesion score 0.05701754385964912 - nodes in this community are weakly interconnected._
- **Why does `Icon()` connect `Pages & UI Components` to `Site Content, Brand & Login`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Should `Web Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08387096774193549 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `API Scripts` to `API Package Metadata`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Should `NestJS API App` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._