import urllib.request
import re

url = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Blank_US_Map_%28states_only%29.svg'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        svg_content = response.read().decode('utf-8')
        
    svg_content = re.sub(r'fill="[^"]+"', '', svg_content)
    # The map uses style attributes for fill too. Let's remove them or override.
    # Alternatively, just inject a global style
    svg_content = re.sub(r'<svg', '<svg fill="#99d6d1" stroke="#ffffff" stroke-width="0.5"', svg_content, count=1)
    
    path = r'public/us-map.svg'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print('SVG map downloaded and updated successfully to', path)
except Exception as e:
    print('Error:', e)
