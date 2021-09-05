function TransformarEmURL(QualquerCoisa) {
    let prefixo = "https://www.";
    let sufixo = ".com.br";
    return prefixo + QualquerCoisa + sufixo;
}

console.log(TransformarEmURL("funcaojs"));