import { useEffect, useState } from 'react';
import { useSession } from '../services/auth.service';
import loginImage from '../assets/login.png';

export const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [completed, setCompleted] = useState(false);
  const { signUp, getSession } = useSession();

  const submitHandler = async () => {
    if (password !== confirmation) return;
    const { data, error } = await signUp(email, password);
    if (error) {
      console.log('Error!', error);
    } else if (data) {
      console.log('Data!', data);
      setCompleted(true);
    }
  };

  useEffect(() => {
    getSession().then((session) => {
      console.log('SESSION', session);
    });
  }, []);

  const signUpForm = (
    <>
      <h1 className="font-sans text-8xl font-bold text-[#ffffff]">Sign Up</h1>
      <p className="font-sans text-xl text-[#ffc5c8] w-96 mt-2">
        Help Wisconsin help eachother through the <span className="text-[#b9e7de]">Production Hub Program</span>
      </p>
      <p className="mt-12 text-white font-sans font-bold">Email</p>
      <input
        type="email"
        className="mt-2 w-96 border-black border-2 p-2.5 focus:outline-none focus:bg-[#fdfd96] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        placeholder="you@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="mt-4 text-white font-sans font-bold">Password</p>
      <input
        type="password"
        className="mt-2 w-96 border-black border-2 p-2.5 focus:outline-none focus:bg-[#fdfd96] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="mt-4 text-white font-sans font-bold">Confirm Password</p>
      <input
        type="password"
        className="mt-2 w-96 border-black border-2 p-2.5 focus:outline-none focus:bg-[#fdfd96] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        onChange={(e) => setConfirmation(e.target.value)}
      />
      <br />
      <button className="mt-6 h-12 w-96 border-black border-2 p-2.5 bg-[#40d39c] hover:bg-[#b9e7de] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#4799ae]" onClick={submitHandler}>
        Sign Up
      </button>
      <p className="mt-2 font-sans text-white">
        Already have an account?{' '}
        <a href="/" className="text-[#fdfd96] font-bold">
          Login
        </a>
      </p>
    </>
  );

  const checkEmailDialog = (
    <>
      <p className="font-sans text-xl text-[#ffc5c8] w-96 mt-2">Thank you for signing up! To complete the process, please check your email for a confirmation link.</p>
      <br />
      <p className="mt-2 font-sans text-white">
        <a href="/" className="text-[#fdfd96] font-bold">
          Return to Login page
        </a>
      </p>
    </>
  );

  return (
    <>
      <div className="mx-36 ml-64 flex">
        <div className="mt-36 p-12 px-24 border-4 bg-[#0077b6] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
          {!completed && signUpForm}
          {completed && checkEmailDialog}
        </div>
        {/* https://www.freepik.com/premium-vector/international-business-abstract-concept-vector-illustration_32295126.htm#query=collaborate%20map&position=2&from_view=author&uuid=1bea15e7-02b9-4d9d-8582-c26240255ec9 */}
        <div className="pt-12">
          <img className="relative top-[50px] ml-36 w-[48rem]" src={loginImage} />
        </div>
      </div>
    </>
  );
};
