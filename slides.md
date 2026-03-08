---
title: Infrastructure Evolution
theme: none
aspectRatio: 16/9
canvasWidth: 980
layout: aem-cover
---

::title::
# Infrastructure Evolution

::subtitle::
## Building Modern Apps with Cloudflare Serverless

::author::
Yazieq Suhaidin, System Developer

::client::
**[TechTalk]** Weekly Session for Knowledge Sharing

<!--
Tajuk: Evolusi Infrastruktur: Membina Aplikasi Moden dengan Cloudflare Serverless
-->

---
layout: aem-section
---

# THE EVOLUTION

::body::
From physical servers to zero infrastructure

---
layout: aem-steps
title: Server Evolution
---

<div style="text-align: center; margin-bottom: 8px;">
  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=160&fit=crop&crop=center" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; opacity: 0.85;" />
</div>

<div class="step-item" style="--step-color: #03AD9A">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3>On-Premise</h3>
    <p>High CapEx. Physical maintenance (cooling, power, cabling). Hard to scale — weeks to provision new hardware.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #008192">
  <div class="step-number">2</div>
  <div class="step-content">
    <h3>Cloud (IaaS / PaaS)</h3>
    <p>VMs (e.g., AWS EC2). Easier to scale, but still requires OS patching, maintenance, and paying for idle server time.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #064B77">
  <div class="step-number">3</div>
  <div class="step-content">
    <h3>Serverless</h3>
    <p>Zero infra management. Auto-scaling. Pay only for what you use. 100% focus on writing code.</p>
  </div>
</div>

<!--
Slide 1: Evolusi Server (On-Prem ke Serverless)
On-Premise: Kos CapEx tinggi. Penyelenggaraan fizikal (penghawa dingin, elektrik). Sukar untuk scale.

Cloud (IaaS/PaaS): VM (cth: AWS EC2). Lebih mudah scale, tetapi masih perlu patching OS, maintenance, dan bayar kos server melahu (idle).

Serverless: Sifar pengurusan infrastruktur. Auto-scaling. Bayar apa yang diguna sahaja. Fokus 100% pada penulisan kod.
-->

---
layout: aem-steps
title: The Serverless Market
---

<div class="step-item" style="--step-color: #03AD9A">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3><img src="https://cdn.simpleicons.org/awslambda/FF9900" style="height: 22px; vertical-align: middle; margin-right: 8px;" />Traditional Serverless</h3>
    <p>AWS Lambda / GCP Functions — pioneers of serverless, but prone to <strong>cold starts</strong> (delays) and hidden API gateway / egress costs.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #008192">
  <div class="step-number">2</div>
  <div class="step-content">
    <h3><img src="https://cdn.simpleicons.org/vercel/000" style="height: 20px; vertical-align: middle; margin-right: 8px;" /><img src="https://cdn.simpleicons.org/netlify/00C7B7" style="height: 20px; vertical-align: middle; margin-right: 8px;" />Frontend Platforms</h3>
    <p>Vercel / Netlify — excellent Developer Experience (DX), but often rely on AWS under the hood. Limited backend flexibility.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #064B77">
  <div class="step-number">3</div>
  <div class="step-content">
    <h3><img src="https://cdn.simpleicons.org/cloudflare/F38020" style="height: 22px; vertical-align: middle; margin-right: 8px;" />The Challenger — Cloudflare</h3>
    <p>Computes at the <strong>"Edge"</strong>. Zero cold starts. Drastically lower costs. A complete platform, not just functions.</p>
  </div>
</div>

<!--
Slide 2: Pasaran Serverless
Serverless Tradisional (AWS Lambda / GCP Functions): Perintis, tetapi ada isu "cold starts" (lengah masa) & kos tersembunyi (seperti API gateway/egress).

Platform Frontend (Vercel / Netlify): Developer Experience (DX) yang cemerlang, tetapi sering bergantung pada AWS di belakang tabir.

Pencabar Utama (Cloudflare): Pemprosesan di "Edge". Sifar cold starts. Kos operasi jauh lebih rendah.
-->

---
layout: aem-section
---

# CLOUDFLARE ECOSYSTEM

::body::
Four pillars to build full-stack apps without traditional servers

---
layout: aem-four-cols
title: Cloudflare's 4 Pillars
subtitle: Full-Stack Without Traditional Servers
---

::col1::

