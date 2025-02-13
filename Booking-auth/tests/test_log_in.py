# import pytest
# import time
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager


# # Fixture for setting up the WebDriver
# @pytest.fixture(scope="module")
# def driver():
#     # Set up the Chrome WebDriver with options
#     options = webdriver.ChromeOptions()
#     options.add_argument("--window-size=1920,1080")
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     driver.maximize_window()
#     driver.get("http://localhost:5173")
#     # Yield the driver to be used in tests
#     yield driver
    
#     # Clean up and close the driver after tests are done
#     driver.quit()

# def test_load(driver):
    

#  time.sleep(10)