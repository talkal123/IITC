from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import logging

logging.basicConfig(level=logging.INFO)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://localhost:5173")

# now_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
# driver.save_screenshot(f"./screenshots/page_full_screen_{now_time}.png")

# Assert page title
logging.info("Checking the page title...")
assert "Vite + React" in driver.title, "The title doesn't match the expected value"
logging.info("The page title is correct! ✅")


#header
header = driver.find_element(By.XPATH, "//div[@class='MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1ygil4i-MuiToolbar-root']")
assert header.is_displayed(), "The element header is not displayed"


#title
h1 = driver.find_element(By.XPATH, "//h6[normalize-space()='MyEcommerce']")
assert h1.is_displayed(), "The element 'MyEcommerce' is not displayed"

#search
search = driver.find_element(By.XPATH, "//input[@id=':r1:']")
assert search.is_displayed(), "The element 'MyEcommerce' is not displayed"

search.send_keys("Hello")

#check box
try:
    logging.info("check dark button")
    DarkButton = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@type='checkbox']"))
        ).click()
    logging.info("Succses in dark mode")
except ArithmeticError as e:
    logging.error("failed to click darkmode")


#cart button
try:
    logging.info("cart button")
    cart_button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Cart']"))
        ).click()
    logging.info("Succses in cart button")
except ArithmeticError as e:
    logging.error("failed to click cart button")


time.sleep(10)



# try:
#     logging.info("Checking the button...")
#     mail_input = WebDriverWait(driver, 3).until(
#         EC.presence_of_element_located((By.XPATH, "//input[@id=':r3:']"))
#     )
#     mail_input.screenshot("./test.png")
    
#     assert mail_input.is_displayed(), "The Button disn't displayed"
#     logging.info("The button is displayed! ✅")
# except AssertionError as e:
#     logging.error("Button NOT FOUND!🆘")
# except TimeoutException:
#     logging.error("Button NOT FOUND!🆘")

# Assert a button is displayed
# button = driver.find_element("id", "submit-btn")
# assert button.is_displayed()

# logging.info("Done Automation Test... ✅")