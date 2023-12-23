print("введите число строк:")
n = int(input())
print("введите число столбцов:")
m = int(input())

a = []
for i in range(n):
    a.append([0] * m)
a[0][0] = 1

for i in range(n):
    for j in range(m):
        if i - 2 >= 0 and j - 1 >= 0:
            a[i][j] += a[i - 2][j - 1]
        if i - 1 >= 0 and j - 2 >= 0:
            a[i][j] += a[i - 1][j - 2]

print("Число возможных маршрутов:", a[n - 1][m - 1])