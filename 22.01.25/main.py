# cars = ["Ford", "Volvo", "BMW"]

# cars.append("Honda")
# cars.pop(0)
# cars.remove("BMW")

# print(cars)


# my_name = ("17", "30", "2000")
# my_name.append("2001")
# my_name.pop(0)
# print(my_name)


# tal = {
#  'name': 'Tal',
#  'lName': 'Kal',
#  'age': "24",
#  'mail': "tal@222"
# }

# thistuple = ("apple", "banana", "cherry")
# tal["thistuple"] = thistuple
# del tal["lName"]

# print(tal)


# colors = ["red","blue","green","yellow",]

# print(colors[0], colors[4])
# colors.append("orange")
# print(colors)


# numbers = [1,2,3,4,5,6,7,8,9,10]
# numbers2 = [x for x in numbers if x % 2 == 0]

# print(numbers2)


# colors = ["red","blue","green","yellow"]

# colors.reverse()

# print(colors)


# numbers = [5,3,5,7,5]

# x = numbers.count(5)

# print(x)


# list1 = [1,2]
# list2 = [3,4]

# list3 = list1 + list2
# print(list3)

# numbers = [4, 2, 8, 1]

# numbers.sort()
# print(numbers)






# colors = ("red","blue","green","yellow")

# print(colors[1])
# colors.pop[0]
# print[colors]
# colors = ("red","blue","green","yellow")

# t = list(colors)
# print('colors:' , t)

# students = {"name":"tal","model": "Mustang","year": 1964}

# print(students["name"])


# students = {"name":"tal","model": "Mustang","year": 1964}

# students["Favorite Color"] = "red"
# print(students)

# students = {"name":"tal","model": "Mustang","year": 1964}

# students.pop("model")
# print(students)

# students = {"name":"tal","model": "Mustang","year": 1964}
# students.update({"Year": 2024})
# print(students)


# d1 = {'x': 1, 'y': 2}
# d2 = {'y': 3, 'z': 4}

# d1.update(d2)
# print(d1)






# s1 = ['hello','world','python']

# s2 = [s.upper() for s in s1]

# print(s2)

# arr = {'item' : "cola", "price" : 5}

# x = arr.items()
# for key, value in x:
#     print(f"the key is {key}")
# print(x)


# myset  = {"apple", "banana", "cherry"}

# myset.add("orange")

# print(myset)

# myset  = {"apple", "banana", "cherry"}

# myset.remove("banana")

# print(myset)



# x = {"apple", "banana", "cherry"}
# y = {"google", "microsoft", "apple"}

# z = x.union(y)
# print(z)



# x = {"apple", "banana", "cherry"}
# y = {"google", "microsoft", "apple"}

# z = x.intersection(y)
# print(z)


# s = ["apple", "banana", "cherry"]

# count = len(s)

# print(count)


# data = [('sravan', 23), ('ojaswi', 15),
#         ('rohith', 8), ('gnanesh', 4), ('bobby', 20)]

# new = [age for _, age in data if age > 20]
# print(new)

# print("hello world")


# print("What is your name?")
# x = input()
# print('Hello, ' + x)



# print("What is your numbers?")

# x = int(input())  
# y = int(input())

# print("The sum is:", x + y)
# print("The difference is:", x - y)

# import math

# print("What is your numbers?")

# x = int(input())  
# y = int(input())

# print("The sum is:", math.sqrt(x + y))


# print("What is your numbers?")

# x = int(input())  
# y = int(input())

# if x + y % 2 == 0:
#     print("The sum is divisible by 2")
# else:
#     print("The sum is not divisible by 2")



# print("What is your numbers?")

# x = int(input())  

# if (x == 'a' or x == 'e' or
#         x == 'i' or x == 'o' or x == 'u'):
#         print("Vowel")
# else:
#     print("Consonant")



# print("What is your numbers?")

# x = int(input())  

# if (x > 0 ):
#         print("positive")
# if (x == 0 ):
#         print("zero")
# if (x < 0 ):
#     print("negative")


print("What is your numbers?")

x = int(input())  

if (x % 4 == 0 and x % 100 != 0) or (x % 400 == 0):
        print("yes")

else: 
        print("no")
