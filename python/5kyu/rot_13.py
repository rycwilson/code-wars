# https://www.codewars.com/kata/530e15517bc88ac656000716

import re

upperAlpha = tuple(range(ord('A'), ord('Z') + 1))
lowerAlpha = tuple(range(ord('a'), ord('z') + 1))

def rot13(message):
    shift = 13
    def encode(matchObject):
        letter = matchObject.group()
        alpha = upperAlpha if letter.isupper() else lowerAlpha
        i = alpha.index(ord(letter))
        return chr(alpha[(i + shift) % len(alpha)])
    return re.sub('[A-Za-z]', encode, message)