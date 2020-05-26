var fs      = require('fs'),
    util    = require('util'),
    xml2js  = require('xml2js');
 
var parser = new xml2js.Parser();

// fs.readFile('./vacc_example_nems.xml', (err, data) => {
 fs.readFile('./test.xml', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  parser.parseString(data, function (err, result) {

    console.dir(result);
    //console.log(util.inspect(result, false, null));

    numbVacc = result.Bundle.entry.length -1;
    console.dir("Number of vacc to process: " + numbVacc);

    for (i = 1; i <= numbVacc; i++) {
      console.log("Immunization number: " + i)
      console.log("Immunization value : " + result.Bundle.entry[i].resource[0].Immunization[0].name[0].$.value)
    }

  });
})
