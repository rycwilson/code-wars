# https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper
  def initialize(collection, items_per_page)
    @items = collection
    @max_items_per_page = items_per_page
  end

  def item_count
    @items.count
  end
	
  def page_count
    (item_count.to_f / @max_items_per_page).ceil
  end

  # returns the number of items on the current page. page_index is zero based.
  # this method should return -1 for page_index values that are out of range
  def page_item_count(page_index)
    return -1 unless page_index.between?(0, page_count - 1)
    is_last_page = page_index == page_count - 1
    if is_last_page
      item_count % @max_items_per_page == 0 ?
        @max_items_per_page :
        item_count % @max_items_per_page
    else
      @max_items_per_page
    end
  end

  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(item_index) 
    return -1 unless item_index.between?(0, item_count - 1)
    (0...item_count).each_slice(@max_items_per_page).with_index do |slice, index|
      return index if slice.include?(item_index)
    end
  end
end