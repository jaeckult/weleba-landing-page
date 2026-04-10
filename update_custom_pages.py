import os

pages_to_update = {
    'app/features/study-path/page.js': 'studyPathData',
    'app/features/challenges/page.js': 'challengesData',
    'app/goals/exams/page.js': 'examsData',
    'app/use-cases/professionals/page.js': 'professionalsData',
    'app/use-cases/students/page.js': 'studentsData',
    'app/goals/self-learning/page.js': 'selfLearnerData',
    'app/goals/educators/page.js': 'educatorsData'
}

base_dir = '/home/jack/Burbly_Mobile_App/weleba-landing-page/'

for rel_path, data_file in pages_to_update.items():
    filepath = os.path.join(base_dir, rel_path)
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        
        # Replace the generic import
        content = content.replace(
            "import { getGenericData } from '@/app/lib/pageData/genericData';",
            f"import {{ heroContent, transformContent, tabbedContent, alternatingContent }} from '@/app/lib/pageData/{data_file}';"
        )
        
        # Replace the GenericData instatiation row
        import re
        content = re.sub(r'const data = getGenericData\([^\)]+\);\n\s*', '', content)
        
        # Replace data prefix
        content = content.replace("data.heroContent", "heroContent")
        content = content.replace("data.transformContent", "transformContent")
        content = content.replace("data.tabbedContent", "tabbedContent")
        content = content.replace("data.alternatingContent", "alternatingContent")
        
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {rel_path} to use {data_file}")
    else:
        print(f"Warning: {rel_path} does not exist")
