import useSessao from "./useSessao"

export default function useAPI() {
    
    const {token} = useSessao()
    const urlBase = process.env.NEXT_PUBLIC_API_URL   

    async function httpGet(caminho: string){
        const uri = caminho.startsWith('/') ? caminho : `${caminho}`
        const urlCompleta = `${urlBase}${uri}`

        const resposta = await fetch(urlCompleta , {
           headers: {
                Authorization: `Bearer ${token}`,
           },
        })        
        return extrairDados(resposta)
    }

    async function httpPost(caminho: string, body: any ) {
        console.log("Iniciando a requisição para", caminho);  // Log de entrad
        const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
        const urlCompleta = `${urlBase}${uri}`
       
        const resposta = await fetch (urlCompleta, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                 Authorization: `Bearer ${token}`,
            }, 
            body: JSON.stringify(body),
        })
      
        return extrairDados(resposta)
    }

    async function extrairDados(resposta: Response){
        let  conteudo = ''
        try {
            conteudo = await resposta.text()
            const jsonData= JSON.parse(conteudo)
            return jsonData
             
        } catch (e) {
            return  conteudo
        }
    }    
    return { httpGet, httpPost }
}    