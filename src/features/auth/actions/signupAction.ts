import { getClient } from '@/db/client';
import { users } from '@/db/schema/users';

type Arguments = {
  name: string;
  profileId: string;
};

const signup = async ({ name, profileId }: Arguments) => {
  const client = getClient();

  try {
    // usersテーブルにユーザを作成
    const inserted = await client
      .insert(users)
      .values({
        profileId,
        name,
      })
      .returning({ id: users.id });

    // IDを取得
    const id = inserted[0].id;

    // IDを返す
    return id;
  } catch (e) {
    console.error(e);
    throw new Error('ユーザ登録に失敗しました');
  }
};

export const signupAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  const profileId = formData.get('profileId') as string;

  const id = await signup({ name, profileId });
  console.log({ id });
};
