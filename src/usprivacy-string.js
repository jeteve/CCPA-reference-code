/**
 * usprivacy-string.js
 * 
 * Implements class UsprivacyString
 * 
 * The class contains the methods to get/set the usprivacy string 
 * and a method to get the current version.
 * 
 * The usprivacy string as the format: ”vno” where 
 *  v = version
 *  n = Notice Given
 *  o = OptedOut
 * Example: “1YY” Version 1, Notice given, Opted out.
 * Default is "1--".
 * 
 **/
const UsprivacyRegExp = /^[nNyY-]{1}$/;
const UsprivacyVersionRegExp = /^[1]{1}$/;

class UsprivacyString {
  constructor() {
    this.version = 1;
    this.noticegiven = '-';
    this.optedout ='-';
    this.baseString = this.version.toString() + this.noticegiven + this.optedout;
  }
  
  // getUsprivacyString()
  // return the usprivacy string or null if an error occurs
  getUsprivacyString() {
    if (   !this.baseString
        || this.baseString.length != 3
        || !UsprivacyVersionRegExp.test(parseInt(this.baseString, 0)) 
        || !UsprivacyRegExp.test(this.baseString[1]) 
        || !UsprivacyRegExp.test(this.baseString[2]) ) {
            return null
        } else {
            return this.baseString;
    }
  }
  
  // setUsprivacyString(newstr)
  // checks for validity of the string before setting internals
  // returns true if success otherwise false
  setUsprivacyString(newstr) {
    if (   !newstr
        || newstr.length != 3
        || !UsprivacyVersionRegExp.test(parseInt(newstr, 0)) 
        || !UsprivacyRegExp.test(newstr[1]) 
        || !UsprivacyRegExp.test(newstr[2]) ) {
            return false;
        } else {
            this.version = parseInt(newstr, 0);
            this.noticegiven = newstr[1];
            this.optedout = newstr[2];
            this.baseString = newstr;
            return true;
        }
  }

  // getVerion()
  // returns the version number
  getVersion () { 
      return this.version;
  }
}

export default UsprivacyString;