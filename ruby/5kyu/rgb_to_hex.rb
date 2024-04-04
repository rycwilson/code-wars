# https://www.codewars.com/kata/513e08acc600c94f01000001

def rgb(r, g, b)
  [r, g, b].map do |n| 
    n < 0 ? 
      '00' : 
      (n > 255 ? 'FF' : n.to_s(16).upcase.sub(/\A(\d|\w)\z/, '0\1'))
  end
  .join
end