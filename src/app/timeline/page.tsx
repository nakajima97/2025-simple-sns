'use client';

import { Button } from '@/components/ui/shadcn/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/shadcn/dialog';
import { useEffect, useState } from 'react';

type PostsType = {
  id: number;
  name: string;
  content: string;
};

const Page = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [newUserId, setNewUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = sessionStorage.getItem('newUserId');
    if (userId) {
      setNewUserId(userId);
      setShowDialog(true);
      sessionStorage.removeItem('newUserId');
    }
  }, []);

  const posts: PostsType[] = [
    {
      id: 1,
      name: 'test',
      content: 'test',
    },
    {
      id: 2,
      name: 'test',
      content: 'test',
    },
    {
      id: 3,
      name: 'test',
      content: 'test',
    },
    {
      id: 4,
      name: 'test',
      content: 'test',
    },
    {
      id: 5,
      name: 'test',
      content: 'test',
    },
  ];

  return (
    <div>
      <h2>タイムライン</h2>
      <div className="space-y-2">
        {posts.map((post) => (
          <PostCard key={post.id} name={post.name} content={post.content} />
        ))}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>アカウント作成完了</DialogTitle>
            <DialogDescription>
              ユーザーID: {newUserId} でアカウントが作成されました！
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowDialog(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

type PostCardType = {
  name: string;
  content: string;
};

const PostCard = ({ name, content }: PostCardType) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default Page;
