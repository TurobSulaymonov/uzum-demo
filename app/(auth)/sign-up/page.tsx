"use client";
import { registerSchema } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
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
import Link from 'next/link';

const SignUpPage = () => {

      const form = useForm<z.infer<typeof registerSchema>>({
            resolver: zodResolver(registerSchema),
            defaultValues: {fullName: '', email: '', password: '' },
        })
        
        function onSubmit(values: z.infer<typeof registerSchema>) {
            console.log("values",values)
        }

  return (
    <Card className='w-1/2 p-4'>
               <h1 className='text-xl font-bold'>Sign Up</h1>
       <p className='text-sm text-muted-foreground'>Welcome to our Platform! Please sign up to create an.</p>
     <Separator className='my-3' />
              <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
             <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <Label>Fullname:</Label>
              <FormControl>
                <Input placeholder="Plaese Enter Your Name" type='name' {...field} />
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
              <Label>Username</Label>
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
        Already have an account? {''}
        <Button asChild variant={'link'} className='p-0'>
            <Link href={'/sign-in'}>Sign In</Link>
        </Button>
      </div>
    </div>
    </Card>
  )
}

export default SignUpPage