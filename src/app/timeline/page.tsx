import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card';

type PostsType = {
  id: number;
  name: string;
  content: string;
};

const Page = () => {
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
