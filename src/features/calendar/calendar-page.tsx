import React, { useState, useMemo } from 'react';
import { useCalendarEvents } from '../../hooks/use-queries';
import { CalendarEvent } from '../../types/types-queries';
import EventCard from '../../components/EventCard';
import { Search as SearchIcon } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const { data: eventsData, isLoading, error } = useCalendarEvents();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const filteredEvents = useMemo(() => {
    if (!eventsData || !eventsData.data) return [];

    let events = eventsData.data;

    if (startDate) {
      events = events.filter(event => new Date(event.date) >= new Date(startDate));
    }
    if (endDate) {
      const inclusiveEndDate = new Date(endDate);
      inclusiveEndDate.setDate(inclusiveEndDate.getDate() + 1);
      events = events.filter(event => new Date(event.date) < inclusiveEndDate);
    }
    if (searchTerm) {
      events = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        event.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [eventsData, startDate, endDate, searchTerm]);

  // Dividir eventos em "Próximos Eventos" (próximos 7 dias) e "Eventos Futuros" (após 7 dias)
  const proximosEventos = useMemo(() => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= nextWeek;
    });
  }, [filteredEvents, today, nextWeek]);

  const eventosFuturos = useMemo(() => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate > nextWeek;
    });
  }, [filteredEvents, nextWeek]);

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <p>Carregando eventos...</p>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <p className="text-red-500">Erro ao carregar eventos: {error.message}</p>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Área de filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-700 font-medium">Período:</span>
            <div className="flex flex-wrap gap-2">
              <div>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-full px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="De..."
                />
              </div>
              <div>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-full px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Até..."
                />
              </div>
            </div>
            <div className="relative ml-auto">
              <input
                type="text"
                id="search"
                placeholder="Pesquisar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-full pl-10 pr-4 py-2 w-full min-w-[200px] focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-b border-gray-200 my-6"></div>

        {/* Próximos Eventos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Próximos Eventos</h2>
          
          {proximosEventos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximosEventos.map(event => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-6">Nenhum evento próximo encontrado.</p>
          )}
        </section>

        {/* Eventos Futuros */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Eventos Futuros</h2>
          
          {eventosFuturos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosFuturos.map(event => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-6">Nenhum evento futuro encontrado.</p>
          )}
        </section>
      </div>
    </div>
  );
};

// Componente para card de evento no estilo SENAI
const EventItem: React.FC<{ event: CalendarEvent }> = ({ event }) => {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate().toString().padStart(2, '0');
  const month = (eventDate.getMonth() + 1).toString().padStart(2, '0');
  
  return (
    <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
      {/* Card do evento no estilo da imagem */}
      <div className="bg-white rounded-l-lg p-4 flex-grow">
        <div className="inline-block bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-md mb-2">
          {event.type}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {event.description && event.description.length > 100 
            ? `${event.description.substring(0, 100)}...` 
            : event.description}
        </p>
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <span className="flex items-center">
            {event.location && (
              <>
                <span className="font-medium mr-1">Local:</span> {event.location}
              </>
            )}
          </span>
        </div>
      </div>
      
      {/* Data e hora no estilo da imagem */}
      <div className="flex flex-col justify-center text-center bg-gray-800 text-white px-6 py-4 min-w-[120px]">
        <div className="text-sm uppercase font-medium">Data</div>
        <div className="text-2xl font-bold">{day}/{month}</div>
        <div className="text-sm uppercase font-medium mt-2">Horário</div>
        <div className="text-2xl font-bold">{event.time}</div>
      </div>
    </div>
  );
};

export default CalendarPage;
