import { useEffect, useState } from 'react';
import { useSession } from '../services/auth.service';
import loginImage from '../assets/login.png';
import { useUser } from '../services/user.service';
import classNames from 'classnames';

export const WizardPage: React.FC = () => {
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [name, setName] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState('Program');
  const [selectedTeam, setSelectedTeam] = useState('');
  const { signIn, getSession } = useSession();
  const { retrieveFromSession } = useUser();

  const submitHandler = async () => {
    // const { data, error } = await signIn(email, password);
    // if (error) {
    //   console.log('Error!', error);
    // } else if (data) {
    //   console.log('Data!', data);
    //   const { userData, userError } = await retrieveFromSession(data.session);
    //   console.log('USER DATA', userData, userError);
    // }
  };

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
    setProgramDropdownOpen(false);
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
          <h1 className="font-sans text-8xl font-bold text-[#ffffff]">Account Setup</h1>
          <p className="font-sans text-xl text-[#ffc5c8] w-96 mt-2">We need some more information from you before we get started.</p>
          <p className="mt-12 text-white font-sans font-bold">Name</p>
          <input
            type="text"
            className="mt-2 w-96 border-black border-2 p-2.5 focus:outline-none focus:bg-[#fdfd96] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            placeholder="Woodie Flowers"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="mt-4 text-white font-sans font-bold">Select Your Team</p>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-72 justify-center gap-x-1.5 bg-[#B8FF9F] hover:bg-[#99fc77] px-3 py-2 border-black border-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setProgramDropdownOpen(!programDropdownOpen)}
              >
                {selectedProgram}
                <svg className="mt-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={classNames('w-72 absolute z-10 mt-2 w-56 origin-top-right bg-white focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] border-black border-2 divide-y divide-black', {
                hidden: !programDropdownOpen,
              })}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div role="none">
                <p className="block px-4 py-2 text-sm border-black border-b-2 hover:bg-[#B8FF9F] hover:font-medium" role="menuitem" id="menu-item-0" onClick={(e) => handleProgramSelect('FRC')}>
                  FRC
                </p>
                <p className="block px-4 py-2 text-sm border-black border-b-2 hover:bg-[#B8FF9F] hover:font-medium" role="menuitem" id="menu-item-1" onClick={(e) => handleProgramSelect('FTC')}>
                  FTC
                </p>
              </div>
            </div>
          </div>
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
