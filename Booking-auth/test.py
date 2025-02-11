from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("http://localhost:5173/")
driver.maximize_window()


#home page display
home_page = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'p-1 pt-')]"))
)

print("Home page is displayed:", home_page.is_displayed())

#search component display
search = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "(//div[@class='border text-card-foreground shadow border-search flex flex-col md rounded-[8px] p-1 bg-search gap-1 search:flex-row font-medium justify-items-stretch'])[1]"))
)

print("Search is displayed:", search.is_displayed())

#search component display
search = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "(//div[@class='border text-card-foreground shadow border-search flex flex-col md rounded-[8px] p-1 bg-search gap-1 search:flex-row font-medium justify-items-stretch'])[1]"))
)

print("Search is displayed:", search.is_displayed())

#where you going btn click
where__you_going_btn = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//input[@placeholder='Where are you going?']"))
)

where__you_going_btn.click()
where__you_going_btn.send_keys("Paris")


#Date Order
date_order = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//div[@id='root']//form[contains(@class,'p-2 text-[14px]')]//div[2]"))
)

date_order.click()


calender = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Calendar']"))
)

calender.click()


adult_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//div[@class='flex-grow py-1 px-2 focus:outline-none placeholder:text-black placeholder:font-medium flex flex gap-2']"))
)

adult_button.click()


children_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//div[@role='dialog']//div[2]//div[1]//button[2]//*[name()='svg']"))
)

children_button.click()


done_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Done']"))
)

done_button.click()


# search_button = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Search']"))
# )

# search_button.click()


time.sleep(10)