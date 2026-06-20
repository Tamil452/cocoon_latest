import os
import glob

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for locations and naming
    content = content.replace('Coimbatore &amp; Kuthalam', 'Chennai &amp; Kuthalam')
    content = content.replace('Coimbatore & Kuthalam', 'Chennai & Kuthalam')
    content = content.replace('Chennai, Coimbatore &amp; Kuthalam', 'Chennai &amp; Kuthalam')
    content = content.replace('Coimbatore and Kuthalam', 'Chennai and Kuthalam')
    content = content.replace('Coimbatore HQ', 'Kuthalam HQ')
    content = content.replace('Coimbatore', 'Chennai')
    content = content.replace('Training Academy', 'Learning Centre')
    content = content.replace('TRAINING ACADEMY', 'LEARNING CENTRE')
    
    # Capitalize COCOON
    content = content.replace('The Cocoon', 'The COCOON')
    content = content.replace('Cocoon Learning Centre', 'COCOON Learning Centre')
    content = content.replace('Cocoon Academy', 'COCOON Learning Centre')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print("Replacement complete.")
