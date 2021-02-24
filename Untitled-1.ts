//UUID => UNIVERSALLY UNIQUE IDENTIFIER

// function enviarEmail(para, id, assunto, texto) {
//     // bibl de envio de enviarEmail

//     console.log(para, id, assunto, texto);
// }

// class EnviarEmailParaUsuario {
//     send() {
//         enviarEmail("ro-marilia@outlook.com", 9899, "Olá", "Tudo bem?");
//     }
// }


interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail(dados: DadosDeEnvioEmail) {
    console.log(dados.para, dados.id, dados.assunto, dados.texto);   
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "ro-marilia@outlook.com", 
            id: "20o01ollkdasflka", 
            assunto: "Olá", 
            texto: "Tudo bem?"
        });
    }
}