var Reader = require('./Reader');
var Writer = require('./Writer');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParse = require('./HtmlParse');
var PDF = require('./Pdf');

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read('./users.csv');
    
    var dadosProcess = Processor.Process(dados);

    var usuarios = new Table(dadosProcess);

    var html = await HtmlParse.Parse(usuarios);

    escritor.Write(Date.now() + '.html', html);
    PDF.WritePDF( Date.now() +'.PDF', html);

}

main();
