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
    console.log(util.inspect(result, false, null));

/*
    for(let val of result.Bundle.entry){
      console.log(val)
    }
*/
   global.stuff  = result.Bundle.entry[1].resource[0].Immunization[0].name[0].$.value;
   //global.stuff  = result.Bundle;
      
      

    //var myArray = result.Bundle.entry[];


/*
      global.identifierSystem   = result.Bundle.entry[1].resource[0].Immunization[0].identifier[0].system[0].$.value;
      global.identifierValue    = result.Bundle.entry[1].resource[0].Immunization[0].identifier[0].value[0].$.value;
      global.vaccineProcedureCode = result.Bundle.entry[1].resource[0].Immunization[0].extension[0].valueCodeableConcept[0].coding[0].code[0].$.value;
      global.vaccineProcedureDisplay = result.Bundle.entry[1].resource[0].Immunization[0].extension[0].valueCodeableConcept[0].coding[0].display[0].$.value;     
      global.notGiven           = result.Bundle.entry[1].resource[0].Immunization[0].notGiven[0].$.value;
      global.vaccineCodeSNOMED  = result.Bundle.entry[1].resource[0].Immunization[0].vaccineCode[0].coding[0].code[0].$.value;
      global.vaccineCodeDisplay = result.Bundle.entry[1].resource[0].Immunization[0].vaccineCode[0].coding[0].display[0].$.value;
      global.dateChar           = result.Bundle.entry[1].resource[0].Immunization[0].date[0].$.value;
      global.nhsnumber          = result.Bundle.entry[3].resource[0].Patient[0].identifier[0].value[0].$.value;
      global.practitionerPrefix = result.Bundle.entry[6].resource[0].Practitioner[0].name[0].prefix[0].$.value;
      global.practitionerGiven = result.Bundle.entry[6].resource[0].Practitioner[0].name[0].given[0].$.value;
      global.practitionerFamily = result.Bundle.entry[6].resource[0].Practitioner[0].name[0].family[0].$.value;
*/
      //console.log( "type = " + type );
      //console.log( "identifier (system) = " + identifierSystem );
      //console.log( "identifier (value) = " + identifierValue );
      //console.log( "notGiven = " + notGiven );
      //console.log( "vaccineCode (value) = " + vaccineCodeSNOMED );
      //console.log( "vaccineCode (display) = " + vaccineCodeDisplay );
      //console.log( "dateChar = " + dateChar );
      //console.log('Done');

  });
})
