'use client';
import { Card } from '@/components/ui/card'
import { loginSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import  { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator';

const SigninPage = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {email: '', password: '' },
    })
    
    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log("values",values)
    }

  return (
    <Card className='w-1/2 p-4'>
       <h1 className='text-xl font-bold'>Sign In</h1>
       <p className='text-sm text-muted-foreground'>Welcome back! Please sign in to your account.</p>
   <Separator className='my-3'/>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <Label>Email</Label>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <Label>Password</Label>
              <FormControl>
                <Input placeholder="****" type='password' {...field} />
              </FormControl>
              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <div className='mt-4'>
      <div className='text-sm text-muted-foreground'>
        Don&apos;t have an account? {''}
        <Button asChild variant={'link'} className='p-0'>
            <Link href={'/sign-up'}>Sign Up</Link>
        </Button>
      </div>
    </div>
    </Card>
  )
}

export default SigninPage