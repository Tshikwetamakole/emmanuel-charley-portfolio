from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # 1. Go to the homepage and verify blog preview
    page.goto("http://localhost:5173")
    blog_preview_section = page.locator("#blog-preview")
    blog_preview_section.scroll_into_view_if_needed()

    # Wait for the post to be visible before taking the screenshot
    first_post = blog_preview_section.get_by_role("heading", name="Hello World: My New Blog")
    expect(first_post).to_be_visible()

    blog_preview_section.screenshot(path="jules-scratch/verification/01_homepage_blog_preview.png")

    # 2. Go to the blog page and verify it
    view_all_posts_link = page.get_by_role("link", name="View All Posts")
    view_all_posts_link.click()
    expect(page).to_have_url("http://localhost:5173/blog")
    blog_page_heading = page.get_by_role("heading", name="The Blog")
    expect(blog_page_heading).to_be_visible()
    page.screenshot(path="jules-scratch/verification/02_blog_page.png")

    # 3. Go to the single post page and verify it
    hello_world_link = page.get_by_role("link", name="Hello World: My New Blog")
    hello_world_link.click()
    expect(page).to_have_url("http://localhost:5173/posts/hello-world")
    post_heading = page.get_by_role("heading", name="Hello World: My New Blog")
    expect(post_heading).to_be_visible()
    page.screenshot(path="jules-scratch/verification/03_single_post_page.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)