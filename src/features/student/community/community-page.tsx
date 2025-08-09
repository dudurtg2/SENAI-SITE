import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { getCommunityData } from '@/api/queries';
import { CommunityData } from '@/types/types-queries';
import { useGuest } from '@/contexts/guest-context'
import { useAuth } from '@/contexts/auth-context'

const CommunityPage: React.FC = () => {
  const navigate = useNavigate()
  const { isGuest } = useGuest()
  const { isAuthenticated } = useAuth()

  // Redirecionar visitantes para o dashboard
  useEffect(() => {
    if (isGuest || !isAuthenticated) {
      navigate('/app/dashboard', { replace: true })
      return
    }
  }, [isGuest, isAuthenticated, navigate])

  const { data, isLoading, error } = useQuery<CommunityData>({
    queryKey: ['communityData'],
    queryFn: getCommunityData,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados da comunidade.</div>;

  const { featuredProjects, recentDiscussions, activeMembers } = data || {};

  return (
    <div className="container mx-auto p-6">
      {/* Cabeçalho */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Bem-vindo à Comunidade SENAI</h1>
        <p className="text-gray-600 mt-2">Conecte-se com outros alunos, compartilhe projetos e participe de discussões.</p>
      </header>

      {/* Projetos em Destaque */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects?.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ver Mais</button>
            </div>
          )) || <p>Nenhum projeto encontrado.</p>}
        </div>
      </section>

      {/* Discussões Recentes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discussões Recentes</h2>
        <ul>
          {recentDiscussions?.map((discussion) => (
            <li key={discussion.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold text-gray-800">{discussion.title}</h3>
              <p className="text-gray-600 mt-2">{discussion.content}</p>
            </li>
          )) || <p>Nenhuma discussão encontrada.</p>}
        </ul>
      </section>

      {/* Membros Ativos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Membros Ativos</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMembers?.map((member) => (
            <li key={member.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mt-2">{member.role}</p>
            </li>
          )) || <p>Nenhum membro ativo encontrado.</p>}
        </ul>
      </section>
    </div>
  );
};

export default CommunityPage;