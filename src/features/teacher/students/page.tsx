import React, { useState } from 'react'
import { Search, Users, Mail, Phone, Award, BookOpen, TrendingUp } from 'lucide-react'
import { useAlunos, useProjetos } from '../../../hooks/use-queries'

const TeacherStudents = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Busca dados reais do backend
  const { data: alunos = [], isLoading } = useAlunos()
  const { data: projetos = [] } = useProjetos()

  // Processa turmas únicas dos alunos
  const classes = React.useMemo(() => {
    const uniqueClasses = [...new Set(alunos.map(aluno => aluno.curso).filter(Boolean))]
    return uniqueClasses.map(curso => ({
      id: curso,
      name: curso,
      students: alunos.filter(aluno => aluno.curso === curso).length
    }))
  }, [alunos])

  // Processa dados dos estudantes com estatísticas de projetos
  const students = React.useMemo(() => {
    return alunos.map((aluno, index) => {
      // Calcula estatísticas de projetos do aluno
      const alunoProjects = projetos.filter(projeto => projeto.liderProjeto?.uuid === aluno.uuid)
      const approvedProjects = alunoProjects.filter(p => p.status === 'CONCLUIDO' || p.status === 'FINALIZADO')
      
      return {
        id: aluno.uuid,
        name: aluno.usuarios?.usuario || 'Nome não informado',
        email: aluno.usuarios?.email || 'Email não informado',
        ra: aluno.matricula || `MAT${String(index + 1).padStart(6, '0')}`,
        class: aluno.curso || 'Curso não informado',
        phone: aluno.telefonePessoal || 'Não informado',
        projectsSubmitted: alunoProjects.length,
        projectsApproved: approvedProjects.length,
        averageGrade: 8.0, // Valor padrão até ter sistema de notas
        status: aluno.status?.toLowerCase() === 'ativo' ? 'active' : 'inactive',
        avatar: null
      }
    })
  }, [alunos, projetos])

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
              </thead>              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                        <p className="text-gray-500">Carregando estudantes...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <Users className="h-12 w-12 text-gray-300 mb-4" />
                        <p className="text-gray-500 text-lg font-medium">Nenhum estudante encontrado</p>
                        <p className="text-gray-400 text-sm">Tente ajustar os filtros de busca</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student) => (
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
                      </div>                    </td>
                  </tr>
                  ))
                )}
              </tbody>
            </table>          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherStudents
