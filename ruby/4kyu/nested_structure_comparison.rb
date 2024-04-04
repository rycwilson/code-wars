# https://www.codewars.com/kata/520446778469526ec0000001

class Array
  def same_structure_as arr
    return false unless arr.is_a?(Array) and length == arr.length
    count = 0
    each_with_index do |element, i| 
      if element.is_a?(Array)
        break unless element.same_structure_as(arr[i])
      end
      count += 1
    end
    count == length
  end
end