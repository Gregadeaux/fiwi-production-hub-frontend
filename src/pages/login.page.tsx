import { useEffect, useState } from 'react';
import { useSession } from '../services/auth.service';
import loginImage from '../assets/login.png';
import { useUser } from '../services/user.service';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, getSession } = useSession();
  const { retrieveFromSession } = useUser();

  const submitHandler = async () => {
    const { data, error } = await signIn(email, password);
    if (error) {
      console.log('Error!', error);
    } else if (data) {
      console.log('Data!', data);
      const { userData, userError } = await retrieveFromSession(data.session);
      console.log('USER DATA', userData, userError);
    }
  };

  useEffect(() => {
    getSession().then((session) => {
      console.log('SESSION', session);
    });
  }, []);

  return (
    <>
      <div className="mx-36 ml-64 flex">
        <div className="mt-36 p-12 px-24 border-4 bg-[#0077b6] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
          <h1 className="font-sans text-8xl font-bold text-[#ffffff]">Login</h1>
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
          <br />
          <button className="mt-6 h-12 w-96 border-black border-2 p-2.5 bg-[#40d39c] hover:bg-[#b9e7de] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#4799ae]" onClick={submitHandler}>
            Submit
          </button>
          <p className="mt-2 font-sans text-white">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#fdfd96] font-bold">
              Sign up
            </a>
          </p>
        </div>
        {/* https://www.freepik.com/premium-vector/international-business-abstract-concept-vector-illustration_32295126.htm#query=collaborate%20map&position=2&from_view=author&uuid=1bea15e7-02b9-4d9d-8582-c26240255ec9 */}
        <div className="pt-12">
          <img className="relative top-[50px] ml-36 w-[48rem]" src={loginImage} />
        </div>
      </div>
    </>
  );
};
