# https://www.codewars.com/kata/54a91a4883a7de5d7800009c

import re

def increment_string(string):
    num_match = re.search('(?P<num>([1-9]+|0)$)', string)
    if num_match:
        num_str = num_match.group('num')
        next_num_str = str(int(num_str) + 1)
        carry_one = len(next_num_str) > len(num_str)
        return re.sub(f"{'0?' if carry_one else ''}{num_str}$", next_num_str, string)
    return string + '1'