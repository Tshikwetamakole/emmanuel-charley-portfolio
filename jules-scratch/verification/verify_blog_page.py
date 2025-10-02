import re
from playwright.sync_api import Page, expect
import time

def test_blog_page_loads_correctly(page: Page):
    """
    This test verifies that the new blog page at /blog renders correctly,
    displaying the main heading and at least one blog post.
    """
    # 1. Arrange: Navigate to the blog page.
    # The dev server runs on port 5173 by default for Vite.
    page.goto("http://localhost:5173/blog")

    # Give the page a moment to load all assets and render.
    time.sleep(3)

    # 2. Screenshot: Capture the initial state for debugging.
    page.screenshot(path="jules-scratch/verification/blog-page-debug.png")

    # 3. Assert: Check for the main heading to ensure the page has loaded.
    heading = page.get_by_role("heading", name="The Blog")
    expect(heading).to_be_visible()

    # 4. Assert: Check that our "Hello World" post is visible.
    post_title = page.get_by_role("heading", name="Hello World: My New Blog")
    expect(post_title).to_be_visible()

    # 5. Assert: Check for the post's excerpt.
    excerpt = page.get_by_text("Welcome to my new blog! Here, I'll be sharing my thoughts on technology, software development, and more.")
    expect(excerpt).to_be_visible()

    # 6. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/blog-page.png")