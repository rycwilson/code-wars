# https://www.codewars.com/kata/54d512e62a5e54c96200019e

require 'prime'

def prime_factors(n)
  n.prime_division.inspect
    .gsub(/\[(\d+),\s1\]/, '(\1)')
    .gsub(/\[(\d+),\s(\d+)\]/, '(\1**\2)')
    .gsub(/\[|(,\s)|\]/, '')
end