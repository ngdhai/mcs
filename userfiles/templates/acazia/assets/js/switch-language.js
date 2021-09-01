function insertParam(key, value) {
  key = encodeURIComponent(key);
  value = encodeURIComponent(value);

  // kvp looks like ['key1=value1', 'key2=value2', ...]
  var kvp = document.location.search.substr(1).split('&');
  let i = 0;

  for (; i < kvp.length; i++) {
    if (kvp[i].startsWith(key + '=')) {
      let pair = kvp[i].split('=');
      pair[1] = value;
      kvp[i] = pair.join('=');
      break;
    }
  }

  if (i >= kvp.length) {
    kvp[kvp.length] = [key, value].join('=');
  }

  // can return this or...
  let params = kvp.join('&');

  // reload page with new params
  document.location.search = params;
}

function checkLanguage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const lang = urlParams.get('lang')

  const avaiableLanguage = (lang) => {
    const avaiableLang = ['en', 'vi']
    return avaiableLang.includes(lang) ? lang : 'en'
  }

  if (lang) {
    localStorage.setItem('lang', avaiableLanguage(lang))
    return
  }

  if (!localStorage.getItem('lang')) {
    insertParam('lang', 'en')
    localStorage.setItem('lang', 'en')
  } else {
    insertParam('lang', avaiableLanguage(localStorage.getItem('lang')))
    localStorage.setItem('lang', avaiableLanguage(localStorage.getItem('lang')))
  }
}

checkLanguage()