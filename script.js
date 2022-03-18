function gerarlink(){
  let number=document.container.number.value
  let message=document.container.message.value
  let url="https://wa.me/55";
  let endUrl=`${url}${number}?text=${message}`;
  document.getElementById('end_url').innerText=endUrl;
}

/*function copiar( ) {
  let numero = document.getElementById("endUrl")
  numero.select()
  numero.setSelectionRange(0, 99999)

  document.execCommand("copy")
  alert('copiado')
}
*/
