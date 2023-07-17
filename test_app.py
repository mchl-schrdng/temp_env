import pytest
from playwright.sync_api import Page

@pytest.mark.asyncio
async def test_image_upload(page: Page):
    # Go to the deployed app's URL
    await page.goto('http://localhost:8501')  # Make sure to update this to the URL of your app

    # Get the upload button element
    upload_button = await page.query_selector("input[type='file']")

    # Upload the file
    await upload_button.set_input_files("/path/to/test/image.jpg")  # Make sure to update this to the path of a test image file

    # Wait for the file to be uploaded and success message to be displayed
    await page.wait_for_selector(".stAlert")

    # Check if the success message is displayed
    success_message = await page.query_selector(".stAlert")
    assert success_message is not None
