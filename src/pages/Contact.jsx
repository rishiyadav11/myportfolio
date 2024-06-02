import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader  from '../components/Loader';
import Fox from '../model/Fox';
import toast from 'react-hot-toast';
const Contact = () => {
  const formRef  = useRef(null);
  const [form, setform] = useState({
    name:'',
    email: '',
    message: '',
  })
   const [isLoading, setisloading] = useState()
   const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) =>{
    setform({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) =>{
    setCurrentAnimation("hit")
    e.preventDefault();
    setisloading(true);
    emailjs.send(
      "service_dlt3p9h",
      "template_40owy5t",
      {
        from_name: form.name,
          to_name: "RISHI YADAV",
          from_email: form.email,
          to_email: "photonics54yadav@gmail.com",
          message: form.message,
      },
      "ZagHKHaQmgtZiRqXX"
    ) .then(
      () => {
        setisloading(false);
        toast.success("Thank you for your message 😃")

    })
    setTimeout(() => {
      setCurrentAnimation("idle");
      setform({
        name: "",
        email: "",
        message: "",
      });
    }, [3000]);
    (error) => {
      setisloading(false);
      console.error(error);
      setCurrentAnimation("idle");
      toast.error("I didn't receive your message 😢")
    };
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
    <div className="flex-1 min-w-[50%] flex flex-col  ">
        <h1 className='head-text'>Get in Touch</h1>
       <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
         <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='abc@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea resize-none'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas 
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}>
        <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
            <Suspense fallback={<Loader />}>
            <Fox
            currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact