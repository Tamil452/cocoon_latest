import re

def update_learning_html():
    filepath = 'C:\\Users\\TamilselvanNeelakand\\.gemini\\antigravity\\scratch\\cocoon-academy\\learning.html'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the start of Core Programs Section
    start_marker = "<!-- ── 2. CORE PROGRAMS SECTION ─────────────────────────── -->"
    # Find the end (start of CTA section)
    end_marker = "<!-- ── CTA ────────────────────────────────────────────── -->"

    new_content = """<!-- ── 2. CORE ACADEMIC PILLARS ─────────────────────────── -->
  <section class="discipline-block" style="background:var(--bg2);">
    <div class="disc-inner">
      <div style="text-align:center; margin-bottom:60px;">
        <span class="sec-tag green-tag">Specialized & Expert-Led</span>
        <h2 style="font-family:var(--ff-display); font-size:clamp(2.5rem, 5vw, 4.5rem); color:var(--white); margin-top:12px;">FOUR CORE ACADEMIC PILLARS</h2>
      </div>

      <!-- Pillar 1: Early Childhood -->
      <div class="disc-split" style="margin-bottom:80px; align-items:center;">
        <div class="disc-split-img" data-scroll-reveal style="aspect-ratio:16/10; height:auto;">
          <img src="images/preschool_class.png" alt="Early Childhood Education" />
        </div>
        <div class="disc-split-content" data-scroll-reveal>
          <span class="disc-tag" style="color:#81c784;">Activity Based & Play-Way Learning</span>
          <h3 style="font-family:var(--ff-display); font-size:2.2rem; color:var(--white); margin-bottom:16px;">I. EARLY CHILDHOOD EDUCATION</h3>
          <p class="disc-desc">The critical window for brain development occurs in the early years. Our flagship foundational program transforms a child's natural curiosity into structured cognitive and motor growth. We have meticulously designed our early childhood curriculum to be entirely experiential.</p>
          <ul class="z-check-list" style="margin-bottom:20px; font-size:0.9rem;">
            <li><strong>Activity-Based Learning:</strong> Children learn mathematical concepts through structural blocks, physics through water and sand play, and social dynamics through guided group projects.</li>
            <li><strong>Play-Way Methodology:</strong> We remove the stress of rote learning. Education is delivered through music, movement, and interactive storytelling.</li>
            <li><strong>Holistic Outcomes:</strong> Advanced phonetic acquisition, robust motor skill development, early logical reasoning, and enhanced emotional self-regulation.</li>
          </ul>
        </div>
      </div>

      <!-- Pillar 2: Enrichment -->
      <div class="disc-split" style="margin-bottom:80px; align-items:center; direction:rtl;">
        <div class="disc-split-img" data-scroll-reveal style="aspect-ratio:16/10; height:auto;">
          <img src="images/skill_dev.png" alt="Enrichment Labs" />
        </div>
        <div class="disc-split-content" data-scroll-reveal style="direction:ltr;">
          <span class="disc-tag" style="color:#81c784;">English Lab • STEAM • Creativity</span>
          <h3 style="font-family:var(--ff-display); font-size:2.2rem; color:var(--white); margin-bottom:16px;">II. ENRICHMENT PROGRAMS: THE ACCELERATORS</h3>
          <p class="disc-desc">Academic knowledge alone is insufficient for the leaders of tomorrow. Our enrichment modules are designed to operate symbiotically with our core curriculum, unlocking specialized talents and providing a distinct competitive edge.</p>
          <ul class="z-check-list" style="margin-bottom:20px; font-size:0.9rem;">
            <li><strong>The English Language Lab:</strong> Immersive phonetics, vocabulary expansion, and elocution for elite verbal fluency and public speaking confidence.</li>
            <li><strong>STEAM Innovation Lab:</strong> Hands-on, integrated exploration of Science, Technology, Engineering, Arts, and Mathematics for analytical reasoning.</li>
            <li><strong>Creativity Studio:</strong> Fine arts, expressive crafts, theatrical storytelling, and lateral thinking challenges.</li>
          </ul>
        </div>
      </div>

      <!-- Pillar 3: Teacher Training -->
      <div class="disc-split" style="margin-bottom:80px; align-items:center;">
        <div class="disc-split-img" data-scroll-reveal style="aspect-ratio:16/10; height:auto;">
          <img src="images/teacher_training.png" alt="Teacher Training" />
        </div>
        <div class="disc-split-content" data-scroll-reveal>
          <span class="disc-tag" style="color:#81c784;">Professional Early Childhood Education</span>
          <h3 style="font-family:var(--ff-display); font-size:2.2rem; color:var(--white); margin-bottom:16px;">III. TEACHER TRAINING: EMPOWERING VISIONARIES</h3>
          <p class="disc-desc">The COCOON Learning Center is not only a haven for children but also an elite academy for educational professionals. We believe that world-class students require world-class educators. Our rigorous training programs equip aspiring and practicing teachers with modern pedagogical frameworks.</p>
          <ul class="z-check-list" style="margin-bottom:20px; font-size:0.9rem;">
            <li><strong>Curriculum Highlights:</strong> Deep-dive modules into Child Psychology, Behavioral Management, Contemporary Early Pedagogy, and Experiential Lesson Planning.</li>
            <li><strong>The COCOON Standard:</strong> Graduates of our program emerge as empathetic, highly credentialed leaders, ready to elevate the standard of early childhood education globally.</li>
          </ul>
        </div>
      </div>

      <!-- Pillar 4: Tuition Coaching -->
      <div class="disc-split" style="margin-bottom:0; align-items:center; direction:rtl;">
        <div class="disc-split-img" data-scroll-reveal style="aspect-ratio:16/10; height:auto;">
          <img src="images/about_community.png" alt="Premium Tuition" />
        </div>
        <div class="disc-split-content" data-scroll-reveal style="direction:ltr;">
          <span class="disc-tag" style="color:#81c784;">Classes VI–XII | All Boards</span>
          <h3 style="font-family:var(--ff-display); font-size:2.2rem; color:var(--white); margin-bottom:16px;">IV. PREMIUM TUITION COACHING: ACADEMIC MASTERY</h3>
          <p class="disc-desc">For senior students navigating the high-stakes years of their academic journey, we provide rigorous, highly individualized academic mentoring. We transform the pressure of board exams into structured, strategic success.</p>
          <ul class="z-check-list" style="margin-bottom:20px; font-size:0.9rem;">
            <li><strong>Curriculum Mastery:</strong> Expert, syllabus-aligned coaching for State Board, CBSE, Matriculation, and other major educational boards.</li>
            <li><strong>Subject Specializations:</strong> Comprehensive mentoring in advanced Mathematics, core Sciences, English literature, Social Sciences, and Commerce.</li>
            <li><strong>The Methodology:</strong> Small batch sizes, personalized attention, continuous assessment, and strategic exam-writing techniques.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PROMISE STRIP ────────────────────────────────────── -->
  <div class="promise-strip">
    <div class="wrap">
      <div class="promise-text">"Learn. Explore. Create. Grow."</div>
      <p style="font-family:'Inter',sans-serif; color:var(--g2); font-size:0.9rem; margin-top:10px;">At The <span class="cocoon-brand">COCOON</span> Learning Centre, we design bespoke learning journeys.</p>
    </div>
  </div>

  <!-- ── 3. SPECIALIZED ADD-ON PROGRAMS ───────────────────── -->
  <section class="discipline-block" style="background:var(--bg3);">
    <div class="disc-inner">
      <div style="text-align:center; margin-bottom:60px;">
        <span class="sec-tag green-tag">Continuing the Pursuit of Excellence</span>
        <h2 style="font-family:var(--ff-display); font-size:clamp(2.5rem, 5vw, 4.5rem); color:var(--white); margin-top:12px;">SPECIALIZED ADD-ON PROGRAMS</h2>
      </div>

      <div class="learning-features-grid">
        <div class="learning-feature-card" data-scroll-reveal>
          <span class="lfc-icon">🎯</span>
          <h4 class="lfc-title">High-Impact Workshops</h4>
          <p class="lfc-desc">Interactive, short-duration skill clinics led by industry experts, focusing on niche areas such as leadership, robotics, creative writing, and financial literacy.</p>
        </div>
        <div class="learning-feature-card" data-scroll-reveal>
          <span class="lfc-icon">🏕️</span>
          <h4 class="lfc-title">Signature Summer Camps</h4>
          <p class="lfc-desc">Dynamic, multi-disciplinary holiday experiences that perfectly blend educational exploration with sheer entertainment during academic breaks.</p>
        </div>
        <div class="learning-feature-card" data-scroll-reveal>
          <span class="lfc-icon">🧠</span>
          <h4 class="lfc-title">Special Coaching</h4>
          <p class="lfc-desc">Bespoke, one-on-one academic and developmental intervention for remedial support or advanced Olympiad preparation.</p>
        </div>
      </div>
    </div>
  </section>

  """

    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)

    if start_idx != -1 and end_idx != -1:
        new_page = content[:start_idx] + new_content + content[end_idx:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_page)
        print("Updated learning.html successfully.")
    else:
        print("Could not find markers in learning.html")

update_learning_html()
