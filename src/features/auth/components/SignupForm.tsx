'use client'

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
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

export const SignupForm = () => {
  const [formState, formAction, isPending] = useActionState(signupAction, {})
  const router = useRouter()

  useEffect(() => {
    if (!isPending && formState?.id) {
      router.push('/timeline');
    }
  }, [isPending, formState?.id, router.push])

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
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">名前</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="id">プロフィールID</Label>
                <Input id="id" name="profileId" required />
              </div>
              <Button type="submit" className="w-full">
                アカウント作成
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}