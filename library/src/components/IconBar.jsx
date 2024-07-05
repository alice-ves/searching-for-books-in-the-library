import {
  BookOpenIcon,
  SpeakerWaveIcon,
  DevicePhoneMobileIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  MapIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const icons = [
  { icon: <BookOpenIcon className="h-4 w-4" />, name: 'Kniha' },
  { icon: <SpeakerWaveIcon className="h-4 w-4" />, name: 'Audiokniha' },
  { icon: <DevicePhoneMobileIcon className="h-4 w-4" />, name: 'E-kniha' },
  { icon: <MusicalNoteIcon className="h-4 w-4" />, name: 'Hudba' },
  { icon: <MicrophoneIcon className="h-4 w-4" />, name: 'Mluvené slovo' },
  { icon: <MapIcon className="h-4 w-4" />, name: 'Mapa' },
  { icon: <NewspaperIcon className="h-4 w-4" />, name: 'Noviny, časopisy' },
  { icon: <PuzzlePieceIcon className="h-4 w-4" />, name: 'Společenské hry' },
  { icon: <GlobeAltIcon className="h-4 w-4" />, name: 'Mapy' },
  {
    icon: <ChatBubbleBottomCenterIcon className="h-4 w-4" />,
    name: 'Albi tužka',
  },
  {
    icon: <AcademicCapIcon className="h-4 w-4" />,
    name: 'Legistativní dokument',
  },
];

export const IconBar = () => {
  const [choosenMedium, setChoosenMedium] = useState(null);

  const handleIconClick = (iconName) => {
    setChoosenMedium(iconName);
  };

  return (
    <div className="flex flex-row flex-wrap gap-2 ">
      {icons.map((icon) => {
        return (
          <button
            value={icon.name}
            onClick={(event) => {
              event.preventDefault();
              handleIconClick(icon.name);
            }}
            key={icon.name}
            className="flex flex-col items-center  text-font-color bg-light-orange p-1"
          >
            <div>{icon.icon}</div>
            {/*<span>{icon.name}</span>*/}
          </button>
        );
      })}
    </div>
  );
};
