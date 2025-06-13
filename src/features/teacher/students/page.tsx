import React, { useState } from 'react'
import { Search, Users, Mail, Phone, Award, BookOpen, TrendingUp } from 'lucide-react'

const TeacherStudents = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const classes = [
    { id: 'TDS-2024-A', name: 'TDS 2024 - Turma A', students: 28 },
    { id: 'TDS-2024-B', name: 'TDS 2024 - Turma B', students: 32 },
    { id: 'TDS-2023', name: 'TDS 2023', students: 25 }
  ]

  const students = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@ba.estudante.br',
      ra: '2024001',
      class: 'TDS-2024-A',
      phone: '(71) 99999-9999',
      projectsSubmitted: 3,
      projectsApproved: 2,
      averageGrade: 8.5,
      status: 'active',
      avatar: null
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria.santos@ba.estudante.br',
      ra: '2024002',
      class: 'TDS-2024-A',
      phone: '(71) 98888-8888',
      projectsSubmitted: 4,
      projectsApproved: 4,
      averageGrade: 9.2,
      status: 'active',
      avatar: null
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro.costa@ba.estudante.br',
      ra: '2023001',
      class: 'TDS-2023',
      phone: '(71) 97777-7777',
      projectsSubmitted: 5,
      projectsApproved: 3,
      averageGrade: 7.8,
      status: 'active',
      avatar: null
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      email: 'ana.oliveira@ba.estudante.br',
      ra: '2024003',
      class: 'TDS-2024-B',
      phone: '(71) 96666-6666',
      projectsSubmitted: 2,
      projectsApproved: 1,
      averageGrade: 8.0,
      status: 'active',
      avatar: null
    },
    {
      id: 5,
      name: 'Carlos Ferreira',
      email: 'carlos.ferreira@ba.estudante.br',
      ra: '2024004',
      class: 'TDS-2024-B',
      phone: '(71) 95555-5555',
      projectsSubmitted: 1,
      projectsApproved: 0,
      averageGrade: 6.5,
      status: 'attention',
      avatar: null
    }
  ]

  const getGradeColor = (grade: number) => {
    if (grade >= 9) return 'text-green-600 bg-green-100'
    if (grade >= 7) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-700 bg-green-100'
      case 'attention':
        return 'text-yellow-700 bg-yellow-100'
      case 'inactive':
        return 'text-red-700 bg-red-100'
      default:
        return 'text-gray-700 bg-gray-100'
    }
  }

  const filteredStudents = students.filter(student => {
    const matchesClass = selectedClass === 'all' || student.class === selectedClass
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.ra.includes(searchTerm)
    return matchesClass && matchesSearch
  })

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gerenciar Estudantes</h1>
          <p className="text-gray-600 mt-2">Acompanhe o progresso e desempenho dos seus estudantes</p>
        </div>

        {/* Filtros */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar por nome, email ou RA..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Filtro por turma */}
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-400" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todas as Turmas</option>
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name} ({cls.students} estudantes)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Estatísticas das turmas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{cls.name}</h3>
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-1">{cls.students}</p>
              <p className="text-sm text-gray-600">estudantes ativos</p>
            </div>
          ))}
        </div>

        {/* Lista de estudantes */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Estudantes ({filteredStudents.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estudante
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Turma
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Projetos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Média
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">RA: {student.ra}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.class}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{student.projectsSubmitted}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-600">{student.projectsApproved}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(student.averageGrade)}`}>
                        {student.averageGrade.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                        {student.status === 'active' ? 'Ativo' : 
                         student.status === 'attention' ? 'Atenção' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <TrendingUp className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="text-purple-600 hover:text-purple-900">
                          <Phone className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum estudante encontrado</h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou termo de busca para encontrar estudantes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeacherStudents
