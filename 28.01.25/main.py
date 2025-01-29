from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time


# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# import time 

# service = Service(executable_path ='./chromedriver')
# options = webdriver.ChromeOptions()
# driver = webdriver.Chrome()

# driver.get("http://www.google.com")

# print(driver.title)


# time.sleep(10)




# from selenium import webdriver

# driver = webdriver.Chrome()
# driver.get("http://www.google.com")
# print(driver.title)
# driver.quit()


# from selenium import webdriver
# import time

# driver = webdriver.Chrome()
# driver.get("https://www.python.org/")
# print(driver.current_url)
# driver.maximize_window()

# time.sleep(10)

# from selenium import webdriver
# import time

# driver = webdriver.Chrome()
# driver.get("https://www.python.org/")
# driver.get("http://www.google.com")
# driver.back()
# time.sleep(2)
# driver.forward()
# time.sleep(2)
# driver.refresh()
# driver.quit()

# time.sleep(10)



# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.by import By
# import time

# services = Service(executable_path="./chromedriver.exe")
# options = webdriver.ChromeOptions()
# driver = webdriver.Chrome(options=options, service=services)#,service=services
# driver.get("https://atid.store/")
# driver.maximize_window()

# # find a button
# shop_button = driver.find_element(
#     By.XPATH,
#     "//a[@href='https://atid.store/store/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']"
# )

# shop_button.click()
# time.sleep(10)




services = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options, service=services)#,service=services
driver.get("https://practicetestautomation.com/practice-test-login/")
driver.maximize_window()


user_name = driver.find_element(
    By.XPATH,
    "(//input[@id='username'])[1]")

password = driver.find_element(
    By.XPATH,
    "(//input[@id='password'])[1]")

user_name.send_keys('student')
password.send_keys('Password123')

button = driver.find_element(
    By.XPATH,
    "//button[@id='submit']"
)

button.click()

time.sleep(10)



