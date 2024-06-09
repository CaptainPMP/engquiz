import { createClient } from "@/utils/supabase/server";
import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient();

  try {
    // Parse the request body
    const { UserId, QuestionID, UserAnswer, Attemp } = req.body;

    // Fetch the correct answer from the Questions table
    const { data: questionData, error: questionError } = await supabase
      .from('Questions')
      .select('CorrectAnswer')
      .eq('id', QuestionID)
      .single();

    if (questionError) throw questionError;

    const correctAnswerId = questionData.CorrectAnswer;

    // Check if the user's answer is correct
    const { data: choiceData, error: choiceError } = await supabase
      .from('Choices')
      .select('id')
      .eq('question_id', QuestionID)
      .eq('choice', UserAnswer)
      .single();

    if (choiceError) throw choiceError;

    const isCorrect = choiceData.id === correctAnswerId;

    // Get the current timestamp
    const submitDate = new Date().toISOString();

    // Save the user answer and whether it is correct
    const { data: userAnswerData, error: userAnswerError } = await supabase
      .from('UserAnswers')
      .insert([{ UserId, QuestionID, UserAnswer, IsCorrect: isCorrect, SubmitDate: submitDate, Attemp }]);

    if (userAnswerError) throw userAnswerError;

    return res.status(201).json(userAnswerData);
  } catch (error) {
    console.error("Error processing user answer:", error);
    return res.status(500).json({ error: (error as Error).message });
  }
}
