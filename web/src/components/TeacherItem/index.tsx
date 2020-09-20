import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

import "./styles.css";

interface TeacherItemProps {
  teacher: {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    subject: string;
    whatsapp: string;
    cost: number;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Hora/aula <strong>R$ {teacher.cost},00</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/55${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
