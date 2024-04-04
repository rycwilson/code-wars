# https://www.codewars.com/kata/51fda2d95d6efda45e00004e

class User 
  attr_reader :rank, :progress
  
  def initialize 
    @rank = -8
    @progress = 0
  end
  
  def inc_progress activity_rank
    if (!activity_rank.is_a?(Integer) or activity_rank < -8 or activity_rank == 0 or activity_rank > 8)
      raise ArgumentError, "Activity rank is invalid"
    end
    delta = (activity_rank - @rank).abs
    delta -= 1 if (activity_rank * @rank < 0)   # if the two ranks span 0
    delta *= -1 if activity_rank < @rank
    points = case
      when delta <= -2; 0
      when delta == -1; 1
      when delta == 0; 3
      else; 10 * delta ** 2
    end
    update_progress(points)
  end
  
  def update_progress points
    if @progress + points >= 100
      steps = 1
      extra = @progress + points - 100
      steps += extra / 100
      @rank = @rank == 8 ? @rank : [8, @rank + steps + (@rank == -1 ? 1 : 0)].min
      @progress = @rank == 8 ? 0 : extra % 100
    else 
      @progress = @rank == 8 ? 0 : @progress + points
    end
  end
end