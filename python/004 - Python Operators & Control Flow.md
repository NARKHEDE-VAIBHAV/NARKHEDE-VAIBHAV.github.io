# ⚡ Python Operators & Control Flow

Understanding operators and control flow is key to making Python programs **dynamic and logical**.

---

## 🧮 Python Operators

### Arithmetic Operators
Perform math operations:

```python
a = 10
b = 3

print(a + b)  # Addition → 13
print(a - b)  # Subtraction → 7
print(a * b)  # Multiplication → 30
print(a / b)  # Division → 3.333...
print(a // b) # Floor Division → 3
print(a % b)  # Modulus → 1
print(a ** b) # Exponent → 1000
```


### Comparison Operators

Compare values (returns True or False):
```python
x = 5
y = 10

print(x == y)  # Equal → False
print(x != y)  # Not equal → True
print(x > y)   # Greater → False
print(x < y)   # Less → True
print(x >= y)  # Greater or equal → False
print(x <= y)  # Less or equal → True
```

### Logical Operators

Combine boolean expressions:

```python
a = True
b = False

print(a and b)  # AND → False
print(a or b)   # OR → True
print(not a)    # NOT → False
```
### Assignment Operators

Shorthand for updating values:
```python
x = 10
x += 5  # x = x + 5 → 15
x -= 2  # x = x - 2 → 13
x *= 2  # x = x * 2 → 26
x /= 3  # x = x / 3 → 8.666...
x %= 5  # x = x % 5 → 3.666...
```

## 🔄 Control Flow in Python
Conditional Statements

Make decisions in code:
```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
```


### Loops
For Loop

Repeat a block for a known number of times:
```python
for i in range(5):
    print("Count:", i)
```

### While Loop

Repeat while a condition is True:
```python
count = 0
while count < 5:
    print("Count:", count)
    count += 1
```

### Loop Control

Use break and continue:

```python
for i in range(10):
    if i == 5:
        break   # exit loop
    if i % 2 == 0:
        continue # skip even numbers
    print(i)  # prints odd numbers < 5
```

## 🎯 Summary

Operators: Perform calculations, comparisons, and logical operations.

Conditionals (if/elif/else): Choose actions based on conditions.

Loops (for/while): Repeat code blocks efficiently.

Control Keywords: break → exit loop, continue → skip iteration.


