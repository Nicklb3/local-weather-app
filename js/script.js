$(function () {
    // variable to show tday of week on top of page
    let today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
  
  });
  
  