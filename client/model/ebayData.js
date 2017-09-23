import $ from 'jquery';

export const getData = function(cb) {
  
  $.ajax({
    method: 'GET',
    url: process.env.NODE_ENV === 'production' ? 'http://thebairdata.com/getstuff': 'http://127.0.0.1:8000/getStuff',
    success: (data) => {
      console.log('back from the server inside of ebay ajax call success')
      cb(null, data)
    }, 
    error: (err) => {
      cb(err)
      console.log('FAILED', err)
    }
  })

}

export const gatherData = function(pageObj, cb, category) {

  $.ajax({
    method: 'POST',
    url: process.env.NODE_ENV === 'production' ? 'http://thebairdata.com/dresses': 'http://127.0.0.1:8000/dresses',
    data: JSON.stringify(pageObj),
    contentType: 'application/json',
    success: (data) => {
      console.log('gathering data is done inside of ajax call success', data)
      cb(null, data)
    }, 
    error: (err) => {
      cb(err)
      console.log('FAILED', err)
    }
  })

}

// startSpinner: function() {
//   $('.spinner img').show();
//   $('form input[type=submit]').attr('disabled', 'true');
// },

// stopSpinner: function() {
//   $('.spinner img').fadeOut('fast');
//   $('form input[type=submit]').attr('disabled', null);
// }





