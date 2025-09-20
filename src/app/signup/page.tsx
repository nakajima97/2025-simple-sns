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
import { signupAction } from '@/features/auth/actions/signupAction';

const Page = () => {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <Card className="w-full max-w-sm h-fit">
        <CardHeader>
          <CardTitle>Create to your account</CardTitle>
          <CardDescription>SNSで使う名前を入力してください</CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
          <form action={signupAction}>
        <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">名前</Label>
                <Input id="name" name='name' required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="id">プロフィールID</Label>
                <Input id="id" name='profileId' required />
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
          </form>
      </Card>
    </div>
  );
}

export default Page;
