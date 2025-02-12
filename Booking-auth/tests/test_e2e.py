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
def home_page_button():
    try: 
        home_page = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//div[contains(@class, 'p-1 pt-')]"))
        )

        home_page.click()
    except:
        print("Error With the home_page")

#search component display

def search():
    try: 
        search = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "(//div[@class='border text-card-foreground shadow border-search flex flex-col md rounded-[8px] p-1 bg-search gap-1 search:flex-row font-medium justify-items-stretch'])[1]"))
        )

        print("Search is displayed:", search.is_displayed())

    except:
        print("Search is not display")

#where you going btn click

def where__you_going_btn():
    try: 
        where__you_going_btn = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "(//div[@class='border text-card-foreground shadow border-search flex flex-col md rounded-[8px] p-1 bg-search gap-1 search:flex-row font-medium justify-items-stretch'])[1]"))
        )

        where__you_going_btn.click()
        where__you_going_btn.send_keys("Paris")

    except:
        print("where__you_going_btn is not display")


#Date Order
def date_order():
    try: 
        date_order = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//div[@id='root']//form[contains(@class,'p-2 text-[14px]')]//div[2]"))
        )

        date_order.click()

    except:
        print("date_order is not display")

time.sleep(3)


# date_order = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//div[@id='root']//form[contains(@class,'p-2 text-[14px]')]//div[2]"))
# )

# date_order.click()


# calender = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Calendar']"))
# )

# calender.click()


# adult_button = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//div[@class='flex-grow py-1 px-2 focus:outline-none placeholder:text-black placeholder:font-medium flex flex gap-2']"))
# )

# adult_button.click()


# children_button = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//div[@role='dialog']//div[2]//div[1]//button[2]//*[name()='svg']"))
# )

# children_button.click()


# def test_done_button():
#     try: 
#         done_button = WebDriverWait(driver, 10).until(
#             EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Done']"))
#         )

#         done_button.click()
#     except:
#         print("Error With the button")
# # time.sleep(3)

# def test_click_button():
#     try:
#         search_button = WebDriverWait(driver, 20).until(
#             EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Search']"))
#         )
        
#         search_button.click()
#     except:
#         print("No Button!")
#     time.sleep(3)

# time.sleep(1000)