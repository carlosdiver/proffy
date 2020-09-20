import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";

import searchIcon from "../../assets/images/icons/search.svg";
import api from "../../services/api";

import "./style.css";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    if (response.data.length == 0) {
      alert("Sem resultados. Faça outra busca.");
    }
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffy's disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => [setSubject(e.target.value)]}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Educação física", label: "Educação física" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Língua Portuguesa", label: "Língua Portuguesa" },
              { value: "Matemática", label: "Matemática" },
              { value: "Química", label: "Química" },
              { value: "Sociologia", label: "Sociologia" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => [setWeekDay(e.target.value)]}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => [setTime(e.target.value)]}
          />
          <button type="submit">
            <img src={searchIcon} alt="Buscar" />
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.length === 0 && (
          <article className="teacher-item-empty">
            <h2>
              Selecione a matéria, o dia da semana e o horário em que deseja ter
              aula.
            </h2>
          </article>
        )}
        {teachers.map((teacher, key) => {
          return <TeacherItem key={key} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
