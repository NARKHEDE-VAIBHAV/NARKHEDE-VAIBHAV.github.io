# 🖥️ Python Input, Print & Data Types  

Understanding **input**, **output**, and **data types** is the first step in learning Python.  

---

## 📝 Printing in Python  

Use the `print()` function to display output:  
```python
print("Hello, World!")
print(10 + 5)
print("Python is fun 🐍")
```

⌨️ Taking Input in Python

Use the input() function to take user input:
```
name = input("Enter your name: ")
print("Hello,", name)
```

🔹 By default, input() returns data as a string.
🔄 Type Conversion

Convert input to other types using int(), float(), str():
```
age = int(input("Enter your age: "))   # Converts input to integer
height = float(input("Enter your height in meters: "))  # Converts input to float

print("You are", age, "years old.")
print("Your height is", height, "meters.")
```


# 📊 Data Types in Python  

Python has several built-in data types:
Data Type	Example	Code

| Data Type        | Example                          | Code Example |
|------------------|----------------------------------|--------------|
| **int (Integer)** | `10, -5, 1000`                   | ```python<br>x = 10<br>print(x)``` |
| **float (Decimal)** | `3.14, -2.5`                   | ```python<br>y = 3.14<br>print(y)``` |
| **str (String)** | `"Hello"`, `'Python'`             | ```python<br>name = "John"<br>print(name)``` |
| **bool (Boolean)** | `True, False`                   | ```python<br>is_valid = True<br>print(is_valid)``` |
| **list**         | `[1, 2, 3]`                      | ```python<br>nums = [1, 2, 3]<br>print(nums)``` |
| **tuple**        | `(4, 5, 6)`                      | ```python<br>coords = (4, 5, 6)<br>print(coords)``` |
| **dict (Dictionary)** | `{"name": "Alice", "age": 25}` | ```python<br>person = {"name": "Alice", "age": 25}<br>print(person)``` |
| **set**          | `{1, 2, 3}`                      | ```python<br>unique_nums = {1, 2, 3}<br>print(unique_nums)``` |


✅ Example Program

# Taking user input
```
name = input("Enter your name: ")
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))
```
# Printing with different data types
```
print("👤 Name:", name)
print("🎂 Age:", age, "(integer)")
print("📏 Height:", height, "(float)")
```
# 🎯 Summary

print() → Displays output.

input() → Takes input (string by default).

Use int(), float(), etc. for type conversion.

Python has multiple data types like int, float, str, bool, list, dict, etc.

