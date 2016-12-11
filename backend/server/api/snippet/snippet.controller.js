import Snippet from './snippet.model';

export const addHandler = (request, response) => {
  let snippet = new Snippet(request.body);

  snippet.save((error, snippet) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      })
    }

    let snippetId = snippet.get('id');

    response.json({
      success: true,
      snippetId
    })
  })
}

export const getHandler = (request, response) => {
  let { params } = request;
  let { snippetId } = params;

  Snippet.findOne({ _id: snippetId }, function(error, snippet) {
    if (error) {
      return response.json({
        success: true,
        error
      })
    }

    response.json({
      success: true,
      snippet
    })
  })
};

