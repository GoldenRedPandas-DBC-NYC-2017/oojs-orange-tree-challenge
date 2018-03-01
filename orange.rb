# This class maps the Orange JS to Ruby:
class Orange
  MINIMUM_ORANGE_DIAMETER = 2.5
  MAXIMUM_ORANGE_DIAMETER = 3.2
  
  def initialize
    @diameter = calculate_diameter
  end
  
  def calculate_diameter
    rand(MINIMUM_ORANGE_DIAMETER..MAXIMUM_ORANGE_DIAMETER)
  end
end
