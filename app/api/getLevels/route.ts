import { createClient } from "@/utils/supabase/server";
// import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.body;
    const supabase = createClient();

    // Fetch user data including LevelID
    const { data: user, error: userError } = await supabase
      .from('User')
      .select('LevelID')
      .eq('id', userId)
      .single();
  
    if (userError) {
      return res.status(500).json({ error: userError.message });
    }
  
    // Fetch the level data based on LevelID
    const { data: level, error: levelError } = await supabase
      .from('Levels')
      .select('*')
      .eq('id', user.LevelID)
      .single();
  
    if (levelError) {
      return res.status(500).json({ error: levelError.message });
    }
  
    res.status(200).json({ level });
}
