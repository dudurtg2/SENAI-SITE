import { Plus, Edit3, Award, User, Undo2, TriangleAlert } from 'lucide-react'

interface SidebarProps {
  isLoggedIn: boolean
}

const Sidebar = ({ isLoggedIn }: SidebarProps) => {
  if (!isLoggedIn) {
    return (
      <aside className="w-64 bg-bg-layouts text-black min-h-screen flex flex-col justify-center items-center text-center p-4">
        <TriangleAlert size={48} className="text-button-primary mb-4" />
        <p className="mb-4 text-lg">Não conectado!.</p>
        <div className="space-y-2 w-full px-6">
          <button className="w-full p-2 rounded-md bg-button-primary text-white hover:bg-opacity-80 transition">
            Fazer Login
          </button>
          <button className="w-full p-2 rounded-md border border-primary-text text-primary-text hover:bg-button-primary hover:text-white transition">
            Criar Conta
          </button>
        </div>
      </aside>
    )
  }

  return (
    <aside className="w-64 bg-bg-layouts text-black min-h-screen text-center">
      <div className="w-full flex items-center justify-center">
        <div className="w-16 h-16 bg-button-primary rounded-lg mb-3 flex items-center justify-center mt-5">
          <User size={32} className="text-gray-300" />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-sm">Guilherme da Paixão...</h3>
        <p className="text-xs text-gray-800">RA 000 000000</p>
        <p className="text-xs text-gray-800 mb-2">
          Técnico em Desenvolvimento de
          <br />
          Sistemas
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3">Projetos</h4>
        <div className="flex justify-center gap-2 items-center">
          <div className="flex flex-col space-y-2">
            <div className="p-2 rounded-lg border-primary-text border cursor-pointer hover:bg-button-primary hover:text-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-2 justify-center">
                <span className="text-lg font-semibold">5</span>
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
                <span className="text-lg font-semibold">5</span>
                <Undo2 style={{ transform: 'rotate(180deg)' }} />
              </div>
              <div>
                <p>Projetos</p>
                <p>Pendentes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 px-4">
        <button className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200">
          <Plus size={16} />
          <span className="text-sm">Adicionar Projeto</span>
        </button>
        <button className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200">
          <Edit3 size={16} />
          <span className="text-sm">Atualizar Projeto</span>
        </button>
        <button className="flex items-center space-x-2 w-full justify-center p-2 rounded-md hover:bg-button-primary hover:text-gray-100 border border-primary-text transition-colors duration-200">
          <Award size={16} />
          <span className="text-sm">Certificados</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
