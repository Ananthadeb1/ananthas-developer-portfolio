import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('service_ti3zrbi', 'template_lqg7n62', form.current, 'IqGSa4xrRANqE1UAM')
      .then((result) => {
          console.log(result.text);
          if(result){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Message has been sent successfully.',
                showConfirmButton: false,
                timer: 1500
              })
          }
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="mb-10 ">
            <div className='text-center pb-10'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- c o n t a c t</p>
                <h1 className='text-5xl font-bold  '>Get in touch</h1>
            </div>
            <div>
                <form action="submit" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col items-center">

                        <div className="w-3/4 sm:flex  sm:justify-between ">

                            <input type="email" name='email' placeholder="Your Email" className="input w-full max-w-xs bg-[#131F33] text-white border-b border-t-0 border-x-0 rounded-none border-[#6c757dc6] hover:border-[#E1A34C] text-xl" />

                            <input type="text" name='name' placeholder="Your Name" className="input w-full max-w-xs bg-[#131F33] text-white border-b border-t-0 border-x-0 rounded-none border-[#6c757dc6] hover:border-[#E1A34C] text-xl" />
                        </div>

                        <textarea name='message' className="textarea w-3/4 bg-[#131F33] text-white border-b border-t-0 border-x-0 rounded-none border-[#6c757dc6] hover:border-[#E1A34C] mt-10 text-xl" placeholder="Type message here "></textarea>

                        <button type="submit" value="Send" className="btn rounded-none hover:bg-[#424C5C] border-none text-white bg-[#E1A34C] font-normal text-lg mt-10 normal-case px-10">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;