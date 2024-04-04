# https://www.codewars.com/kata/5541f58a944b85ce6d00006a

def productFib(prod):
    pair = [0,1]
    while pair[0] * pair[1] < prod:
        pair = [pair[1], pair[0] + pair[1]]
    else:
        return pair + [True if pair[0] * pair[1] == prod else False]