import os
import glob

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The current Kuthalam HQ string in footers and map strip is "Mayiladuthurai District, Tamil Nadu"
    # Or "Mayiladuthurai District" 
    # Let's replace the common footer ones
    content = content.replace('<li>Mayiladuthurai District, Tamil Nadu</li>', '<li>No. 19, Nadu Chetty Street, Kuthalam - 609801<br>Mayiladuthurai District</li>')
    content = content.replace('Kuthalam HQ: Mayiladuthurai District, Tamil Nadu', 'Kuthalam HQ: No. 19, Nadu Chetty Street, Kuthalam - 609801, Mayiladuthurai District')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('*.html'):
    process_file(f)

print("Kuthalam address update complete.")
