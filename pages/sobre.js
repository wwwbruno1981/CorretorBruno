import Nav from '../components/nav'
import Footer from '../components/footer'
import React, { useState } from 'react';
import Router from 'next/router';




const Submits = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitData = async () => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Nav />
    <main className="relative mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-5">
        <div className="sm:text-center lg:text-left">
        <div className="min-h-full flex justify-center text-opacity-50 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <div>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          </div>
          <div>
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          </div>
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div></div>
      </main>
      
      <Footer />
    </>
  );
};

export default Submits;
   
    
   
 