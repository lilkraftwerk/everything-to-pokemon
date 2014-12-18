require 'httparty'

names = []

151.times do |x|
  response = HTTParty.get("http://pokeapi.co/api/v1/pokemon/#{x + 1}/")
  pokename = response.parsed_response["name"]
  names << pokename
  print "#{x} / 150... "
end

p names