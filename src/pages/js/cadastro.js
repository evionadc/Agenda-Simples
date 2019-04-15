document.cadastrarButton.onsubmit = async e =>{
    e.preventDefault()

    const form = e.target
    const data = new FormData

    data.append('ajax', true)
    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }

    const resultado =  document.getElementById('Resposta')
    try{

        const resp = await fetch(form.action, options)
        const json = await resp.json()
        resultado.innerHTML = JSON.stringify(json)

    }catch(e){
        resultado.innerHTML = e
    }
}