#!/bin/bash

# Update imports in all TypeScript and TSX files
find . -type f -name "*.tsx" -o -name "*.ts" | while read -r file; do
  # Skip node_modules and .next directories
  if [[ $file == *"node_modules"* ]] || [[ $file == *".next"* ]]; then
    continue
  fi
  
  # Update imports to use PascalCase
  sed -i '' 's/from "@\/components\/ui\/button"/from "@\/components\/ui\/Button"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/input"/from "@\/components\/ui\/Input"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/label"/from "@\/components\/ui\/Label"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/switch"/from "@\/components\/ui\/Switch"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/tooltip"/from "@\/components\/ui\/Tooltip"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/sheet"/from "@\/components\/ui\/Sheet"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/accordion"/from "@\/components\/ui\/Accordion"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/tabs"/from "@\/components\/ui\/Tabs"/g' "$file"
done 