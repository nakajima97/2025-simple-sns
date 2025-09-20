import { Button } from '@/components/ui/shadcn/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card';
import { Input } from '@/components/ui/shadcn/input';
import { Label } from '@/components/ui/shadcn/label';

const Page = () => (
  <div className="flex justify-center items-center w-full h-dvh">
    <Card className="w-full max-w-sm h-fit">
      <CardHeader>
        <CardTitle>Create to your account</CardTitle>
        <CardDescription>SNSで使う名前を入力してください</CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="id">名前</Label>
              <Input id="name" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default Page;
