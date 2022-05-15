import client from "./client";

const endpoint = "/questions";

interface Question {
  question: string
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  answer5: string
}

const getQuestions = () => client.get<Question[]>(endpoint);

export default {
   getQuestions,
};
