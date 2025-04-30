#!/bin/bash

# Function to update imports in a file
update_imports() {
  local file=$1
  
  # Update all UI component imports to PascalCase
  sed -i '' 's/from "@\/components\/ui\/\([a-z]\)/from "@\/components\/ui\/\u\1/g' "$file"
  
  # Update specific component imports
  sed -i '' 's/from "@\/components\/ui\/button"/from "@\/components\/ui\/Button"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/navigation-menu"/from "@\/components\/ui\/NavigationMenu"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/sheet"/from "@\/components\/ui\/Sheet"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/dropdown-menu"/from "@\/components\/ui\/DropdownMenu"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/animated-hero"/from "@\/components\/ui\/AnimatedHero"/g' "$file"
  sed -i '' 's/from "@\/components\/ui\/progressive-blur"/from "@\/components\/ui\/ProgressiveBlur"/g' "$file"
}

# Find all TypeScript and TSX files and update imports
find . -type f \( -name "*.ts" -o -name "*.tsx" \) -not -path "./node_modules/*" -not -path "./.next/*" | while read -r file; do
  update_imports "$file"
done 