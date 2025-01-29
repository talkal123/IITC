# squares = [x**2 for x in range(1, 11)]
# print(squares)



# def is_even(number):
#     return number % 2 == 0

# print(is_even(4))

# def area_of_rectangle(length, width):
#     return length * width

# print(area_of_rectangle(5, 10))


# num = 1

# factorial = 1

# for i in range(1, num + 1):
#     factorial *= i

# print(f"The factorial of {num} is {factorial}")




# price = 150
# discount = 10

# discount_amount = (price * discount)

# final_price = price - discount_amount

# print(f"The price after a {discount}% discount is: ${final_price}")




# myTuple = ("John", "Peter", "Vicky")

# x = " ".join(myTuple)

# print("Hello " + x)


# def greet_all(*args):
#     return "Hello " + ", ".join(args)

# print(greet_all("John", "Peter", "Vicky"))


# def my_function(**kwargs):
#   print("His last name is " + kwargs["fname"] +" " + kwargs["lname"])

# my_function(fname = "Tobias", lname = "Refsnes")

# print((lambda a ,b: a + b )(5,7))


# numbers = [1,2,3,4,5,6,7,8,9]

# even_numbers = list(filter(lambda x: x%2 == 0,numbers))

# print(even_numbers)


# x = 1
# y = 2
# z = 3

# y, z , x = x, y , z


# print(x , y , z )

# try:
#     f = open("demofile.txt", "r")

#     print(f.read())

#     10 / 0
# except FileNotFoundError:
#     print("File not found")
# except ZeroDivisionError:
#     print("ASdfadsf")
# finally: 
#     print("execution done")


# import os



# f = open("files.txt", "r")

# x = (f.read())

# y = x[1:-1].split(", ")

# for file_name in y:
#     if os.path.exists(file_name):
#         print(f"{file_name} exists.")
#     else:
#         print(f"{file_name} does not exist.")

# import json

# def greet_all(*args):
#     return "Hello " + " and ".join(args)

# val1 = input("Enter a name: ")
# val2 = input("Enter a email: ")


# print(greet_all(val1,val2))





# Home Work


# def calculate_sum(arr):
#     return sum(arr)

# arr = [1,2,3,4,5]

# x = calculate_sum(arr)

# print(x)



# def func(x):
#     if x == 1:
#         return 1
#     else:
#         return x * func(x - 1)

# print(func(2))


# def isPalindrom(s):
#     return s == s[::-1]


# s = "malayalam"
# ans = isPalindrom(s)

# if ans:
#     print("yes")
# else:
#     print("no")


# numbers = [1, 2, 3, 4]
# doubled = list(map(lambda x: x * 2, numbers))
# print(doubled)



# def largest_number(a, b, c):
#     return max(a, b, c)
# print(largest_number(5,7,9))


def my_function(*args):
   return sum(args)
print(my_function(7,7))