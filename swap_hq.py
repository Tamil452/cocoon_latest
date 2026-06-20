import os
import glob

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace Chennai HQ with Chennai Branch
    content = content.replace('Chennai HQ', 'Chennai Branch')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print("Downgraded Chennai HQ to Chennai Branch complete.")
