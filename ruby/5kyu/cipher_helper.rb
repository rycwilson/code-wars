class CaesarCipher
  ALPHABET_POINTS = 'A'.upto('Z').map { |char| char.ord }
  
  def initialize(shift)
    @shift = shift
  end

  def encode(string)
    shift_letters string, 'forward'
  end
  
  def decode(string)
    shift_letters string, 'back'
  end
  
  private 
  
  def shift_letters string, direction
    string.upcase.chars.map do |char| 
      (ALPHABET_POINTS.include?(char.ord) ?
        shift_code_point(char.ord, direction) :
        char.ord
      ).chr
    end.join
  end
  
  def shift_code_point point, direction
    length = ALPHABET_POINTS.length
    index = ALPHABET_POINTS.index(point)
    new_index = direction == 'forward' ?
      (index + @shift) % length : 
      (index - @shift + length) % length
    ALPHABET_POINTS[new_index]
  end
end