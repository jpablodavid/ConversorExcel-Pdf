const pdf = require('html-pdf');

class PDF{

    static WritePDF(filename, html){
        
            pdf.create(html,{}).toFile(filename, () =>{});
        
        
    }

}

module.exports = PDF;