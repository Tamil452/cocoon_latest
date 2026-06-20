import os
import glob
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('Chennai, Chennai &amp; Kuthalam', 'Chennai &amp; Kuthalam')
    content = content.replace('Chennai, Chennai & Kuthalam', 'Chennai & Kuthalam')
    content = content.replace('Chennai, Chennai and Kuthalam', 'Chennai and Kuthalam')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print("Fix complete.")
