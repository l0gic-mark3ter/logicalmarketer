from PIL import Image, ImageDraw
from pathlib import Path
src=Path(r'C:/Users/DT User/Desktop/Logicalmarketer new/Get more local customers for your business! - Logical Marketer - other_files')
out=Path('website/assets/images');out.mkdir(exist_ok=True)
files={'logo':'Logical-Marketer-Logo-white-v3-1024x184_3GEi.png','amir':'me-620w_3GEi.jpg','calls-132':'gbp-calls-1_3GEi.jpg','calls-108':'gbp-calls-6_3GEi.jpg','calls-91':'calls-gmb-1024w-3_3GEi.jpg','calls-312':'calls-gmb-1024w-2_3GEi.jpg','google-search':'screenshot-mobile-420w_3GEi.jpg'}
for name,filename in files.items():
 im=Image.open(src/filename);im.thumbnail((1024,1100));im.save(out/(name+'.webp'),'WEBP',quality=85,method=6);print(name,im.size,(out/(name+'.webp')).stat().st_size)
# Remove the whole name and phone section, preserving only the question and inquiry.
for num in [6,7,14]:
 im=Image.open(src/(f'lead{num}-768x'+('1087' if num==14 else '1187')+'_3GEi.jpg')).convert('RGB')
 # Original form layout: identification rows occupy the top 61 percent.
 im=im.crop((0,int(im.height*.61),im.width,im.height));im.thumbnail((520,600));im.save(out/f'inquiry-{num}.webp','WEBP',quality=85,method=6)

