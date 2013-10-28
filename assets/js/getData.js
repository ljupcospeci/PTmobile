var projectId;

  function executeTrackerApiFetch(owner) {

  // input token
  var token = ''; // you can find your token on the pivotal tracker profile page
  // get state

  var selected = ['started', 'unstarted', 'finished', 'delivered', 'rejected', 'unscheduled']; //default story states to get
  console.log(owner);
  owner = typeof owner === 'undefined' ? '' : owner; // insert owner initials here
  console.log(owner);
  var limit = '100'; // limit stories

  var url = 'https://www.pivotaltracker.com/services/v5';
  url += '/projects/' + ''; // insert project id
  url += '/stories?filter=owner:' + owner + '%20state:' + selected;
  url += '&limit=' + limit;

  $.ajax({
    url: url,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-TrackerToken', token);
    }
  }).done(displayTrackerApiResponse);
}

  function displayTrackerApiResponse(stories) {
    var area = $('#result_area');

    area.empty();

    for (var i=0; i < stories.length;i++) {
      var newLi = $('<li></li>').addClass('__' + i + ' story ' + stories[i].current_state);
      var storyName = $('<a></a>')
                        .html(stories[i].name)
                        .addClass('__' + i + ' storyName');

      newLi.append(storyName);
      area.append(newLi);

      var moreInfo = $('<div></div>')
                          .addClass('hide ' + '__' + i + ' info');
        newLi.append(moreInfo);

      var storyType = $('<span></span>')
                          .addClass('storyType full-width storyPart')
                          .html('Story type: ' + stories[i].story_type);
      var storyEst = $('<span></span>')
                          .addClass('storyEst storyPart')
                          .html('Estimate: ' + stories[i].estimate);
      var storyDesc = $('<p></p>')
                          .addClass('storyDesc storyPart')
                          .html('Description: ' + stories[i].description);
      moreInfo
            .append(storyType)
            .append(storyEst)
            .append(storyDesc);
        $('story__' + i).addClass(stories[i].current_state);
          console.log(stories[i].current_state);
    }

    toggleStoryInfo();
  }

  function toggleStoryInfo(){
    $('.story').on('click', function(event) {
      var selector = event.target.className.split(" ");
      $('.info').addClass('hide');
      $('div' + '.' + selector).toggleClass('hide');
    });
  }

  $(document).ready(function() {
    executeTrackerApiFetch();
  });
