import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_input_fields(driver):
    driver.get("http://127.0.0.1:5500/index.html")

    # מחפשים את שני האינפוטים באמצעות XPath
    input1 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='username']"))
    )
    input2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='password']"))
    )

    input1.send_keys("testuser")
    input2.send_keys("password123")

    submit_button = driver.find_element(By.XPATH, "//button[@id='loginBtn']")
    submit_button.click()

    time.sleep(2)

    alert = WebDriverWait(driver, 10).until(EC.alert_is_present())  # מחכים שה-alert יופיע
    alert.accept()  

    time.sleep(5)
