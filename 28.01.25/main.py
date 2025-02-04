from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


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




# services = Service(executable_path="./chromedriver.exe")
# options = webdriver.ChromeOptions()
# driver = webdriver.Chrome(options=options, service=services)#,service=services
# driver.get("https://practicetestautomation.com/practice-test-login/")
# driver.maximize_window()


# user_name = driver.find_element(
#     By.XPATH,
#     "(//input[@id='username'])[1]")

# password = driver.find_element(
#     By.XPATH,
#     "(//input[@id='password'])[1]")

# user_name.send_keys('student')
# password.send_keys('Password123')

# button = driver.find_element(
#     By.XPATH,
#     "//button[@id='submit']"
# )

# button.click()

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

# # step 1
# shop_button = driver.find_element(
#     By.XPATH, "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']").click()

# time.sleep(2)

# # step 2
# search_input = driver.find_element(
#     By.ID,
#    "wc-block-search__input-1"
# )

# search_input.send_keys('ATID Black Shoes')

# #step 3

# search_button_store = driver.find_element(
#     By.XPATH , "//button[@aria-label='Search']"
# )

# search_button_store.click()


# # step 4
# shoes_item_title = driver.find_element(
#     By.XPATH, "//h1[normalize-space()='ATID Black Shoes']"
# )
# time.sleep(2)
# print(shoes_item_title.text)






# time.sleep(10)




from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

services = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options, service=services)#,service=services
driver.get("https://atid.store/")
driver.maximize_window()


# step 1
# men = driver.find_element(
#     By.XPATH, "//li[@id='menu-item-266']//a[@class='menu-link'][normalize-space()='Men']"
# )

# if men.is_displayed:
#     print("Men Display")
# else:
#     print("Men Not Display")

# women = driver.find_element(
#     By.XPATH, "//li[@id='menu-item-267']//a[@class='menu-link'][normalize-space()='Women']"
# )

# if women.is_displayed:
#     print("Women Display")
# else:
#     print("Women Not Display")

# accessories = driver.find_element(
#     By.XPATH, "//input[@placeholder='Search …']"
# )

# if accessories.is_displayed:
#     print("Accessories Display")
# else:
#     print("Accessories Not Display")



# # step 2
# shop_button = driver.find_element(
#     By.XPATH, "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']").click()

# time.sleep(2)

# # step 3
# check_nav = driver.find_element(
#     By.XPATH, "//div[@class='ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item']"
# )


# print(check_nav.text)

# # step 4 
# logo_nav = driver.find_element(
#     By.XPATH, "//div[@class='ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item']"
# )

# if logo_nav.is_displayed():
#     print("logo_nav Is Display")
# else:
#     print("logo_nav Is Not Display")


# #step 5

# get_item = driver.find_element(
#     By.XPATH,("//a[@href='https://atid.store/product/atid-black-shoes/']//img[@class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail']")
# )

# get_item.click()

# # step 6
# add_cart = driver.find_element(
#     By.XPATH,("//button[normalize-space()='Add to cart']")
# )

# add_cart.click()

# time.sleep(2)

# # step 7

# description_display = driver.find_element(
#     By.XPATH, "//div[@class='woocommerce-product-details__short-description']//p[contains(text(),'Nam nec tellus a odio tincidunt auctor a ornare od')]"
# )

# if description_display.is_displayed:
#     print("Description Display")
# else:
#     print("Description Not Display")


# # step 8
# search_bar = driver.find_element(
#     By.XPATH, "//a[@aria-label='Search icon link']"
# )

# search_bar.click()
# time.sleep(2)

# # step 9

# search_bar_display = driver.find_element(
#     By.XPATH, "//input[@placeholder='Search …']"
# )

# if search_bar_display.is_displayed:
#     print("Search Bar Display")
# else:
#     print("Search Bar Not Display")


#  # step 10
# search_input_text = driver.find_element(
#     By.XPATH,
#    "//input[@placeholder='Search …']"
# )

# search_input_text.send_keys('shirt')

# time.sleep(1)


# step 11
shop_now_button = driver.find_element(
    By.XPATH, "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']"
)

shop_now_button.click()

time.sleep(2)

# search_button_click = driver.find_element(
#     By.XPATH, "//a[@aria-label='Search icon link']"
# ).click()

# time.sleep(2)

# search_button_input = driver.find_element(
#     By.XPATH, "//input[@placeholder='Search …']"
# )


# search_button_input.click()
# search_button_input.send_keys("ATID Black Shoes") 

# time.sleep(2)

# search_button_click = driver.find_element(
#     By.XPATH, "//a[@aria-label='Search icon link']"
# ).click()


# add_cart = WebDriverWait(driver, 10).until(
#     EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Add to cart']"))
# )
# add_cart.click()

# time.sleep(2)

item_image = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//a[@href='https://atid.store/product/anchor-bracelet/']//img[@class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail']"))
)

item_image.click()

add_cart = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Add to cart']"))
)
add_cart.click()

time.sleep(2)



cart = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "(//span[normalize-space()='1'])[1]"))
).text

print(cart)


cart_click = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='1']"))
) 

cart_click.click()

minus_cart = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//a[normalize-space()='×']"))
) 

minus_cart.click()

time.sleep(2)




time.sleep(2)