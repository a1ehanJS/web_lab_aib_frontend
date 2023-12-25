string_for_input = input()
maximum = 0
dictionary = {}
for tab in string_for_input:
    if tab == ' ':
        continue
    if tab in dictionary:
        dictionary[tab] += 1
        maximum = max(maximum, dictionary[tab])
    else:
        dictionary[tab] = 1

lst = list(dictionary.keys())
lst.sort()
number = maximum
while number > 0:
    str = ""
    for count in lst:
        if dictionary[count] >= number:
            str += '#'
        else:
            str += ' '
    print(str)
    number -= 1
for c in lst:
    print(c, end = '')