import Vue from "vue";
import moment from "moment";
import tz from "moment-timezone";
const abbreviate = require('number-abbreviate')

Vue.filter('str_limit', (value, size) => {
  if (!value) return '';
  value = value.toString();
  return (value.length <= size) ? value : value.substr(0, size) + '...';
});

Vue.filter('formatDate', function(value) {
  return value ? moment(value).fromNow() : '-' 
});
Vue.filter('transactionsFormatDate', function(value) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment(value).tz(timeZone).format('MM-DD-YYYY hh:mm A')
});

Vue.filter('dateFormat', function(value) {
  return moment(value).format('MM-DD-YYYY')
});

Vue.filter('userDefaultProfilePic', (value, section) => {
  return value ? value : (section === 'timeline' ? require('../assets/images/default_timeline.svg') : require('../assets/images/default_ProfilePic.svg'));
})

Vue.filter('userDefaultCoverPic', value => {
  return value ? value : require('../assets/images/default_cover_photo.svg');
})


Vue.filter('formatPostDate', (postDate) => {
  /*Fetch Current date and post created date*/ 
  const createdDate = moment(postDate);
  const currentDate = moment();
  /*-----------------------------*/ 

  return (currentDate.diff(createdDate, 'h')<24)? createdDate.fromNow(): createdDate.format("MMM D, YYYY");
})


Vue.filter('customFormater', (value, format) => {
  if (value) {
    return moment(value).format(format);
  }
  return value; 
});

Vue.filter('formatAMPM', (time) => {
  const dateObj  = new Date();
  dateObj.setHours(time.substr(0,2));
  dateObj.setMinutes(time.substr(3,2));
  dateObj.setSeconds(0);

  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
});


Vue.filter('postImageSrc', (value, category, type) => {
  if (!value && category) {
    return require('../assets/images/'+ category +'_'+ type +'.png')
  }
  return value; 
});

Vue.filter('formatNumbers', (value) => {
  if (value) {
    return abbreviate(value);
  }
  return value; 
});

Vue.filter('imageSizeManage', (imgSource, sizeType, resizableNeed = true) => {
  if (resizableNeed) {
    /*If proper Url exist then split*/ 
    let modifiedSource = null;
    if(imgSource){
        let splitted = imgSource.split(/\.(?=[^\.]+$)/);
        splitted[0] = splitted[0] + sizeType+".";
        modifiedSource = splitted.join("");
    }
    /*------------------------------*/ 
    return (modifiedSource)?modifiedSource:imgSource;  

  } else {
    return imgSource
  }
});

Vue.filter('getCommunityName', (id, a, communityList) => {
  if(communityList){
    let result = communityList.find(res=>res.id === id);
    return (result && result.name)?result.name : "";
  }
})


Vue.filter('getCommunityShortName', (id, a, communityList) => {
  if(communityList && id){
    let result = communityList.find(res=>res.id === id);
    return (result && result.shortCode)?result.shortCode : "";
  }
})


Vue.filter('currencySign', (code) => {
  if (code) {
    let currencySigns = {
      'usd': '$',
      'aed': 'AED',
      'pkr': 'Rs.',
    };
    return currencySigns[code];
  }
  return "$"; 
});