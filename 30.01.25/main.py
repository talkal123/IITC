from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC

import time

service = Service()
options = webdriver.ChromeOptions()
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

# 1. Open Browser
# driver.get("http://localhost:5173/dropdowns")

# try:
#     countries_dropdown = Select(driver.find_element(By.XPATH, "//select[@id='country-dropdown']"))
#     countries_dropdown.select_by_visible_text("United States")
# except NoSuchElementException:
#     print("Element not Found!")
    
# 2. Load Wait
# driver.get("http://localhost:5173/delays")

# try:
#     msg = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, "//p[normalize-space()='Dynamic Content Loaded!']"))
#     )
#     print(msg.text)
#     print("Loaded")
    
# except TimeoutException:
#     print("Element not Found! in Time")


#mission.2
#A.
#driver.get("http://localhost:5173/forms")
# user_name_input = driver.find_element(
#     By.XPATH, "//input[@id='username']"
# )

# user_name_input.send_keys("stam")

# user_name_input = driver.find_element(
#     By.XPATH, "//input[@id='username']"
# )

# password_input = driver.find_element(
#     By.XPATH, "//input[@id='password']"
# )

# password_input.send_keys("stam@example.com")


# login_button = driver.find_element(
#     By.XPATH, "//button[normalize-space()='Login']"
# )

# login_button.click()

# time.sleep(5)

#B.
# driver.get("http://localhost:5173/dropdowns")

# try:
#     countries_dropdown = Select(driver.find_element(By.XPATH, "//select[@id='country-dropdown']"))
#     countries_dropdown.select_by_visible_text("United States")
# except NoSuchElementException:
#     print("Element not Found!")

# time.sleep(2)

#C.
# driver.get("http://localhost:5173/checkboxes-radios")

# check_box = driver.find_element(
#     By.XPATH, "//input[@type='checkbox']"
# )
# check_box.click()


# check_box_paragraph = driver.find_element(By.XPATH, "//p[contains(text(),'Checkbox is ')]")
# text = check_box_paragraph.text  

# if "Checkbox is Checked" in text:
#     print("Checkbox state updated successfully!")
# else:
#     print("Error: Checkbox state did not update correctly!")

# time.sleep(2)



driver.get("http://localhost:5173/mini-project")


user_name = driver.find_element(
     By.XPATH, "//input[@placeholder='Enter username']"
 )

user_name.send_keys("baba")


email = driver.find_element(
     By.XPATH, "//input[@placeholder='Enter email']"
 )

email.send_keys("mama@example.com")

countries_dropdown = Select(driver.find_element(By.XPATH, "//select[@name='country']"))
countries_dropdown.select_by_visible_text("United States")
time.sleep(2)

check_box = driver.find_element(
    By.XPATH, "//input[@name='acceptTerms']"
)
check_box.click()


form = driver.find_element(
    By.TAG_NAME, "button"
)

form.submit()

submit_paragraph = driver.find_element(By.XPATH, "//p[1][contains(text(),'Form Submitted: ')]")
text = text = submit_paragraph.text 

if "Form Submitted:" in text:
    print("Form state updated successfully!")
else:
    print("Error: Form state did not update correctly!")
print(submit_paragraph.text)

time.sleep(2)
