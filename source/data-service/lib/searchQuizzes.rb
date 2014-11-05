module PlastApp
  
  module SearchQuizzes
  	
    def SearchQuizzes.withCatId(categories_id)
      if categories_id == '0' 

        return Quiz.select(['id', 'category_id', 'title', 'description', \
        'updated_at'])

      else

        return Quiz.where(category_id: categories_id).select(['id', 'category_id'\
        , 'title', 'description', 'updated_at'])

      end
    end
    
    # Main search function
    # It's take object that contain two 
    # keys: category_id(Array)
    #       tags (Array) and returns result in json
    def SearchQuizzes.withTags(search_request)

      # Initialize SQlite string for search
      search_string = "SELECT GROUP_CONCAT(tag, \' \') as allTags, quizzes.*\
      FROM quizzes JOIN quizzes_tags ON quizzes_tags.quiz_id = quizzes.id \
      JOIN tags ON quizzes_tags.tag_id = tags.id WHERE category_id IN (?) \
      GROUP BY quizzes.title HAVING allTags LIKE \"%"\
       << search_request['tags'][0] << "%\""

      # Removing first element from array
      search_request['tags'].shift 

      # Adding % to tegs for db request
      search_request['tags'].map! {|tag| search_string \
      << " AND allTags LIKE \"%#{tag}%\""}

      # Adding end of db request string
      search_string = search_string \
      << " ORDER BY title;"

      # Main Request to db 
      # Using string that was generated
      search_result = Quiz.find_by_sql [search_string, \
      search_request['categories_id']]

      # If there no search results 
      # Just return empty array
      if search_result.length == 0
        return {result: search_result, length: 0}.to_json
      else
      end

      # Count for paginating
      length = search_result.length

      # Must be CHANGED TO 10
      # Delete all unneeded results
      search_result = search_result.slice! (search_request['currentPage']*3), 3

      return {result: search_result, length: length}.to_json

    end

  end

end 