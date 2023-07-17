import sys
from splinter import Browser

def test_upload_image(url):
    with Browser() as browser:
        # Visit URL
        browser.visit(url)

        # Find and click the 'Choose an image' button
        button = browser.find_by_text('Choose an image...')
        button.click()

        # Interact with the file upload control
        browser.attach_file('input[type="file"]', '/path/to/your/image.jpg')

        # Check if the success message is present
        assert browser.is_text_present('Your image has been uploaded successfully!', wait_time=10)

if __name__ == "__main__":
    test_upload_image(sys.argv[1])
