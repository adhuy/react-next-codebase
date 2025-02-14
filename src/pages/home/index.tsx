import React from 'react';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { TextField } from '@/components/textfield';
import { Sidebar } from '@/components/sidebar';
import { HomeIcon, UserSquare2, Contact2 } from 'lucide-react';

function Home(){
  const list = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'About', icon: <UserSquare2 /> },
    { label: 'Contact', icon: <Contact2 /> },
  ];

  return (
    <div className='flex flex-col gap-2 w-fit'>
      <h1>Welcome to the Home Page</h1>
      <p>This is a sample React component using TypeScript.</p>
      <Badge label="ini badge" size='sm' primary/>
      <Button label="ini button" variant='success' primary/>
      <Card className='w-[500px]' description='lorem ipsum dolor sit amet' isImage imageWidth={200} imagePosition='left'/>
      <TextField 
        label='input'
        placeholder='masukan nama'
        type='text'
        required
      />
      
      <Sidebar list={list}/>
    
    </div>
  );
};

export default Home;