const debounce = (fn, delay) => {
  var timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

const tryParseJSON = (jsonString) => {
  if (jsonString) {
    try {
      var o = JSON.parse(jsonString);

      // Handle non-exception-throwing cases:
      // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
      // but... JSON.parse(null) returns null, and typeof null === "object",
      // so we must check for that, too. Thankfully, null is falsey, so this suffices:
      if (o && typeof o === "object") {
        return o;
      }
    }
    catch (e) { console.log("You didn't paste valid JSON, please re-try copying the section and paste again.") }

    return false;
  }
};

const UCFirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const labelUCFirst = (type) => {
  let label = type.replace('-module', '')
  return label.charAt(0).toUpperCase() + label.slice(1)
}

const spaceToDash = (str) => {
  str = str.replace(/\s+/g, '-').toLowerCase();
  return str
}

const copyToClipboard = (text) => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  text = typeof text !== 'string' ? JSON.stringify(text) : text
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

const stripTrailingSlash = (str) => {
  return str.endsWith('/') ?
    str.slice(0, -1) :
    str;
};

const moduleName = (str) => str.substring(0, str.indexOf("-"))

export { debounce, labelUCFirst, UCFirst, spaceToDash, copyToClipboard, tryParseJSON, stripTrailingSlash, moduleName }
