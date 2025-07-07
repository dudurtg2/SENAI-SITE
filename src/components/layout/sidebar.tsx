import { Plus, Edit3, Award, User, Undo2, TriangleAlert, Eye, LogIn, UserPlus, BookOpen, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'
import { useProjetos } from '../../hooks/use-queries'

interface SidebarProps {
  isLoggedIn?: boolean // Manter para compatibilidade, mas usaremos o contexto
}

const Sidebar = ({ isLoggedIn }: SidebarProps) => {
  const { user, isAuthenticated, logout } = useAuth();
  // Buscar projetos apenas se o usuário estiver autenticado
  const { data: projetos, isLoading: loadingProjetos } = useProjetos();

  // Função para obter tipo de usuário
  const getUserType = () => {
    if (!isAuthenticated || !user) return 'visitante';
    return user.tipo?.toLowerCase() || 'visitante';
  };

  const userType = getUserType();  // Calcular estatísticas dos projetos do usuário
  const getProjectStats = () => {
    if (!projetos || !Array.isArray(projetos) || !user) {
      return { pendentes: 0, concluidos: 0 };
    }

    // Debug: Verificar dados disponíveis
    console.log('🔍 Sidebar Debug:', {
      totalProjetos: projetos.length,
      user: { uuid: user.uuid, nome: user.nome },
      userType
    });

    // Filtrar projetos onde o usuário logado é o líder (para alunos)
    let userProjects = projetos;
    
    if (userType === 'aluno' || userType === 'student') {
      userProjects = projetos.filter(projeto => 
        projeto.liderProjeto && projeto.liderProjeto.uuid === user.uuid
      );
      
      console.log('📊 Projetos do usuário filtrados:', {
        projetosDoUsuario: userProjects.length,
        exemploProjeto: userProjects[0] || 'Nenhum projeto encontrado'
      });
    }
    // Para professores, podemos mostrar projetos de suas disciplinas (implementar depois)
    
    const now = new Date();
    let pendentes = 0;
    let concluidos = 0;

    userProjects.forEach(projeto => {
      // Verificar status do projeto
      if (projeto.status && projeto.status.toLowerCase() === 'concluido') {
        concluidos++;
      } else {
        // Se não tem status definido ou não é "concluido", considerar pendente
        pendentes++;
      }
    });

    console.log('📈 Stats finais:', { pendentes, concluidos });

    return { pendentes, concluidos };
  };

  const projectStats = getProjectStats();

  // SIDEBAR PARA VISITANTES
  if (!isAuthenticated) {
    return (
      <aside className="w-64 bg-bg-layouts text-black min-h-screen flex flex-col justify-center items-center text-center p-4">
        <div className="w-16 h-16 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
          <Eye size={32} className="text-orange-600" />
        </div>
        <h3 className="font-semibold text-lg mb-2">Modo Visitante</h3>
        <p className="text-gray-600 mb-6 text-sm">Navegando como convidado</p>
        
        {/* Informações públicas */}
        <div className="w-full mb-6">
          <h4 className="text-sm font-semibold mb-3 text-gray-700">Acesso Público</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <BookOpen size={16} />
              <span>Visualizar Projetos</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users size={16} />
              <span>Conhecer a Comunidade</span>
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="space-y-3 w-full px-4">
          <Link 
            to="/login"
            className="w-full p-3 rounded-md bg-button-primary text-white hover:bg-opacity-80 transition flex items-center justify-center space-x-2"
          >
            <LogIn size={16} />
            <span>Fazer Login</span>
          </Link>
          <Link 
            to="/register"
            className="w-full p-3 rounded-md border border-button-primary text-button-primary hover:bg-button-primary hover:text-white transition flex items-center justify-center space-x-2"
          >
            <UserPlus size={16} />
            <span>Criar Conta</span>
          </Link>        </div>
        
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Para ter acesso completo,</p>
          <p>faça login ou cadastre-se</p>
        </div>
      </aside>
    )
  }

  // SIDEBAR PARA ALUNOS
  if (userType === 'aluno' || userType === 'student') {
    return (
      <aside className="w-64 bg-bg-layouts text-black min-h-screen text-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mb-3 flex items-center justify-center mt-5">
            <User size={32} className="text-white" />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-sm">{user?.nome || 'Aluno'}</h3>
          <p className="text-xs text-gray-800">{user?.matricula ? `RA ${user.matricula}` : 'Estudante'}</p>
          <p className="text-xs text-gray-800 mb-2">
            {user?.curso || 'Técnico em Desenvolvimento de Sistemas'}
          </p>
        </div>        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3">Meus Projetos</h4>
          <div className="flex justify-center gap-2 items-center">
            <div className="flex flex-col space-y-2">
              <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-2 justify-center">
                  <span className="text-lg font-semibold">
                    {loadingProjetos ? '...' : projectStats.pendentes}
                  </span>
                  <Undo2 style={{ transform: 'rotate(180deg)' }} />
                </div>
                <div>
                  <p>Projetos</p>
                  <p>Pendentes</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-2 justify-center">
                  <span className="text-lg font-semibold">
                    {loadingProjetos ? '...' : projectStats.concluidos}
                  </span>
                  <Award size={16} />
                </div>
                <div>
                  <p>Projetos</p>
                  <p>Concluídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 px-4">
          <Link 
            to="/app/create-project"
            className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
          >
            <Plus size={16} />
            <span className="text-sm">Novo Projeto</span>
          </Link>
          <Link 
            to="/app/projects"
            className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
          >
            <Edit3 size={16} />
            <span className="text-sm">Meus Projetos</span>
          </Link>
          <Link 
            to="/app/certificates"
            className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
          >
            <Award size={16} />
            <span className="text-sm">Certificados</span>
          </Link>
        </div>
      </aside>
    )
  }

  // SIDEBAR PARA PROFESSORES
  if (userType === 'professor' || userType === 'teacher') {
    return (
      <aside className="w-64 bg-bg-layouts text-black min-h-screen text-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-16 h-16 bg-green-600 rounded-lg mb-3 flex items-center justify-center mt-5">
            <User size={32} className="text-white" />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-sm">{user?.nome || 'Professor'}</h3>
          <p className="text-xs text-gray-800">{user?.especialidade || 'Educador'}</p>
          <p className="text-xs text-gray-800 mb-2">
            {user?.departamento || 'Departamento de TI'}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3">Orientações</h4>
          <div className="flex justify-center gap-2 items-center">
            <div className="flex flex-col space-y-2">
              <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-2 justify-center">
                  <span className="text-lg font-semibold">12</span>
                  <Users size={16} />
                </div>
                <div>
                  <p>Alunos</p>
                  <p>Orientados</p>
                </div>
              </div>
            </div>            <div className="flex flex-col space-y-2">
              <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-2 justify-center">
                  <span className="text-lg font-semibold">8</span>
                  <BookOpen size={16} />
                </div>
                <div>
                  <p>Projetos</p>
                  <p>Ativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 px-4">
          <Link 
            to="/app/teacher/projects"
            className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
          >
            <BookOpen size={16} />
            <span className="text-sm">Projetos</span>
          </Link>
          <Link 
            to="/app/teacher/students"
            className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
          >
            <Users size={16} />
            <span className="text-sm">Alunos</span>
          </Link>
          <Link 
            to="/app/teacher/evaluations"
            className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
          >
            <Award size={16} />
            <span className="text-sm">Avaliações</span>
          </Link>
        </div>
      </aside>
    )
  }
  // FALLBACK - SIDEBAR GENÉRICA (caso o tipo não seja identificado)
  return (
    <aside className="w-64 bg-bg-layouts text-black min-h-screen text-center">
      <div className="w-full flex items-center justify-center">
        <div className="w-16 h-16 bg-button-primary rounded-lg mb-3 flex items-center justify-center mt-5">
          <User size={32} className="text-white" />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-sm">{user?.nome || 'Usuário'}</h3>
        <p className="text-xs text-gray-800">{user?.email || 'Sistema SENAI'}</p>
        <p className="text-xs text-gray-800 mb-2">
          {user?.tipo || 'Usuário do Sistema'}
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3">Projetos</h4>
        <div className="flex justify-center gap-2 items-center">
          <div className="flex flex-col space-y-2">
            <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-2 justify-center">
                <span className="text-lg font-semibold">?</span>
                <Undo2 style={{ transform: 'rotate(180deg)' }} />
              </div>
              <div>
                <p>Projetos</p>
                <p>Pendentes</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-2 justify-center">
                <span className="text-lg font-semibold">?</span>
                <Award size={16} />
              </div>
              <div>
                <p>Projetos</p>
                <p>Concluídos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 px-4">
        <Link 
          to="/app/projects"
          className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
        >
          <Plus size={16} />
          <span className="text-sm">Ver Projetos</span>
        </Link>
        <Link 
          to="/app/account"
          className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200"
        >
          <Edit3 size={16} />
          <span className="text-sm">Minha Conta</span>
        </Link>
        <button 
          onClick={logout}
          className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-red-500 hover:text-white border border-red-300 text-red-600 transition-colors duration-200"
        >
          <LogIn size={16} className="rotate-180" />
          <span className="text-sm">Sair</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
