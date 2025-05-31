import { Plus, Edit3, Award, User } from 'lucide-react'
const Sidebar = () => {
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
        <div className="flex space-x-4 mb-4 justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-button-primary rounded mb-1 flex items-center justify-center">
              <span className="text-xs">7</span>
            </div>
            <span className="text-xs text-black">
              Projetos
              <br />
              aprovados
            </span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-button-primary rounded mb-1 flex items-center justify-center">
              <span className="text-xs">3</span>
            </div>
            <span className="text-xs text-black">
              Projetos
              <br />
              pendentes
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <button className="flex items-center space-x-2 w-full justify-center p-2 rounded hover:bg-gray-700">
          <Plus size={16} />
          <span className="text-sm text-black">Adicionar Projeto</span>
        </button>
        <button className="flex items-center space-x-2 w-full justify-center p-2 rounded hover:bg-gray-700">
          <Edit3 size={16} />
          <span className="text-sm text-black">Atualizar Projeto</span>
        </button>
        <button className="flex items-center space-x-2 w-full justify-center p-2 rounded hover:bg-gray-700">
          <Award size={16} />
          <span className="text-sm text-black">Certificados</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
