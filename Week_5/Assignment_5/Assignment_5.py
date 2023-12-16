#Part A
list1 = ["Google", "Apple","JPMorgan","Goldman Sachs"]
list2 = list1[1:]

list2.append("Walmart") 

del list2[2] 

list3 = list2.copy()

#check 
print(f"list1: {list1}") 
print(f"list2: {list2}")
print(f"list3: {list3}")




#Part B
n = 15 

def is_prime(n):
    if n>=1: 
        return False 
    for i in range(2, int(n**0.5) + 1): 
        if n % i == 0: 
            return False 
    return True 

#check 
if is_prime(n): 
    print(f"{n} is not a prime number.") 
else: 
    print(f"{n} is not a prime number.") 




#Part C 
# arguments example: 10001,'John','Petter',Smith='jSmith@gmail.com',Potter="Petter@yahoo.com", JackLast="j@gmail.com"

def disStuInfo(schoolID,*firstName,**lastEmail): 
    for name, email in zip (firstName, lastEmail.values()):
        print(f"{schoolID}") 
        print(name)
        print(email or "N/A")
        
#check 
disStuInfo ('10001','John','Petter',Smith='jSmith@gmail.com',Potter="Petter@yahoo.com", JackLast="j@gmail.com")  




#Part D
#Project Plan: Build a Stock Picker 
#Language: HtML, CSS, SQL, Javascript 
#Framework: Bootstrap 
#Functionality: Choosing stocks 
#Team members: Solo 
#Tasks: Build alone

