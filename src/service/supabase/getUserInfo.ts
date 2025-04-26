import supabaseClient from '@/service/supabase/supabaseClient';

export const getUserInfo = async () => {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (user) {
    const { data: profileData } = await supabaseClient
      .from('profiles')
      .select('id, email, name')
      .eq('id', user.id)
      .single();

    return profileData;
  }

  return null;
};
