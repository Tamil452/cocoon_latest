import os
import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the double Chennai issue in index.html
    if file == 'index.html':
        content = re.sub(r'<span class="hero-loc-pill">.*?Chennai</span>\s*<span class="hero-loc-pill">.*?Chennai</span>', r'<span class="hero-loc-pill">📍 Chennai</span>', content, flags=re.DOTALL)
        # Just in case they are exactly on the same line or separated by newlines
        content = content.replace('<span class="hero-loc-pill">📍 Chennai</span>\n        <span class="hero-loc-pill">📍 Chennai</span>', '<span class="hero-loc-pill">📍 Chennai</span>')
        content = content.replace('<span class="hero-loc-pill">📍 Chennai</span>\n<span class="hero-loc-pill">📍 Chennai</span>', '<span class="hero-loc-pill">📍 Chennai</span>')

    # General replacements
    
    # 1. Spans: <span class="cocoon-brand">COCOON</span> -> <span class="cocoon-brand">Cocoon</span>
    content = content.replace('<span class="cocoon-brand">COCOON</span>', '<span class="cocoon-brand">Cocoon</span>')
    
    # 2. Text replacements for variations of "COCOON Learning Centre"
    content = content.replace('The COCOON Learning Centre', 'The Cocoon Learning Centre')
    content = content.replace('THE COCOON Learning Centre', 'The Cocoon Learning Centre')
    content = content.replace('COCOON Learning Centre', 'The Cocoon Learning Centre')
    content = content.replace('THE COCOON LEARNING CENTRE', 'The Cocoon Learning Centre')
    content = content.replace('COCOON LEARNING CENTRE', 'The Cocoon Learning Centre')
    
    # 3. Logo text
    content = content.replace('<span class="lw-top">THE COCOON</span>', '<span class="lw-top">The Cocoon</span>')
    content = content.replace('<span class="ht-outline">THE COCOON</span>', '<span class="ht-outline">The Cocoon</span>')
    
    # 4. Other standalone caps if any
    content = content.replace('The COCOON Logo', 'The Cocoon Logo')
    content = content.replace('COCOON<br><em>LEARNING CENTRE</em>', 'The Cocoon<br><em>Learning Centre</em>')
    content = content.replace('The COCOON difference', 'The Cocoon difference')
    content = content.replace('The COCOON story', 'The Cocoon story')
    content = content.replace('The COCOON Standard', 'The Cocoon Standard')
    content = content.replace('The COCOON Pillars of Promise', 'The Cocoon Pillars of Promise')
    content = content.replace('The COCOON Standards', 'The Cocoon Standards')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updates applied to all HTML files.")
