---
description: how to create a new blog post
---

1. **Create a Markdown File**: In the `/posts` directory, create a new file ending in `.md` (e.g., `my-new-post.md`).

2. **Add Frontmatter**: Every post **MUST** start with a block of "frontmatter" between two sets of triple dashes (`---`). This block defines the metadata used for the blog feed.

   **Template:**
   ```markdown
   ---
   title: "Your Catchy Title"
   date: "YYYY-MM-DD"
   author: "Your Name"
   category: "Hotel Technology"
   image: "/blog/image.png"
   excerpt: "A short 2-sentence summary that appears on the feed page."
   readTime: "5 min read"
   ---
   ```

3. **Write the Content**: Below the second `---`, write your post content using standard Markdown (headings, bold text, lists, etc.).

4. **Save and Refresh**: Once you save the file, the `/blog` page will automatically detect it and create a new card, and the `/blog/[slug]` page will be available.

---
**Required Fields**:
- `title`: The big heading on the card.
- `date`: Sorting is based on this (use YYYY-MM-DD format).
- `image`: Relative path to the image in the `/public` folder.
- `excerpt`: The summary text on the card.
- `category`: Used for filtering.
