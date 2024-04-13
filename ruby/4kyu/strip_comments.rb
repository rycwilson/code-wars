# https://www.codewars.com/kata/51c8e37cee245da6b40000bd

# Note that regular expressions will accept string interpolation, allowing for variables inside the regex
# Alternative approach here is creating a new regex from a string, which is less efficient

def solution(input, markers)
  markersRegex = markers.map { |m| "\\#{m}" }.join('|').prepend('(').concat(')')
  input
    .gsub(Regexp.new(markersRegex + '.+'), '')
    .gsub(/\s+(\n|\z)/, '\1')
end