# class Person:
#         def __init__(self,first_name,last_name):
#             self.first_name = first_name
#             self.last_name = last_name


#         def greet(self):
#             print(f"{self.first_name} says hello")

# person1 = Person(last_name = "Fitoussi", first_name = "Liron")


# person1.greet()



# class Superhero:
#     def __init__(self, first_name, last_name, alias, power, strength_level, team, is_active, villain_name):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.alias = alias
#         self.power = power
#         self.strength_level = strength_level
#         self.team = team
#         self.is_active = is_active
#         self.villain_name = villain_name

#     def greet(self):
#         # הצגת הגיבור
#         print(f"I am {self.alias}, also known as {self.first_name}. My power is {self.power}, and I fight for {self.team}!")
#         print(f"{self.alias} is fighting {self.villain_name}!")

#     def train(self, hours):
#         # כל שעה של אימון מגבירה את strength_level ב-10
#         self.strength_level += hours * 10
#         # הדפסת רמת החוזק המעודכנת
#         print(f"{self.alias} has trained for {hours} hours. New strength level: {self.strength_level}")
    
#     def fight_villain(self):
#         # הודעה על הקרב
#         print(f"{self.alias} is fighting {self.villain_name}!")
#         # הורדת 5 מה-strength_level
#         self.strength_level -= 5
#         print(f"{self.alias}'s strength level is now {self.strength_level}")
        
#         # אם strength_level נמוך מ-10, הגיבור פורש
#         if self.strength_level < 10:
#             self.is_active = False
#             print(f"{self.alias} is no longer active. They have retired from hero duties.")
    
#     def reactivate(self):
#         self.is_active = True
#         print(f"{self.alias} is back in action! ")

# # יצירת אובייקט של הגיבור
# hero = Superhero(last_name="Fitoussi", first_name="Liron", alias="Lala", power="fly", strength_level=50, team="Red Team", is_active=True, villain_name="Venom")

# # הצגת הגיבור
# hero.greet()

# # אימון הגיבור למשך 3 שעות
# hero.train(3)

# # קרב עם הנבל
# hero.fight_villain()

# hero.reactivate()

# class Bank_Account:
#     def __init__(self):
#         self.balance=0
#         print("Hello!!! Welcome to the Deposit & Withdrawal Machine")
 
#     def deposit(self):
#         amount = float(input("Enter amount to be Deposited: "))
#         self.balance += amount
#         print("\n Amount Deposited:",amount)
 
#     def withdraw(self):
#         amount = float(input("Enter amount to be Withdrawn: "))
#         if self.balance>=amount:
#             self.balance-=amount
#             print("\n You Withdrew:", amount)
#         else:
#             print("\n Insufficient balance  ")
 
#     def display(self):
#         print("\n Net Available Balance=",self.balance)
 
  
# s = Bank_Account()
  
# s.deposit()
# s.withdraw()
# s.display()

class User:
    def __init__(self,name,balance):
        self.name = name
        self.balance = balance

    def greet(self):
        return f"Hello, {self.name}! your balance is {self.balance}."
user = User("Alice", 100)
print(user.greet())
