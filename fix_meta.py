import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to fix spans inside <title> tags
    content = re.sub(r'<title>(.*?)<span class="cocoon-brand">COCOON</span>(.*?)</title>', r'<title>\1COCOON\2</title>', content)
    
    # Regex to fix spans inside <meta> tags
    # E.g. content="... <span class="cocoon-brand">COCOON</span> ..."
    # This might be tricky, let's just do a blanket replace inside meta tags.
    # Actually, meta tag lines start with <meta
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '<meta' in line or '<title>' in line:
            lines[i] = line.replace('<span class="cocoon-brand">COCOON</span>', 'COCOON')

    content = '\n'.join(lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print("Meta fix complete.")
