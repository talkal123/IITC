import pytest
from selenium import webdriver

def test_google_title():
    driver = webdriver.Chrome()
    driver.get("https://www.google.com")
    assert driver.title == "Google"