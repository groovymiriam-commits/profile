# File Watching & Hot Reload Guide

## Problem: Changes to markdown files aren't showing up

### Solution Overview

The issue has been fixed by enabling **file polling** in the Astro config. This ensures that file changes are detected consistently across all systems.

## What Changed

**File: `astro.config.mjs`**

Added Vite watch configuration:
```javascript
vite: {
  server: {
    watch: {
      usePolling: true,  // Always use polling
      interval: 100,     // Check every 100ms
    },
  },
}
```

This configuration:
- ✅ Uses polling instead of native file watchers
- ✅ Checks for file changes every 100 milliseconds
- ✅ Works reliably across macOS, Windows, and Linux
- ✅ Ensures markdown file changes are detected immediately

## How to Edit Posts

### Location
All posts are in: `src/pages/posts/`

### Frontmatter (Top of each file)
```markdown
---
layout: ../../layouts/PostLayout.astro    # DO NOT CHANGE
title: Your post title                    # Shows in blog list & page
category: Thoughts                        # Category badge
publishedAt: May 2026                     # Display date
date: 2026-05-15                          # ISO format (YYYY-MM-DD)
description: Short summary                # Shown in previews
---

Your markdown content starts here...
```

### Editing Workflow

1. **Open** the post file in VS Code
2. **Edit** the content or frontmatter
3. **Save** (Cmd+S or Ctrl+S)
4. **Wait** 1-2 seconds for hot reload
5. **Check** your browser - it should update automatically!

### If Changes Don't Show

1. **Refresh** the browser (Cmd+R or Ctrl+R)
2. **Or restart** the dev server:
   ```bash
   # Stop: Press Ctrl+C in terminal
   # Start: npm run dev
   ```

## File Watching Features

### Active Monitoring
- ✅ Markdown files in `src/pages/posts/`
- ✅ Component files in `src/components/`
- ✅ Layout files in `src/layouts/`
- ✅ Style files in `src/styles/`
- ✅ Config files like `src/config/`

### Hot Reload
- ✅ Changes apply automatically (usually within 1-2 seconds)
- ✅ Page refreshes without losing scroll position
- ✅ State is preserved when possible

## Tips for Best Results

### Do's ✅
- Save frequently (Cmd+S)
- Keep the dev server running
- Use VS Code for editing
- Wait 1-2 seconds after saving
- Refresh browser if needed

### Don'ts ❌
- Don't edit filenames (just content)
- Don't close the dev server terminal
- Don't edit the layout path
- Don't remove frontmatter sections

## Common Issues & Fixes

### "Changes aren't showing up"
```bash
# Restart the dev server
npm run dev
# Then refresh browser (Cmd+R)
```

### "File appears locked or won't save"
```bash
# Close VS Code
# Restart dev server
# Reopen VS Code
npm run dev
```

### "Frontmatter is broken"
Make sure it looks like this:
```markdown
---
layout: ../../layouts/PostLayout.astro
title: Your Title
category: Category
publishedAt: Month Year
date: YYYY-MM-DD
description: Summary
---
```

## Dev Server Info

- **Running at:** http://localhost:4321/
- **Blog page:** http://localhost:4321/blog/
- **Post pages:** http://localhost:4321/posts/[post-name]/

## Need to Debug?

Check the terminal where `npm run dev` is running for any error messages.

Example error output:
```
[ERR] The value of a required option in the data must be a string
```

This usually means frontmatter is malformed. Check for missing quotes or colons.

---

**All set!** Your file watching should now work smoothly. 🎉
