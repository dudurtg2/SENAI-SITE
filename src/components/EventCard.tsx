import React from 'react';
import { CalendarEvent } from '../types/types-queries';

interface EventCardProps {
  event: CalendarEvent;
  compact?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, compact = false }) => {
  const {
    title,
    description,
    type,
    date,
    time,
    location,
    instructor,
    duration,
    status,
    isRegistered,
    maxParticipants,
    currentParticipants,
  } = event;

  const eventDate = new Date(date);
  const formattedDate = eventDate.toLocaleDateString('pt-BR');
  const day = eventDate.getDate().toString().padStart(2, '0');
  const month = (eventDate.getMonth() + 1).toString().padStart(2, '0');

  if (compact) {
    // Versão compacta para uso em outros contextos
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
        <div className="flex-grow">
          <div className="inline-block bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded mb-2">
            {type}
          </div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          {description && <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>}
          <div className="text-sm text-gray-500 mt-2">
            <div className="flex justify-between">
              <span>{formattedDate}</span>
              <span>{time}</span>
            </div>
            {location && <div className="mt-1">{location}</div>}
          </div>
        </div>
        {isRegistered !== undefined && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <span className={`text-sm ${isRegistered ? 'text-green-600' : 'text-gray-500'}`}>
              {isRegistered ? 'Inscrito' : 'Não inscrito'}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Versão completa estilizada como na imagem de referência
  return (
    <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
      {/* Informações do evento */}
      <div className="bg-white rounded-l-lg p-4 flex-grow">
        <div className="inline-block bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-md mb-2">
          {type}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-2">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 mt-2">
          {location && (
            <span className="flex items-center">
              <span className="font-medium mr-1">Local:</span> {location}
            </span>
          )}
          {instructor && (
            <span className="flex items-center">
              <span className="font-medium mr-1">Instrutor:</span> {instructor}
            </span>
          )}
          {status && (
            <span className="flex items-center">
              <span className="font-medium mr-1">Status:</span> {status}
            </span>
          )}
          {maxParticipants !== undefined && currentParticipants !== undefined && (
            <span className="flex items-center">
              <span className="font-medium mr-1">Participantes:</span> {currentParticipants}/{maxParticipants}
            </span>
          )}
          {duration && (
            <span className="flex items-center">
              <span className="font-medium mr-1">Duração:</span> {duration}
            </span>
          )}
        </div>
      </div>
      
      {/* Data e hora */}
      <div className="flex flex-col justify-center text-center bg-gray-800 text-white px-6 py-4 min-w-[120px]">
        <div className="text-sm uppercase font-medium">Data</div>
        <div className="text-2xl font-bold">{day}/{month}</div>
        <div className="text-sm uppercase font-medium mt-2">Horário</div>
        <div className="text-2xl font-bold">{time}</div>
      </div>
    </div>
  );
};

export default EventCard;
