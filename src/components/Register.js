import React from 'react';
import SignInSection from '../containers/SignInSection';
import SignUpSection from '../containers/SignUpSection';

const Register = () => {
  return (
    <section className='register'>
      <SignUpSection />
      <SignInSection />
    </section>
  )
}

export default Register;
