from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import logging
from selenium.webdriver.common.keys import Keys


logging.basicConfig(level=logging.INFO)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
driver = webdriver.Chrome(service=service, options=options)

# driver.get("https://the-internet.herokuapp.com/javascript_alerts")

# click_js_confirm = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Click for JS Confirm']"))
# )
# assert click_js_confirm.is_displayed(), "The click_js_confirm is not displayed."
# assert click_js_confirm.is_enabled(), "The click_js_confirm is not enabled."
# click_js_confirm.click()

# alert = driver.switch_to.alert

# alert.accept()

driver.get("https://dragonball.fandom.com/wiki/Category:DBZ_Characters")

fut_input = WebDriverWait(driver, 5).until(
    EC.presence_of_element_located((By.XPATH, "//div[@class='search-app search-app__wrapper search-app']//input[@placeholder='Search']"))
)
assert fut_input.is_displayed(), "The fut_input_confirm is not displayed."
assert fut_input.is_enabled(), "The fut_input is not enabled."
fut_input.click()

fut_input.send_keys("vegeta")


search_one = WebDriverWait(driver,5).until(
    EC.presence_of_element_located((By.XPATH, "//a[@class='search-app__suggestion-link'][normalize-space()='Vegeta']"))
)

search_one.click()






time.sleep(10)
