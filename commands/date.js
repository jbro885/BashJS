exports.run = (args) => {
  let date = new Date();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();

  let newdate = year + "/" + month + "/" + day;
  
  return newdate
}