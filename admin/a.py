import matplotlib.pyplot as plt

from random import randrange as rr

n = 11
total, active, inactive = [], [], []

for i in range(30):
    n += rr(0,6)
    total.append(n)
    a = int(n*0.6) + rr(-5,6)
    b = n-a

    active.append(a)
    inactive.append(b)

plt.title("User statistics")

a, = plt.plot(total, color="red")
b, = plt.plot(active, color="blue")
c, = plt.plot(inactive, color="green")

plt.legend((a,b,c),("Total users", "Active users", "Inactive users"))

plt.ylabel("number of users")
plt.xlabel("time")

plt.show()