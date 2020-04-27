(function($) {
  'use strict';
  $(function() {
    var d=new Date();
    var z=d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
    if ($('#calendar').length) {
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: "'"+z+"'",
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'Long Event',
            start: z,
            end: d.getFullYear()+"/"+(d.getMonth()+1)+"/"+(d.getDate()+10)
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-07-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-07-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-07-11',
            end: '2017-07-13'
          },
          {
            title: 'Meeting',
            start: '2017-07-12T10:30:00',
            end: '2017-07-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2017-07-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2017-07-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2017-07-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2017-07-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2017-07-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-07-28'
          }
        ]
      })
    }
  });
})(jQuery);