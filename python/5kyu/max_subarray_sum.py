# https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

def max_sequence(arr):
    max_sum = float('-inf')
    current_sum = 0
    if all(num > 0 for num in arr):
        return sum(arr)
    elif not arr or all(num < 0 for num in arr):
        return 0
    else:  
        for num in arr:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return 0 if max_sum < 0 else max_sum