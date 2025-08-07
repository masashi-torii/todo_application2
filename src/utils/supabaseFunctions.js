import { supabase } from "../utils/supabase"

export const getAllTodos =  async () => {
    const todos = await supabase.from("study-record").select("*");
    return todos;
    
}

export const insertTodos = async (inputNaiyoValue, inputTimeValue) => {
    const { error } = await supabase.from('study-record').insert({ title:inputNaiyoValue, time:parseInt(inputTimeValue) });
    if (error) {
        console.error("データ追加エラー:", error);
        return;
    }
}
