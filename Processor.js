class Processor{

    static Process(dados){
        var rows = dados.split("\r\n");

        var row = [];
        
        rows.forEach(element => {
            var array = element.split(',');
            row.push(array);

        });

        return row;
    }
}

module.exports = Processor;