# from tkinter import Tk, Label, Button
# import Bank from Bank.py
# root = Tk()

# Label(root, text="Welcome!"),pack()
# Button(root, text="Click Me", command=lambda: print("Hello")).pack()

# root.mainloop()


# from tkinter import *
# root = Tk()
# w = Label(root, text='GeeksForGeeks.org!')
# w.pack()
# root.mainloop()


# import tkinter as tk

# r = tk.Tk()
# r.title('Counting Seconds')
# button = tk.Button(r, text='Stop', width=25, command=r.destroy)
# button.pack()
# r.mainloop()



#Label

# from tkinter import *

# master = Tk()
# Label(master, text='First Name').grid(row=0)
# Label(master, text='Last Name').grid(row=1)
# e1 = Entry(master) 
# e2 = Entry(master)
# e2.grid(row=1, column=1)
# mainloop()



#checkButton

# from tkinter import *

# master = Tk()
# var1 = IntVar()
# Checkbutton(master, text='male', variable=var1).grid(row=0,sticky=W)
# var2 = IntVar()
# Checkbutton(master, text='female', variable=var2).grid(row=1, sticky=W)
# var3 = IntVar()
# Checkbutton(master, text='other', variable=var3).grid(row=2, sticky=W)
# mainloop()






# scroll

# from tkinter import *

# root = Tk()
# scrollbar = Scrollbar(root)
# scrollbar.pack(side=RIGHT, fill=Y)
# mylist = Listbox(root, yscrollcommand=scrollbar.set)

# for line in range(100):
#     mylist.insert(END, 'This is line number' + str(line))
    
# mylist.pack(side=LEFT, fill=BOTH)
# scrollbar.config(command=mylist.yview)
# mainloop()



# menu

# from tkinter import *

# root = Tk()
# menu = Menu(root)
# root.config(menu=menu)
# filemenu = Menu(menu)
# menu.add_cascade(label='File', menu=filemenu)
# filemenu.add_command(label='New')
# filemenu.add_command(label='Open...')
# filemenu.add_separator()
# filemenu.add_command(label='Exit', command=root.quit)
# helpmenu = Menu(menu)
# menu.add_cascade(label='Help', menu=helpmenu)
# helpmenu.add_command(label='About')
# mainloop()



#Label

from tkinter import *
import tkinter as tk

master = Tk()
Label1 = Label(master, text='First Name').grid(row=0)
Label(master, text='Last Name').grid(row=1)
Label(master, text='Balance').grid(row=2)

print(Label1)

e1 = Entry(master) 
e2 = Entry(master)
e3 = Entry(master)

e1.grid(row=0, column=1)
e2.grid(row=1, column=1)
e3.grid(row=2, column=1)

button = tk.Button(master, text='Stop', width=5,height=1, command=master.quit)
button.grid(row=3, column=1)
master.mainloop()


# def saveUser():
    
    
    

