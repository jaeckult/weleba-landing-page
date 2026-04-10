import os

base_dir = '/home/jack/Burbly_Mobile_App/weleba-landing-page/app'

for root, _, files in os.walk(base_dir):
    for file in files:
        if file == 'page.js':
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # If it uses the old GenericFeaturePage template
            if 'GenericFeaturePage()' in content:
                # Replace relative imports with aliases
                content = content.replace("import PMSHero from '../../components", "import PMSHero from '@/app/components")
                content = content.replace("import TabbedFeatures from '../../components", "import TabbedFeatures from '@/app/components")
                content = content.replace("import PMSTransform from '../../components", "import PMSTransform from '@/app/components")
                content = content.replace("import ContentBlock from '../../components", "import ContentBlock from '@/app/components")
                content = content.replace("import Testimonials from '../../components", "import Testimonials from '@/app/components")
                content = content.replace("import LogoSlideshow from '../../components", "import LogoSlideshow from '@/app/components")
                content = content.replace("import { getGenericData } from '../../lib/pageData/genericData'", "import { getGenericData } from '@/app/lib/pageData/genericData'")
                
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Fixed imports in {filepath}")

