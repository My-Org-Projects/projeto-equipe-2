import React, { useEffect, useState } from "react";
import BarraDePesquisa from "./BarraDePesquisa/BarraDePesquisa";
import TabelaUsuarios from "./TabelaUsuarios";

export type UsuarioLista = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  criadoEm: string;
  ativo: boolean;
};

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<UsuarioLista[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState(""); // Estado do input de pesquisa

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await fetch(
          "http://localhost:4000/auth/listarTodosUsuarios"
        );
        if (!response.ok) throw new Error("Erro ao buscar usuários");

        const data = await response.json();
        setUsuarios(data.usuarios);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsuarios();
  }, []);

  // Filtrar usuários conforme o texto digitado
  const usuariosFiltrados = usuarios.filter(
    (user) =>
      user.nome.toLowerCase().includes(filtro.toLowerCase()) ||
      user.email.toLowerCase().includes(filtro.toLowerCase()) ||
      user.telefone.includes(filtro)
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="flex flex-col justify-center items-center gap-11">
      <BarraDePesquisa filtro={filtro} setFiltro={setFiltro} />
      <TabelaUsuarios usuarios={usuariosFiltrados} />
    </div>
  );
};

export default ListaUsuarios;