![](https://cdn.simpleicons.org/cloudflarepages/F38020)

### Pages

Frontend Hosting — deploy static sites & SSR apps globally in seconds

::col2::

![](https://cdn.simpleicons.org/cloudflareworkers/F38020)

### Workers

Backend Compute — serverless APIs & logic at the edge with 0ms cold starts

::col3::

![](https://cdn.simpleicons.org/sqlite/003B57)

### D1

Relational Database — serverless SQLite with native Workers integration

::col4::

![](https://cdn.simpleicons.org/cloudflare/F38020)

### R2

Object Storage — S3-compatible with zero egress fees

<style>
.fourcols-item img {
  height: 48px;
  width: auto;
  max-width: 48px;
}
</style>

<!--
Slide 3: 4 Tonggak Cloudflare
Bina aplikasi full-stack tanpa server tradisional:

Pages: Hosting untuk Frontend.

Workers: Pemprosesan Backend & API.

D1: Pangkalan Data Relasional (SQL).

R2: Storan Objek (Object Storage).
-->

---
layout: aem-two-cols
title: Cloudflare Pages
subtitle: Blazing Fast Frontend Hosting at the Edge
---

::left::

### What is the "Edge"?

Apps are deployed globally across **hundreds of data centers**. Users download assets from their **closest local node**, not a distant origin server.

<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop" style="width: 100%; border-radius: 8px; margin-top: 8px;" />

::right::

### ✅ Recommended Frameworks

<p><img src="https://cdn.simpleicons.org/nextdotjs/000" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> Next.js (Edge Runtime)</p>
<p><img src="https://cdn.simpleicons.org/astro/BC52EE" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> Astro</p>
<p><img src="https://cdn.simpleicons.org/react/61DAFB" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> React</p>
<p><img src="https://cdn.simpleicons.org/vuedotjs/4FC08D" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> Vue</p>

### ❌ Not Ideal

- Heavy Node.js monoliths requiring full OS access

<!--
Slide 4: Cloudflare Pages & "Edge"
Fokus: Hosting frontend yang sangat pantas. Sesuai untuk projek antaramuka pengguna seperti salam-platform-frontend.

Apa itu "Edge"? Aplikasi diedarkan ke ratusan pusat data global. Pengguna memuat turun dari node paling dekat, bukan dari server utama yang jauh.

Boleh Pakai (Framework): Next.js (Edge Runtime), Astro, React, Vue.

Tak Boleh Pakai: Monolith Node.js yang berat dan memerlukan akses penuh kepada fail sistem OS.

maksud berat be, fe, db, storage 1 framework ja. akan makan ram & cpu. app yg akan write file dlm server.
-->

---
layout: aem-two-cols
title: Cloudflare Workers
subtitle: Edge Compute with 0ms Cold Starts
---

::left::

### Why So Fast?

Uses **V8 Isolates** instead of containers or VMs. Each request spins up in microseconds — no cold start penalty.

<div style="background: linear-gradient(135deg, rgba(3,173,154,0.08), rgba(29,39,90,0.05)); border-radius: 8px; padding: 12px; margin-top: 8px;">
  <p style="margin: 0; font-size: 0.85em;"><strong>Container:</strong> ~200-500ms cold start ❄️</p>
  <p style="margin: 4px 0 0 0; font-size: 0.85em;"><strong>V8 Isolate:</strong> 0ms cold start ⚡</p>
</div>

<img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=160&fit=crop" style="width: 100%; border-radius: 8px; margin-top: 8px;" />

::right::

### ✅ Recommended

<p><img src="https://cdn.simpleicons.org/hono/E36002" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> Hono.js — lightweight & fast</p>
<p><img src="https://cdn.simpleicons.org/typescript/3178C6" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> Native JS / TypeScript</p>
<p><img src="https://cdn.simpleicons.org/rust/000" style="height: 18px; vertical-align: middle; margin-right: 6px;" /> Rust (via WASM)</p>

### ❌ Not Ideal

- <img src="https://cdn.simpleicons.org/express/000" style="height: 16px; vertical-align: middle; margin-right: 4px;" /> Express.js
- <img src="https://cdn.simpleicons.org/nestjs/E0234E" style="height: 16px; vertical-align: middle; margin-right: 4px;" /> NestJS
- Heavy Node.js dependencies

<!--
Slide 5: Cloudflare Workers (Komputasi Edge)
Fokus: Logik backend serverless dan API (contohnya untuk mengendalikan logik backend setelbos).

Kenapa Sangat Laju? Menggunakan V8 Isolates, bukan teknologi container. Hasilnya: 0ms cold starts.

Boleh Pakai: Hono.js, ElysiaJS (ringan & sangat pantas), JS/TS natif, Rust.

Tak Boleh Pakai: Express.js, NestJS, AdonisJS (bergantung kuat pada persekitaran Node.js yang tradisional).

V8 Isolates mcm mesra JavaScript / TypeScript.
kalau windows server mesra .net
kalau ubuntu mesra php
python boleh, tapi framework tertentu juga.
-->

---
layout: aem-two-cols
title: Cloudflare D1
subtitle: Serverless SQL at the Edge
---

::left::

### Key Features

- **Engine:** Built on **SQLite** <img src="https://cdn.simpleicons.org/sqlite/003B57" style="height: 18px; vertical-align: middle; margin-left: 4px;" />
- **Native** integration with Workers
- **Zero** database clusters or replication to manage
- **Fast** read performance at the edge
- Familiar SQL syntax — no new query language to learn

> *Perfect for apps that need relational data without the ops burden*

::right::

<img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop" style="width: 100%; border-radius: 8px; margin-top: 16px;" />

<div style="background: linear-gradient(135deg, rgba(3,173,154,0.08), rgba(29,39,90,0.05)); border-radius: 8px; padding: 12px; margin-top: 12px; text-align: center;">
  <p style="margin: 0; font-size: 0.85em;"><strong>Traditional DB:</strong> Cluster setup, replicas, connection pooling</p>
  <p style="margin: 4px 0 0 0; font-size: 0.85em;"><strong>D1:</strong> <code>wrangler d1 create my-db</code> ✅</p>
</div>

<!--
Slide 6: Cloudflare D1 (SQL Serverless)
Fokus: Pangkalan data relasional serverless pertama Cloudflare.

Enjin: Dibina berasaskan SQLite.

Kelebihan Utama:

Integrasi natif bersama Workers.

Tiada kluster pangkalan data atau replikasi untuk diuruskan.

Prestasi bacaan (read) yang sangat pantas terus di Edge.
-->

---
layout: aem-two-cols
title: Cloudflare R2
subtitle: S3-Compatible Object Storage — Zero Egress Fees
---

::left::

### The Killer Feature

**Zero Egress Fees** — unlike AWS S3, you don't pay a cent when users download files. Huge operational cost savings.

- S3-compatible API — drop-in replacement
- Store images, PDFs, videos, backups
- Integrate directly with Workers
- No bandwidth charges on reads

<img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=180&fit=crop" style="width: 100%; border-radius: 8px; margin-top: 8px;" />

::right::

### Cost Comparison

<div style="border-radius: 8px; overflow: hidden; margin-top: 12px;">
  <div style="background: #1D275A; color: white; padding: 8px 12px; font-weight: bold; font-size: 0.85em;">AWS S3 Egress</div>
  <div style="background: rgba(29,39,90,0.06); padding: 10px 12px;">
    <p style="margin: 0; font-size: 0.85em;">1 TB/month = <strong style="color: #c0392b;">~$90/month</strong></p>
    <p style="margin: 4px 0 0; font-size: 0.85em;">10 TB/month = <strong style="color: #c0392b;">~$900/month</strong></p>
  </div>
</div>

<div style="border-radius: 8px; overflow: hidden; margin-top: 12px;">
  <div style="background: #F38020; color: white; padding: 8px 12px; font-weight: bold; font-size: 0.85em;">Cloudflare R2 Egress</div>
  <div style="background: rgba(243,128,32,0.06); padding: 10px 12px;">
    <p style="margin: 0; font-size: 0.85em;">1 TB/month = <strong style="color: #27ae60;">$0.00</strong></p>
    <p style="margin: 4px 0 0; font-size: 0.85em;">10 TB/month = <strong style="color: #27ae60;">$0.00</strong></p>
  </div>
</div>

<p style="text-align: center; margin-top: 8px; font-size: 0.8em; color: #008192;"><strong>Savings: 100% on egress</strong></p>

<!--
Slide 7: Cloudflare R2 (Storan Objek)
Fokus: Storan fail (gambar, PDF, video) setara dengan S3.

Kelebihan Paling Besar: Sifar Kos Egress.

Kenapa ia penting? Berbeza dengan AWS S3, anda tidak membayar satu sen pun apabila pengguna memuat turun fail. Ini memberikan penjimatan kos operasi yang sangat ketara.
-->

---
layout: aem-section
---

# DEVELOPER EXPERIENCE

::body::
One CLI to rule them all

---
layout: aem-steps
title: Tying It Together — Wrangler CLI
---

<div style="text-align: center; margin-bottom: 8px;">
  <img src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=140&fit=crop&crop=center" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; opacity: 0.8;" />
</div>

<div class="step-item" style="--step-color: #03AD9A">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3>Install & Scaffold</h3>
    <p>Run <code>npm create cloudflare@latest</code> to bootstrap a new project with Pages, Workers, D1, and R2 ready to go.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #008192">
  <div class="step-number">2</div>
  <div class="step-content">
    <h3>Local Development</h3>
    <p>Run Pages, Workers, D1, and R2 <strong>locally</strong> on your machine — no internet required. Full offline development.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #064B77">
  <div class="step-number">3</div>
  <div class="step-content">
    <h3>Configure with wrangler.toml</h3>
    <p>A single, simple config file to bind all your services together. Define bindings, environment variables, and routes.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #1D275A">
  <div class="step-number">4</div>
  <div class="step-content">
    <h3>1-Click Deploy</h3>
    <p>Type <code>npx wrangler deploy</code> to push your entire infrastructure globally in seconds. That's it.</p>
  </div>
</div>

<!--
Slide 8: Menyatukan Segalanya dengan "Wrangler"
Apa itu Wrangler? Alat baris arahan (CLI) rasmi Cloudflare untuk memudahkan aliran kerja developer (DX).

Local Dev: Jalankan simulasi Pages, Workers, D1, dan R2 terus di dalam laptop—tanpa perlukan sambungan internet.

wrangler.toml: Satu fail konfigurasi ringkas untuk menetapkan semua perkhidmatan dan binding ini.

Deployment 1-Klik: Hanya taip npx wrangler deploy untuk muat naik keseluruhan infrastruktur secara global dalam beberapa saat.
-->

---
layout: aem-end
---

# THANK YOU

::contact::

**Yazieq Suhaidin** — System Developer — **AEM Enersol Sdn Bhd** — www.aemenersol.com
