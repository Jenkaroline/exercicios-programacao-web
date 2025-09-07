// Objeto agenda com métodos para gerenciar contatos
const agenda = {
    contatos: [],

    // Adicionar novo contato
    adicionarContato(nome, telefone) {
        // Validação básica
        if (!nome || !telefone) {
            console.log("❌ Erro: Nome e telefone são obrigatórios!");
            return false;
        }

        // Verificar se já existe um contato com o mesmo nome
        const contatoExistente = this.contatos.find(contato => 
            contato.nome.toLowerCase() === nome.toLowerCase()
        );

        if (contatoExistente) {
            console.log(`❌ Erro: Contato "${nome}" já existe!`);
            return false;
        }

        // Criar novo contato
        const novoContato = {
            id: Date.now(), // ID único baseado no timestamp
            nome: nome.trim(),
            telefone: telefone.trim()
        };

        this.contatos.push(novoContato);
        console.log(`✅ Contato "${nome}" adicionado com sucesso!`);
        return true;
    },

    // Buscar contato por nome
    buscarPorNome(nome) {
        if (!nome) {
            console.log("❌ Erro: Nome é obrigatório para busca!");
            return null;
        }

        const contato = this.contatos.find(contato => 
            contato.nome.toLowerCase().includes(nome.toLowerCase())
        );

        if (contato) {
            console.log(`📞 Contato encontrado:`);
            console.log(`   Nome: ${contato.nome}`);
            console.log(`   Telefone: ${contato.telefone}`);
            return contato;
        } else {
            console.log(`❌ Nenhum contato encontrado com o nome "${nome}"`);
            return null;
        }
    },

    // Buscar todos os contatos que contenham parte do nome
    buscarTodos(termo) {
        if (!termo) {
            console.log("❌ Erro: Termo de busca é obrigatório!");
            return [];
        }

        const resultados = this.contatos.filter(contato => 
            contato.nome.toLowerCase().includes(termo.toLowerCase())
        );

        if (resultados.length > 0) {
            console.log(`📋 Encontrados ${resultados.length} contato(s):`);
            resultados.forEach(contato => {
                console.log(`   ${contato.nome} - ${contato.telefone}`);
            });
        } else {
            console.log(`❌ Nenhum contato encontrado com o termo "${termo}"`);
        }

        return resultados;
    },

    // Retornar número total de contatos
    numeroDeContatos() {
        const total = this.contatos.length;
        console.log(`📊 Total de contatos cadastrados: ${total}`);
        return total;
    },

    // Listar todos os contatos
    listarTodos() {
        if (this.contatos.length === 0) {
            console.log("📋 Nenhum contato cadastrado.");
            return;
        }

        console.log(`📋 Lista de todos os contatos (${this.contatos.length}):`);
        this.contatos.forEach((contato, index) => {
            console.log(`   ${index + 1}. ${contato.nome} - ${contato.telefone}`);
        });
    },

    // Remover contato por nome
    removerContato(nome) {
        const index = this.contatos.findIndex(contato => 
            contato.nome.toLowerCase() === nome.toLowerCase()
        );

        if (index !== -1) {
            const contatoRemovido = this.contatos.splice(index, 1)[0];
            console.log(`🗑️ Contato "${contatoRemovido.nome}" removido com sucesso!`);
            return true;
        } else {
            console.log(`❌ Contato "${nome}" não encontrado!`);
            return false;
        }
    },

    // Atualizar contato
    atualizarContato(nome, novoTelefone) {
        const contato = this.contatos.find(contato => 
            contato.nome.toLowerCase() === nome.toLowerCase()
        );

        if (contato) {
            contato.telefone = novoTelefone.trim();
            console.log(`✅ Telefone do contato "${nome}" atualizado para "${novoTelefone}"`);
            return true;
        } else {
            console.log(`❌ Contato "${nome}" não encontrado!`);
            return false;
        }
    },

    // Limpar todos os contatos
    limparTodos() {
        const quantidade = this.contatos.length;
        this.contatos = [];
        console.log(`🧹 ${quantidade} contato(s) removido(s). Agenda limpa!`);
    }
};

// Função para demonstrar o uso da agenda
function demonstrarAgenda() {
    console.log("🚀 Demonstração da Agenda de Contatos\n");

    // Adicionar contatos
    console.log("=== ADICIONANDO CONTATOS ===");
    agenda.adicionarContato("João Silva", "(11) 99999-1234");
    agenda.adicionarContato("Maria Santos", "(11) 88888-5678");
    agenda.adicionarContato("Pedro Oliveira", "(11) 77777-9012");
    agenda.adicionarContato("Ana Costa", "(11) 66666-3456");
    
    console.log("\n=== NÚMERO DE CONTATOS ===");
    agenda.numeroDeContatos();
    
    console.log("\n=== LISTANDO TODOS OS CONTATOS ===");
    agenda.listarTodos();
    
    console.log("\n=== BUSCANDO CONTATOS ===");
    agenda.buscarPorNome("João");
    agenda.buscarPorNome("Silva");
    agenda.buscarPorNome("Carlos"); // Não existe
    
    console.log("\n=== BUSCA MÚLTIPLA ===");
    agenda.buscarTodos("a"); // Contatos que contêm "a"
    
    console.log("\n=== ATUALIZANDO CONTATO ===");
    agenda.atualizarContato("João Silva", "(11) 99999-0000");
    
    console.log("\n=== REMOVENDO CONTATO ===");
    agenda.removerContato("Pedro Oliveira");
    
    console.log("\n=== ESTADO FINAL ===");
    agenda.listarTodos();
    agenda.numeroDeContatos();
}

// Executar demonstração
demonstrarAgenda();

// Exemplos de uso individual:
console.log("\n" + "=".repeat(50));
console.log("📖 EXEMPLOS DE USO:");
console.log("=".repeat(50));

console.log("\n// Adicionar contato:");
console.log("agenda.adicionarContato('Carlos Pereira', '(11) 55555-7890');");

console.log("\n// Buscar contato:");
console.log("agenda.buscarPorNome('Carlos');");

console.log("\n// Ver número de contatos:");
console.log("agenda.numeroDeContatos();");

console.log("\n// Listar todos:");
console.log("agenda.listarTodos();");

console.log("\n// Remover contato:");
console.log("agenda.removerContato('Carlos Pereira');");

console.log("\n// Atualizar telefone:");
console.log("agenda.atualizarContato('Maria Santos', '(11) 99999-9999');");

// Função interativa para testar no console
function testarAgenda() {
    console.log("\n🎮 MODO INTERATIVO ATIVADO!");
    console.log("Use os seguintes comandos no console:");
    console.log("- agenda.adicionarContato('Nome', 'Telefone')");
    console.log("- agenda.buscarPorNome('Nome')");
    console.log("- agenda.numeroDeContatos()");
    console.log("- agenda.listarTodos()");
    console.log("- agenda.removerContato('Nome')");
    console.log("- agenda.atualizarContato('Nome', 'NovoTelefone')");
}

// Ativar modo interativo
testarAgenda();