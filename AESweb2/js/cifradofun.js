//como si fuera jquery
//vue, react, angular

$(function(){

    $("#dameelcrypto").on("click", function(){

        let elhtml = $("#elhtml").val();
        let pass = $("#clave").val();

        //vamos a cifrar

        let encriptar = CryptoJS.AES.encrypt(elhtml, pass).toString();

        $("#encriptado").val(encriptar);

        console.log(encriptar, pass);

    });

    $("#dameeldescrypto").on("click", function(){

        let elhtml = $("#elhtml").val();
        let pass = $("#clave").val();

        //vamos a cifrar

        let encriptar = CryptoJS.AES.encrypt(elhtml, pass).toString();

        $("#encriptado").val(encriptar);

        console.log(encriptar, pass);

    });

});