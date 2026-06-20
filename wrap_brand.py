import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace "The COCOON Learning Centre" in text, but be careful not to break tags
    # A safe way is to replace occurrences outside of tags, or just specifically target common blocks.
    # We will replace "The COCOON" with "The <span class=\"cocoon-brand\">COCOON</span>"
    # But only if it's not already wrapped or inside an attribute.
    
    # We can do some specific replacements:
    content = content.replace('The COCOON Learning Centre', 'The <span class="cocoon-brand">COCOON</span> Learning Centre')
    # Prevent double wrapping
    content = content.replace('<span class="cocoon-brand"><span class="cocoon-brand">COCOON</span></span>', '<span class="cocoon-brand">COCOON</span>')
    content = content.replace('The <span class="cocoon-brand">COCOON</span> Learning Centre Location', 'The COCOON Learning Centre Location') # Fix alt/title tags if accidentally caught
    content = content.replace('title="The <span class="cocoon-brand">COCOON</span>', 'title="The COCOON')
    content = content.replace('alt="The <span class="cocoon-brand">COCOON</span>', 'alt="The COCOON')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print("Brand update complete.")
