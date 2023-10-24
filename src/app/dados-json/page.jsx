export default async function DadosJson() {
    
        const response = await fetch("http://localhost:3000/base/base-api");
        const produtos = await response.json();

    return (
        <div>
            <h1>Dados de Produtos recuperados do arquivo Json</h1>
            <p>Recuperar todos os produtos do Github através da api-interna http://localhost:3000/base/base-api utilizando fetch.</p>
            <div>
                <ul>
                    {produtos.produtos.map((produto) => (
                        <li key={produto.id}>
                            <p>{produto.id}</p>
                            <p>{produto.nome}</p>
                            <p>{produto.tipo}</p>
                            <p>{produto.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

