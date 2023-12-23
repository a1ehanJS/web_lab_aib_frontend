def find_median(arr):
    n = len(arr)
    medians = []

    for i in range(1, n + 1):
        current_arr = sorted(arr[:i])
        m = len(current_arr)

        if m % 2 == 0:
            median = (current_arr[m // 2 - 1] + current_arr[m // 2]) / 2
        else:
            median = current_arr[m // 2]

        medians.append(median)

    return sum(medians)

print("введите число элементов: ")
n = int(input())
print("введите последовательность элементов: ")
arr = list(map(int, input().split()))

result = find_median(arr)
print("результат: ", result)
