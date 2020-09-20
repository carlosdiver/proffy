import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import {
  BorderlessButton,
  RectButton,
  TextInput,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import PageHeader from "../../Components/PageHeader";
import TeacherItem, { Teacher } from "../../Components/TeacherItem";
import api from "../../services/api";

import styles from "./styles";

function TeachersList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
    if (isFiltersVisible == false) {
      setSubject("");
      setWeekDay("");
      setTime("");
    }
  }

  function day(day: string) {
     switch (day) {
      case "Domingo":
        setWeekDay("0");
        break;
      case "Segunda-feira":
        setWeekDay("1");
        break;
      case "Terça-feira":
        setWeekDay("2");
        break;
      case "Quarta-feira":
        setWeekDay("3");
        break;
      case "Quinta-feira":
        setWeekDay("4");
        break;
      case "Sexta-feira":
        setWeekDay("5");
        break;
      case "Sábado":
        setWeekDay("6");
        break;
    }
    return day;
  }

  async function handleFiltersSubmit() {
    try {
      loadFavorites();
      const response = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });
      if (response.data.length == 0) {
        alert("Sem resultado! Realize outra busca.");
        setTeachers([]);
      } else {
        setTeachers(response.data);
        setIsFiltersVisible(false);
      }
    } catch (error) {
      alert("Preencha todos os campos!");
      setTeachers([]);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffy's disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput
                  style={styles.input}
                  value={subject}
                  onChangeText={(text) => setSubject(text)}
                  placeholder={"Ex: Matemática"}
                  placeholderTextColor="#c1bccc"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  value={day(week_day)}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder={"Ex: Segunda-feira"}
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder={"Ex: 14:00"}
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <RectButton
                  onPress={handleFiltersSubmit}
                  style={styles.submitButton}
                >
                  <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
              </View>
            </View>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.length === 0 && isFiltersVisible == false && (
          <Text style={styles.teacherItemEmpty}>
            Clique no ícone acima para realizar uma busca.
          </Text>
        )}
        {teachers.length === 0 && isFiltersVisible == true && (
          <Text style={styles.teacherItemEmpty}>
            Selecione a matéria, o dia da semana e o horário em que deseja ter
            aula.
          </Text>
        )}
        {teachers.map((teacher: Teacher, index) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeachersList;
