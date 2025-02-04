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

im_flexible_btn = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//div[@role='dialog']//button[2]"))
)

im_flexible_btn.click()


weekend_btn = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//*[name()='circle' and contains(@cx,'12')]"))
)

weekend_btn.click()

month_btn = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//div[@class='rounded-xl border shadow-none cursor-pointer border-primary text-[#006ce4] bg-[#f2f6fe] hover:bg-[#f2f6fe]']//div[@class='p-6 py-[15px] flex gap-1 flex-col items-center justify-center h-full rounded-md']"))
)

month_btn.click()




# date_order_two = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[7]/button[1]"))
# )

# date_order_two.click()


time.sleep(10)