def sort(array)
  for i in 0...(array.length-1)
    min_index = i + 1
    for j in (i+1)...array.length
      min_index = j if array[j] < array[min_index]
    end
    if array[min_index] < array[i]
      array[i], array[min_index] = array[min_index], array[i]
    end
  end
  array
end


print sort([])
puts ">>>>>>>>>>>>"
print sort([1])
puts ">>>>>>>>>>>>"
print sort([10,4])
puts ">>>>>>>>>>>>"
print sort((1..15).to_a.shuffle)
puts ">>>>>>>>>>>>"
print sort((1..15).to_a.shuffle)
puts ">>>>>>>>>>>>"
print sort((1..15).to_a.shuffle)
puts ">>>>>>>>>>>>"
